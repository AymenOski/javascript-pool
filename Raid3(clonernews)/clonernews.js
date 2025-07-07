let id = 1;
let start = 1;
let offset = 20;
let allItems = [];
let targetLength = 20;
let counter = 0;

async function fetchData(id) {
    try {
        const result = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        );
        const body = await result.json();
        
        if(allItems.length === targetLength){
            showDataSorted(allItems);
            console.log(allItems.length);
            
            allItems = [];
            return
        }
        if (body.type === 'comment') {
            counter++
            return await fetchData(++id)
        }
        if (body.type === 'story') {
            counter++
            allItems.push(body);
            return await fetchData(++id)
            
        }
                    
    } catch (error) {
        console.error(error.message)
    }
};

fetchData(id);

const button = document.getElementById('seeMore')
button.addEventListener('click', () => {
    console.log('clicked');

        fetchData(id + counter)
}
)

const showDataSorted = (items) => {
    const div = document.getElementById('show')
    const sorted = items.sort((a, b) => b.time - a.time);
    sorted.forEach(post => {
        const p = document.createElement('p')
        p.textContent = `🕒 ${Number((post.time / (1000 * 60 * 60 * 60)).toFixed(6))} hours| 🆔 ${post.id} | 📝 ${post.title} | 📝 ${post.type}`
        div.appendChild(p)
    });
};

