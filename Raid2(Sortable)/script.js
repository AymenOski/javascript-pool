const url =
  "https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json";

let allHeroes = [];
let currentFilter = "";
let currentNumber = 20;
let currentSortColumn = 'name';
let currentSortOrder = 'asc';
const columnMap = {
  1: "name",
  2: "biography.fullName",
  3: "powerstats.intelligence",
  4: "appearance.race",
  5: "appearance.gender",
  6: "appearance.height[1]",
  7: "appearance.weight[1]",
  8: "biography.placeOfBirth",
  9: "biography.alignment",
};

const parsedata = (heroes) => {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  heroes.forEach((hero) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td><img src="${hero.images.xs}" alt="${hero.name}"/></td>
      <td>${hero.name}</td>
      <td>${hero.biography.fullName}</td>
      <td>
        Combat: ${hero.powerstats.combat}<br>
        Durability: ${hero.powerstats.durability}<br>
        Intelligence: ${hero.powerstats.intelligence}<br>
        Power: ${hero.powerstats.power}<br>
        Speed: ${hero.powerstats.speed}<br>
        Strength: ${hero.powerstats.strength}
      </td>
      <td>${hero.appearance.race}</td>
      <td>${hero.appearance.gender}</td>
      <td>${hero.appearance.height[1]}</td>
      <td>${hero.appearance.weight[1]}</td>
      <td>${hero.biography.placeOfBirth}</td>
      <td>${hero.biography.alignment}</td>
    `;

    tbody.appendChild(tr);
  });
};

const updateDisplay = () => {
  let filtered = allHeroes;

  if (currentFilter !== "") {
    filtered = allHeroes.filter((hero) =>
      hero.name.toLowerCase().includes(currentFilter)
    );
  }
  let toShow = currentNumber === "all" ? filtered : filtered.slice(0, parseInt(currentNumber));

  // let column = columnMap[currentSortColumn];
  // let last = [];
  // if (currentSortOrder === "asc") {
  //   if (toShow.some(v => extractNumber(v) || v === '')) {
  //     if (v === '') {
  //       last.push(v);
  //     }
  //     toShow.column.sort((a, b) => a - b);
  //   } else {
  //     // string 
  //     toShow.column.sort((a, b) => a.localeCompare(b));
  //   }
  // } else if (currentSortOrder === "desc") {
  //   if (toShow.column.some(v => extractNumber(v))) {
  //     ages.sort((a, b) => b - a);
  //   } else {
  //     // string 
  //     heroes.sort((a, b) => b.localeCompare(a));
  //   }
  // }
  // toShow.column.push(...last)
  parsedata(toShow);
};

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    allHeroes = data;
    updateDisplay();
  });

document.getElementById("select").addEventListener("change", (e) => {
  currentNumber = e.target.value;
  updateDisplay();
});

document.getElementById("site-search").addEventListener("input", (e) => {
  currentFilter = e.target.value.toLowerCase();
  updateDisplay();
});


const setupSorting = () => {
  document.querySelectorAll('th[data-column]').forEach(th => {
    th.addEventListener('click', () => {
      const column = th.dataset.column;
      if (column === 'images.xs') return;
      if (currentSortColumn === column) {
        currentSortOrder = currentSortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        currentSortColumn = column;
        currentSortOrder = 'asc';
      }
      document.querySelectorAll('th').forEach(header => {
        header.classList.remove('sorted-asc', 'sorted-desc');
      });
      th.classList.add(`sorted-${currentSortOrder}`);
      updateDisplay();
    });
  });
};
setupSorting();

function extractNumber(value) {
  const match = value.match(/\d+/);
  return match ? parseInt(match[0]) : NaN;
}