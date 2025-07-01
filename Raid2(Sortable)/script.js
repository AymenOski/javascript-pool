const url =
  "https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json";

let allHeroes = [];
let currentFilter = "";
let currentNumber = 20;
let currentSortColumn = 1;
let currentSortOrder = "asc";
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
  let column = columnMap[currentSortColumn];
  if (currentSortOrder === "asc") {
    
  }
  const toShow = currentNumber === "all" ? filtered : filtered.slice(0, parseInt(currentNumber));

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


const sorting = () => {
  const sort = document.querySelectorAll(".sort-btn");
  sort.forEach((button , index) => {
    button.addEventListener("click" , () => {
      const checkbox = button.querySelector(".sort-order");
      checkbox.checked = !checkbox.checked;
      sort.forEach((btn , i) => {
        if(i !== index) {
          const cb = btn.querySelector(".sort-order");
          cb.checked = false;
        }
      })
      const order = checkbox.checked ? "desc" : "asc";
      currentSortOrder = order;
      currentSortColumn = index;
    });
  });
}

function extractNumber(value) {
  const match = value.match(/\d+/);
  return match ? parseInt(match[0]) : NaN;
}

sorting();