import { weather } from "./modules/weather.js";

const searchForm = document.querySelector(".city-search");
const searchField = document.querySelector(".city-search__input");
const cardTemplate = document.querySelector("#template-weather-card");
const cardContainer = document.querySelector(".weather-card-container");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let city = weather.cityName(searchField);
  while (cardContainer.firstChild) {
    cardContainer.lastChild.remove();
  }

  weather.fetchData(city).then((data) => {
    let cardEle = weather.createCard(data, cardTemplate);
    weather.renderCard(cardEle, cardContainer);
  });
});
