// async function fetchData(id) {
//     try {
//         const result = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
//         const body = await result.json();
//         showData(body)

//     } catch (error) {
//         console.log(error.message);
//     }
// }

// let start = 1
// let offset = 20


// const button = document.getElementById('seeMore')
// button.addEventListener('click', () => {
//     start += 20
//     offset += 20
//     console.log('clicked');
//     for (let i = start; i <= offset; i++) {
//         fetchData(i)
//     }
// }
// )

// const showData = (content) => {
//     const div = document.getElementById('show')
//     const p = document.createElement('p')
//     p.textContent = content.title
//     div.appendChild(p)
// }