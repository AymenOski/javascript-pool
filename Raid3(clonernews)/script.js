let polleArray = [];
let StoriesJobsArray = [];
let updatesArray = [];
let offset = 4;
let idCount = 0;
let secendIdCount = 0;
let PoolAPI_isFetching = false;
let lastFetchType = null;
let displayedUpdateIds = new Set(); // to prevent showing the same updated item


async function fetchData(ToFetch, id) {
    try {
        const result = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        const body = await result.json();
        console.log(body);
        if (!body.dead) {
            if (ToFetch === "/v0/maxitem") {
                if (body.type === 'pool') {
                    polleArray.push(body);
                    showData()
                }
            } else {
                StoriesJobsArray.push(body);
                showData()
            }
        }
    } catch (error) {
        console.log(error.message);
    }
}



async function fetchMaxItemID() {
    try {
        const result = await fetch("https://hacker-news.firebaseio.com/v0/maxitem.json");
        const body = await result.json();
        idCount = body;
    } catch (error) {
        console.log('Error:', error.message);
    }
}

async function fetchPoolBatchOnClick() {
    let counter = idCount
    while (polleArray.length < offset && PoolAPI_isFetching) {
        await fetchData("/v0/maxitem", counter)
        counter--
    }
    PoolAPI_isFetching = false;
    idCount = counter
}

async function fetchStoriesAndJobsBatchOnClick(ToFetch) {
    try {
        const result = await fetch(`https://hacker-news.firebaseio.com/${ToFetch}.json`);
        const body = await result.json();

        if (Array.isArray(body)) {
            body.slice(secendIdCount, secendIdCount + offset).forEach(el => fetchData("", el));
            secendIdCount += offset + 1;
        }
    } catch (error) {
        console.log(error.message);
    }
}

const showData = (NotifyItem = null) => {
    const div = document.getElementById('show')
    let item = (polleArray.length > 0 ? polleArray[polleArray.length - 1] : StoriesJobsArray[StoriesJobsArray.length - 1]);
        if (NotifyItem !== null){
            item = NotifyItem; // Latest updates case
        }
    
    const p = document.createElement('p');
    p.className = 'fade-in';

    const title = item.title || 'No Title';
    const author = item.by || 'Unknown';
    const url = item.url || null;

    p.innerHTML = `
                <strong>${item.id} ${title}</strong><br>
                <strong>${item.type}</strong>
                <small>by ${author}</small><br>
            `;

    div.appendChild(p);
    p.addEventListener('click', () => {
        if (url) {
            window.open(url)
        } else {
            alert('Sorry the link for this is lost');
        }
    })
}

const destroyerOfElements = () => {
    const Items = document.querySelectorAll('#show p')
    Items.forEach(p => p.remove());
}

// fetching new stories with a throttle to limite requests
const Throttle = (fn, delay = 1000) => {
    let canCall = true
    return function (...args) {
        const currentType = args.length > 0 ? args[0] : "/v0/maxitem";
        if (!canCall) return;

        if (lastFetchType !== currentType) {
            destroyerOfElements();
            StoriesJobsArray = [];
            polleArray = [];
            secendIdCount = 0;
        }

        if (currentType !== "/v0/maxitem") { // in case of polle API request
            idCount = 0;
        }


        fn(...args)
        canCall = false

        lastFetchType = currentType
        setTimeout(() => {
            canCall = true
        }, delay);
    }
}

const stories = document.getElementById('fetchNewStories')
const throttledStoriesFetch = Throttle(fetchStoriesAndJobsBatchOnClick)
stories.addEventListener('click', () => {
    PoolAPI_isFetching = false;
    stories.classList.remove('notify');
    throttledStoriesFetch("v0/newstories")
})

const jobs = document.getElementById('fetchNewJobs')
const throttledJobsFetch = Throttle(fetchStoriesAndJobsBatchOnClick)
jobs.addEventListener('click', () => {
    PoolAPI_isFetching = false;
    jobs.classList.remove('notify');
    throttledJobsFetch("v0/jobstories")
})

const pools = document.getElementById('fetchNewPolls')
const throttledPollFetch = Throttle(fetchPoolBatchOnClick)

pools.addEventListener('click', async () => {
    if (PoolAPI_isFetching) {
        // old polle proccess still trying to fetch...
        alert('Already working on it...');
        return;
    }
    PoolAPI_isFetching = true;
    await fetchMaxItemID();
    throttledPollFetch();
})

setInterval(() => {
    checkForUpdates();
}, 5000)


async function fetchItem(id) {
    try {
        const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        return await res.json();
    } catch (error) {
        console.error("Error fetching item:", error);
        return null;
    }
}

async function findRootStory(id) {
    let item = await fetchItem(id);

    while (item && item.type === 'comment' && item.parent) {
        item = await fetchItem(item.parent);
    }

    return item;
}

const checkForUpdates = async () => {
    try {
        const res = await fetch("https://hacker-news.firebaseio.com/v0/updates.json");
        const updates = await res.json();
        console.log(updates);
        
        for (const updatedId of updates.items) {
            if(displayedUpdateIds.has(updatedId)) continue; 

            const root = await findRootStory(updatedId);
            if (root && !displayedUpdateIds.has(root.id)) {
                updatesArray.push(root);
                displayedUpdateIds.add(root.id);
            }
        }

        if (updatesArray.length > 0) {
            document.getElementById('newItems').classList.add('notify');
        }
    } catch (error) {
        console.error("Error checking updates:", error);
    }
}

document.getElementById('newItems').addEventListener('click', () => {
    destroyerOfElements();
    StoriesJobsArray = [];
    polleArray = [];

    updatesArray.forEach(item => {
        showData(item);
    });

    updatesArray = [];
    displayedUpdateIds.clear(); 
    document.getElementById('newItems').classList.remove('notify'); 
});
