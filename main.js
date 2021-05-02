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
    }
  }

  function cityName(searchFieldEle) {
    return searchFieldEle.value;
  }

  function createCard(data, template) {
    let clone = template.cloneNode(true);
    clone.setAttribute("style", "display: flex;");
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
    debugger;
    return scale(kelvin);
  }

  function toggleTempScale() {
    let scale = getTempScale() === convertToFahrenheit ? convertToCelsius : convertToFahrenheit;
    setTempScale(scale);
    debugger;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy93ZWF0aGVyLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtQjs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELFdBQVc7QUFDeEUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQSx5REFBeUQsNEJBQTRCO0FBQ3JGLHNFQUFzRSxxQkFBcUI7QUFDM0YsZ0VBQWdFLG1CQUFtQjtBQUNuRixvRUFBb0UsZ0JBQWdCO0FBQ3BGLDhEQUE4RCxvQ0FBb0M7O0FBRWxHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMseUNBQXlDO0FBQ3ZEOztBQUVBO0FBQ0EsY0FBYyw0QkFBNEI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVixDQUFDOzs7Ozs7O1VDdkVEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTitDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGlFQUFnQjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxrRUFBaUI7QUFDbkIsa0JBQWtCLG1FQUFrQjtBQUNwQyxJQUFJLG1FQUFrQjtBQUN0QixHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsd0VBQXVCO0FBQ3pCLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IHdlYXRoZXIgfTtcblxuY29uc3Qgd2VhdGhlciA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCB0ZW1wU2NhbGUgPSBjb252ZXJ0VG9GYWhyZW5oZWl0O1xuXG4gIGZ1bmN0aW9uIGdldFRlbXBTY2FsZSgpIHtcbiAgICByZXR1cm4gdGVtcFNjYWxlO1xuICB9XG4gIGZ1bmN0aW9uIHNldFRlbXBTY2FsZShzY2FsZSkge1xuICAgIHRlbXBTY2FsZSA9IHNjYWxlO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKHNlYXJjaFRlcm0pIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7c2VhcmNoVGVybX0mYXBwaWQ9MTNjYTYzZWU1YzllOWI1OTQwY2Y2OWYyOWZmYjYyMzNgLFxuICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICAgICk7XG4gICAgICBpZiAocmVzcG9uc2Uub2sgPT09IGZhbHNlKSB0aHJvdyBlcnI7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coXCJmYWlsZWQgdG8gZmV0Y2ggd2VhdGhlclwiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaXR5TmFtZShzZWFyY2hGaWVsZEVsZSkge1xuICAgIHJldHVybiBzZWFyY2hGaWVsZEVsZS52YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNhcmQoZGF0YSwgdGVtcGxhdGUpIHtcbiAgICBsZXQgY2xvbmUgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY2xvbmUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBmbGV4O1wiKTtcbiAgICBjbG9uZS5xdWVyeVNlbGVjdG9yKFwiLmNpdHlcIikudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gICAgY2xvbmUucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZVwiKS50ZXh0Q29udGVudCA9IGAke2NvbnZlcnRUZW1wKGRhdGEubWFpbi50ZW1wKX1gO1xuICAgIGNsb25lLnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1hcnRcIikuc2V0QXR0cmlidXRlKFwic3JjXCIsIGBpbWFnZXMvJHtkYXRhLndlYXRoZXJbMF0uaWNvbn0ucG5nYCk7XG4gICAgY2xvbmUucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eVwiKS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtkYXRhLm1haW4uaHVtaWRpdHl9JWA7XG4gICAgY2xvbmUucXVlcnlTZWxlY3RvcihcIi5jbG91ZGluZXNzXCIpLnRleHRDb250ZW50ID0gYENsb3VkaW5lc3M6ICR7ZGF0YS5jbG91ZHMuYWxsfSVgO1xuICAgIGNsb25lLnF1ZXJ5U2VsZWN0b3IoXCIud2luZC1zcGVlZFwiKS50ZXh0Q29udGVudCA9IGBXaW5kOiAke2NvbnZlcnRNZXRlclRvTWlsZShkYXRhLndpbmQuc3BlZWQpfSBNUEhgO1xuXG4gICAgcmV0dXJuIGNsb25lO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydFRlbXAoa2VsdmluKSB7XG4gICAgbGV0IHNjYWxlID0gZ2V0VGVtcFNjYWxlKCk7XG4gICAgZGVidWdnZXI7XG4gICAgcmV0dXJuIHNjYWxlKGtlbHZpbik7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVUZW1wU2NhbGUoKSB7XG4gICAgbGV0IHNjYWxlID0gZ2V0VGVtcFNjYWxlKCkgPT09IGNvbnZlcnRUb0ZhaHJlbmhlaXQgPyBjb252ZXJ0VG9DZWxzaXVzIDogY29udmVydFRvRmFocmVuaGVpdDtcbiAgICBzZXRUZW1wU2NhbGUoc2NhbGUpO1xuICAgIGRlYnVnZ2VyO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydE1ldGVyVG9NaWxlKG1ldGVycykge1xuICAgIHJldHVybiAobWV0ZXJzICogMzYwMCAqIDAuMDAwNjIxMzcpLnRvRml4ZWQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRUb0ZhaHJlbmhlaXQoa2VsdmluKSB7XG4gICAgcmV0dXJuIGAkeygoa2VsdmluIC0gMjczLjE1KSAqIDEuOCArIDMyKS50b0ZpeGVkKCl9IEZgO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydFRvQ2Vsc2l1cyhrZWx2aW4pIHtcbiAgICByZXR1cm4gYCR7KGtlbHZpbiAtIDI3My4xNSkudG9GaXhlZCgpfSBDYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckNhcmQoY2FyZEVsZSwgY2FyZENvbnRhaW5lcikge1xuICAgIGNhcmRDb250YWluZXIuYXBwZW5kKGNhcmRFbGUpO1xuICB9XG5cbiAgcmV0dXJuIHsgY3JlYXRlQ2FyZCwgZmV0Y2hEYXRhLCByZW5kZXJDYXJkLCBjaXR5TmFtZSwgdG9nZ2xlVGVtcFNjYWxlIH07XG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB3ZWF0aGVyIH0gZnJvbSBcIi4vbW9kdWxlcy93ZWF0aGVyLmpzXCI7XG5cbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHktc2VhcmNoXCIpO1xuY29uc3Qgc2VhcmNoRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHktc2VhcmNoX19pbnB1dFwiKTtcbmNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcGxhdGUtd2VhdGhlci1jYXJkXCIpO1xuY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1jYXJkLWNvbnRhaW5lclwiKTtcbmNvbnN0IHRlbXBUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoZWNrXCIpO1xuXG5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgY2l0eSA9IHdlYXRoZXIuY2l0eU5hbWUoc2VhcmNoRmllbGQpO1xuICB3aGlsZSAoY2FyZENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgY2FyZENvbnRhaW5lci5sYXN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cblxuICB3ZWF0aGVyLmZldGNoRGF0YShjaXR5KS50aGVuKChkYXRhKSA9PiB7XG4gICAgbGV0IGNhcmRFbGUgPSB3ZWF0aGVyLmNyZWF0ZUNhcmQoZGF0YSwgY2FyZFRlbXBsYXRlKTtcbiAgICB3ZWF0aGVyLnJlbmRlckNhcmQoY2FyZEVsZSwgY2FyZENvbnRhaW5lcik7XG4gIH0pO1xufSk7XG5cbnRlbXBUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIHdlYXRoZXIudG9nZ2xlVGVtcFNjYWxlKCk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=