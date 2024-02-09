const container = document.querySelector("#main");
const btn = document.querySelector("button");

function country(data, neighbour = "") {
  const html = `<div class="box ${neighbour}">
    <img src="${data.flag}" alt="">
    <div id="div1">
        <h2 id="name">${data.name}</h2>
        <p id="rigion">${data.region}</p>
    </div>
    <div id="div2">
        <p id="population">👨‍👩‍👧‍👦 :${data.population} </p>
        <p id="language">🗣️   :${data.languages[0].name}</p>
        <p id="currency">💸   :${data.currencies[0].name}</p>
    </div>`;

  container.insertAdjacentHTML("beforeend", html);
}
function rendererr(msg) {
  container.insertAdjacentText("beforeend", msg);
}
function getData(name) {
  fetch(`https://restcountries.com/v2/name/${name}`)
    .then((data) => data.json())
    .then(([, data]) => {
      console.log(data);
      country(data);
      const neighbour = data.borders[1];
      console.log(neighbour);
    })
    .catch((err) => {
      console.log(err);
      rendererr(`Something went wrong${err.message}`);
    });
}

btn.addEventListener("click", function () {
  getData("indgd");
});
