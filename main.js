/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weather": () => (/* binding */ weather)
/* harmony export */ });


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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather.js */ "./src/modules/weather.js");


const searchForm = document.querySelector(".city-search");
const searchField = document.querySelector(".city-search__input");
const cardTemplate = document.querySelector("#template-weather-card");
const cardContainer = document.querySelector(".weather-card-container");
const tempToggle = document.querySelector(".check");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let city = _modules_weather_js__WEBPACK_IMPORTED_MODULE_0__.weather.cityName(searchField);
  while (cardContainer.firstChild) {
    cardContainer.lastChild.remove();
  }

  _modules_weather_js__WEBPACK_IMPORTED_MODULE_0__.weather.fetchData(city).then((data) => {
    let cardEle = _modules_weather_js__WEBPACK_IMPORTED_MODULE_0__.weather.createCard(data, cardTemplate);
    _modules_weather_js__WEBPACK_IMPORTED_MODULE_0__.weather.renderCard(cardEle, cardContainer);
  });
});

tempToggle.addEventListener("click", (e) => {
  _modules_weather_js__WEBPACK_IMPORTED_MODULE_0__.weather.toggleTempScale();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy93ZWF0aGVyLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtQjs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELFdBQVc7QUFDeEUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsNEJBQTRCO0FBQ3JGLHNFQUFzRSxxQkFBcUI7QUFDM0YsZ0VBQWdFLG1CQUFtQjtBQUNuRixvRUFBb0UsZ0JBQWdCO0FBQ3BGLDhEQUE4RCxvQ0FBb0M7O0FBRWxHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyx5Q0FBeUM7QUFDdkQ7O0FBRUE7QUFDQSxjQUFjLDRCQUE0QjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWLENBQUM7Ozs7Ozs7VUMzRUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsaUVBQWdCO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLGtFQUFpQjtBQUNuQixrQkFBa0IsbUVBQWtCO0FBQ3BDLElBQUksbUVBQWtCO0FBQ3RCLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0EsRUFBRSx3RUFBdUI7QUFDekIsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgd2VhdGhlciB9O1xuXG5jb25zdCB3ZWF0aGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHRlbXBTY2FsZSA9IGNvbnZlcnRUb0ZhaHJlbmhlaXQ7XG5cbiAgZnVuY3Rpb24gZ2V0VGVtcFNjYWxlKCkge1xuICAgIHJldHVybiB0ZW1wU2NhbGU7XG4gIH1cbiAgZnVuY3Rpb24gc2V0VGVtcFNjYWxlKHNjYWxlKSB7XG4gICAgdGVtcFNjYWxlID0gc2NhbGU7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoc2VhcmNoVGVybSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtzZWFyY2hUZXJtfSZhcHBpZD0xM2NhNjNlZTVjOWU5YjU5NDBjZjY5ZjI5ZmZiNjIzM2AsXG4gICAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICAgKTtcbiAgICAgIGlmIChyZXNwb25zZS5vayA9PT0gZmFsc2UpIHRocm93IGVycjtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImZhaWxlZCB0byBmZXRjaCB3ZWF0aGVyXCIpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2l0eU5hbWUoc2VhcmNoRmllbGRFbGUpIHtcbiAgICByZXR1cm4gc2VhcmNoRmllbGRFbGUudmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDYXJkKGRhdGEsIHRlbXBsYXRlKSB7XG4gICAgbGV0IGNsb25lID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgIGxldCBjaXR5Tm90Rm91bmQgPSBcIk5vIGNpdHkgZm91bmQgd2l0aCB0aGF0IG5hbWUgOihcIjtcbiAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IGZsZXg7XCIpO1xuICAgIGlmIChkYXRhID09PSBudWxsKSB7XG4gICAgICBjbG9uZS5xdWVyeVNlbGVjdG9yKFwiLmNpdHlcIikudGV4dENvbnRlbnQgPSBjaXR5Tm90Rm91bmQ7XG4gICAgICByZXR1cm4gY2xvbmU7XG4gICAgfVxuICAgIGNsb25lLnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eVwiKS50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgICBjbG9uZS5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlXCIpLnRleHRDb250ZW50ID0gYCR7Y29udmVydFRlbXAoZGF0YS5tYWluLnRlbXApfWA7XG4gICAgY2xvbmUucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWFydFwiKS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYGltYWdlcy8ke2RhdGEud2VhdGhlclswXS5pY29ufS5wbmdgKTtcbiAgICBjbG9uZS5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5XCIpLnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2RhdGEubWFpbi5odW1pZGl0eX0lYDtcbiAgICBjbG9uZS5xdWVyeVNlbGVjdG9yKFwiLmNsb3VkaW5lc3NcIikudGV4dENvbnRlbnQgPSBgQ2xvdWRpbmVzczogJHtkYXRhLmNsb3Vkcy5hbGx9JWA7XG4gICAgY2xvbmUucXVlcnlTZWxlY3RvcihcIi53aW5kLXNwZWVkXCIpLnRleHRDb250ZW50ID0gYFdpbmQ6ICR7Y29udmVydE1ldGVyVG9NaWxlKGRhdGEud2luZC5zcGVlZCl9IE1QSGA7XG5cbiAgICByZXR1cm4gY2xvbmU7XG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0VGVtcChrZWx2aW4pIHtcbiAgICBsZXQgc2NhbGUgPSBnZXRUZW1wU2NhbGUoKTtcbiAgICByZXR1cm4gc2NhbGUoa2VsdmluKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVRlbXBTY2FsZSgpIHtcbiAgICBsZXQgc2NhbGUgPSBnZXRUZW1wU2NhbGUoKSA9PT0gY29udmVydFRvRmFocmVuaGVpdCA/IGNvbnZlcnRUb0NlbHNpdXMgOiBjb252ZXJ0VG9GYWhyZW5oZWl0O1xuICAgIHNldFRlbXBTY2FsZShzY2FsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0TWV0ZXJUb01pbGUobWV0ZXJzKSB7XG4gICAgcmV0dXJuIChtZXRlcnMgKiAzNjAwICogMC4wMDA2MjEzNykudG9GaXhlZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydFRvRmFocmVuaGVpdChrZWx2aW4pIHtcbiAgICByZXR1cm4gYCR7KChrZWx2aW4gLSAyNzMuMTUpICogMS44ICsgMzIpLnRvRml4ZWQoKX0gRmA7XG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0VG9DZWxzaXVzKGtlbHZpbikge1xuICAgIHJldHVybiBgJHsoa2VsdmluIC0gMjczLjE1KS50b0ZpeGVkKCl9IENgO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ2FyZChjYXJkRWxlLCBjYXJkQ29udGFpbmVyKSB7XG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmQoY2FyZEVsZSk7XG4gIH1cblxuICByZXR1cm4geyBjcmVhdGVDYXJkLCBmZXRjaERhdGEsIHJlbmRlckNhcmQsIGNpdHlOYW1lLCB0b2dnbGVUZW1wU2NhbGUgfTtcbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHdlYXRoZXIgfSBmcm9tIFwiLi9tb2R1bGVzL3dlYXRoZXIuanNcIjtcblxuY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eS1zZWFyY2hcIik7XG5jb25zdCBzZWFyY2hGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eS1zZWFyY2hfX2lucHV0XCIpO1xuY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wbGF0ZS13ZWF0aGVyLWNhcmRcIik7XG5jb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWNhcmQtY29udGFpbmVyXCIpO1xuY29uc3QgdGVtcFRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tcIik7XG5cbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCBjaXR5ID0gd2VhdGhlci5jaXR5TmFtZShzZWFyY2hGaWVsZCk7XG4gIHdoaWxlIChjYXJkQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjYXJkQ29udGFpbmVyLmxhc3RDaGlsZC5yZW1vdmUoKTtcbiAgfVxuXG4gIHdlYXRoZXIuZmV0Y2hEYXRhKGNpdHkpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBsZXQgY2FyZEVsZSA9IHdlYXRoZXIuY3JlYXRlQ2FyZChkYXRhLCBjYXJkVGVtcGxhdGUpO1xuICAgIHdlYXRoZXIucmVuZGVyQ2FyZChjYXJkRWxlLCBjYXJkQ29udGFpbmVyKTtcbiAgfSk7XG59KTtcblxudGVtcFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgd2VhdGhlci50b2dnbGVUZW1wU2NhbGUoKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==