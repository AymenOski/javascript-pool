let array = []
let offset = 10
let idCount = 0

const maxID_URL = `https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty`

async function fetchData(id) {
    try {
        const result = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
        const body = await result.json();
        console.log(body);
        
        if (body.type !== 'comment' && !body.dead ) {
            array.push(body);
            showData()
        }

    } catch (error) {
        console.log(error.message);
    }
}
async function fetchMaxItemID() {
    try {
        const result = await fetch(maxID_URL);
        console.log(result);
        
        const body = await result.json();
        
        idCount = body-700;

    } catch (error) {
        console.log('Error:', error.message);
    }
}
async function fetchBatchOnClick() {
    let counter = idCount
    while (array.length < offset) {
        await fetchData(counter)
        counter--
    }
    idCount = counter
}

const fetchThrottle = () => {
    let canCall = true
    return function () {
        console.log(canCall);
        if (canCall) {
            array = []
            fetchBatchOnClick()
            
            canCall = false
            setTimeout(() => {
                canCall = true
            }, 5000);
        }
    }
}

const button = document.getElementById('seeMore')
button.addEventListener('click',
    fetchThrottle()
)
const showData = () => {
    const div = document.getElementById('show')
    const item = array[array.length - 1];

    const p = document.createElement('p');
    p.className = 'fade-in';
    p.dataset.post = `${item.id}`;
    console.log(item);
    
    const title = item.title || 'No Title';
    const author = item.by || 'Unknown';
    const url = item.url || '-';

    p.innerHTML = `
                <strong>${item.id} ${title}</strong><br>
                <strong>${item.type}</strong>
                <small>by ${author}</small><br>
            `;
            
            div.appendChild(p);
            p.addEventListener('click', () => {
                window.open(url)
            })
        }



async function initApp() {
    await fetchMaxItemID()
    fetchBatchOnClick()
}

initApp()

async function checkForUpdates() {
     try {

     }
     catch(error){

     }
}

// Run every 60 seconds
setInterval(checkForUpdates, 20000);