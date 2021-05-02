export { weather };

const weather = (function () {
  let tempScale = convertToFahrenheit;

  function getTempScale() {
    return tempScale;
  }
  function setTempScale(scale) {
    tempScale = scale;
  }

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
      return null;
    }
  }

  function cityName(searchFieldEle) {
    return searchFieldEle.value;
  }

  function createCard(data, template) {
    let clone = template.cloneNode(true);
    let cityNotFound = "No city found with that name :(";
    clone.setAttribute("style", "display: flex;");
    if (data === null) {
      clone.querySelector(".city").textContent = cityNotFound;
      return clone;
    }
    clone.querySelector(".city").textContent = data.name;
    clone.querySelector(".temperature").textContent = `${convertTemp(data.main.temp)}`;
    clone.querySelector(".weather-art").setAttribute("src", `images/${data.weather[0].icon}.png`);
    clone.querySelector(".humidity").textContent = `Humidity: ${data.main.humidity}%`;
    clone.querySelector(".cloudiness").textContent = `Cloudiness: ${data.clouds.all}%`;
    clone.querySelector(".wind-speed").textContent = `Wind: ${convertMeterToMile(data.wind.speed)} MPH`;

    return clone;
  }

  function convertTemp(kelvin) {
    let scale = getTempScale();
    return scale(kelvin);
  }

  function toggleTempScale() {
    let scale = getTempScale() === convertToFahrenheit ? convertToCelsius : convertToFahrenheit;
    setTempScale(scale);
  }

  function convertMeterToMile(meters) {
    return (meters * 3600 * 0.00062137).toFixed();
  }

  function convertToFahrenheit(kelvin) {
    return `${((kelvin - 273.15) * 1.8 + 32).toFixed()} F`;
  }

  function convertToCelsius(kelvin) {
    return `${(kelvin - 273.15).toFixed()} C`;
  }

  function renderCard(cardEle, cardContainer) {
    cardContainer.append(cardEle);
  }

  return { createCard, fetchData, renderCard, cityName, toggleTempScale };
})();
