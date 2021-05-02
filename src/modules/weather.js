export { weather };

const weather = (function () {
  async function fetchData(searchTerm) {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=13ca63ee5c9e9b5940cf69f29ffb6233`,
        { mode: "cors" }
      );
      if (response.ok === false) throw err;
      return response.json();
    } catch (err) {
      console.log("failed to fetch weather");
    }
  }

  function cityName(searchFieldEle) {
    return searchFieldEle.value;
  }

  function createCard(data, template) {
    let clone = template.cloneNode(true);
    clone.setAttribute("style", "display: flex;");
    clone.querySelector(".city").textContent = data.name;
    clone.querySelector(".temperature").textContent = `${convertToFahrenheit(data.main.temp)} F`;
    clone.querySelector(".weather-art").setAttribute("src", `images/${data.weather[0].icon}.png`);
    clone.querySelector(".humidity").textContent = `Humidity: ${data.main.humidity}%`;
    clone.querySelector(".cloudiness").textContent = `Cloudiness: ${data.clouds.all}%`;
    clone.querySelector(".wind-speed").textContent = `Wind: ${convertMeterToMile(data.wind.speed)} MPH`;

    return clone;
  }

  function convertMeterToMile(meters) {
    return (meters * 3600 * 0.00062137).toFixed();
  }

  function convertToFahrenheit(kelvin) {
    return ((kelvin - 273.15) * 1.8 + 32).toFixed();
  }

  function convertToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed();
  }

  function renderCard(cardEle, cardContainer) {
    cardContainer.append(cardEle);
  }

  return { createCard, fetchData, renderCard, cityName };
})();
