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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy93ZWF0aGVyLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsV0FBVztBQUN4RSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBLHlEQUF5RCxvQ0FBb0M7QUFDN0Ysc0VBQXNFLHFCQUFxQjtBQUMzRixnRUFBZ0UsbUJBQW1CO0FBQ25GLG9FQUFvRSxnQkFBZ0I7QUFDcEYsOERBQThELG9DQUFvQzs7QUFFbEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWLENBQUM7Ozs7Ozs7VUNsREQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGlFQUFnQjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxrRUFBaUI7QUFDbkIsa0JBQWtCLG1FQUFrQjtBQUNwQyxJQUFJLG1FQUFrQjtBQUN0QixHQUFHO0FBQ0gsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgd2VhdGhlciB9O1xuXG5jb25zdCB3ZWF0aGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKHNlYXJjaFRlcm0pIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7c2VhcmNoVGVybX0mYXBwaWQ9MTNjYTYzZWU1YzllOWI1OTQwY2Y2OWYyOWZmYjYyMzNgLFxuICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICAgICk7XG4gICAgICBpZiAocmVzcG9uc2Uub2sgPT09IGZhbHNlKSB0aHJvdyBlcnI7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coXCJmYWlsZWQgdG8gZmV0Y2ggd2VhdGhlclwiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaXR5TmFtZShzZWFyY2hGaWVsZEVsZSkge1xuICAgIHJldHVybiBzZWFyY2hGaWVsZEVsZS52YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNhcmQoZGF0YSwgdGVtcGxhdGUpIHtcbiAgICBsZXQgY2xvbmUgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY2xvbmUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBmbGV4O1wiKTtcbiAgICBjbG9uZS5xdWVyeVNlbGVjdG9yKFwiLmNpdHlcIikudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gICAgY2xvbmUucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZVwiKS50ZXh0Q29udGVudCA9IGAke2NvbnZlcnRUb0ZhaHJlbmhlaXQoZGF0YS5tYWluLnRlbXApfSBGYDtcbiAgICBjbG9uZS5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItYXJ0XCIpLnNldEF0dHJpYnV0ZShcInNyY1wiLCBgaW1hZ2VzLyR7ZGF0YS53ZWF0aGVyWzBdLmljb259LnBuZ2ApO1xuICAgIGNsb25lLnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIikudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7ZGF0YS5tYWluLmh1bWlkaXR5fSVgO1xuICAgIGNsb25lLnF1ZXJ5U2VsZWN0b3IoXCIuY2xvdWRpbmVzc1wiKS50ZXh0Q29udGVudCA9IGBDbG91ZGluZXNzOiAke2RhdGEuY2xvdWRzLmFsbH0lYDtcbiAgICBjbG9uZS5xdWVyeVNlbGVjdG9yKFwiLndpbmQtc3BlZWRcIikudGV4dENvbnRlbnQgPSBgV2luZDogJHtjb252ZXJ0TWV0ZXJUb01pbGUoZGF0YS53aW5kLnNwZWVkKX0gTVBIYDtcblxuICAgIHJldHVybiBjbG9uZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRNZXRlclRvTWlsZShtZXRlcnMpIHtcbiAgICByZXR1cm4gKG1ldGVycyAqIDM2MDAgKiAwLjAwMDYyMTM3KS50b0ZpeGVkKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0VG9GYWhyZW5oZWl0KGtlbHZpbikge1xuICAgIHJldHVybiAoKGtlbHZpbiAtIDI3My4xNSkgKiAxLjggKyAzMikudG9GaXhlZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydFRvQ2Vsc2l1cyhrZWx2aW4pIHtcbiAgICByZXR1cm4gKGtlbHZpbiAtIDI3My4xNSkudG9GaXhlZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyQ2FyZChjYXJkRWxlLCBjYXJkQ29udGFpbmVyKSB7XG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmQoY2FyZEVsZSk7XG4gIH1cblxuICByZXR1cm4geyBjcmVhdGVDYXJkLCBmZXRjaERhdGEsIHJlbmRlckNhcmQsIGNpdHlOYW1lIH07XG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB3ZWF0aGVyIH0gZnJvbSBcIi4vbW9kdWxlcy93ZWF0aGVyLmpzXCI7XG5cbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHktc2VhcmNoXCIpO1xuY29uc3Qgc2VhcmNoRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHktc2VhcmNoX19pbnB1dFwiKTtcbmNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcGxhdGUtd2VhdGhlci1jYXJkXCIpO1xuY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1jYXJkLWNvbnRhaW5lclwiKTtcblxuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IGNpdHkgPSB3ZWF0aGVyLmNpdHlOYW1lKHNlYXJjaEZpZWxkKTtcbiAgd2hpbGUgKGNhcmRDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGNhcmRDb250YWluZXIubGFzdENoaWxkLnJlbW92ZSgpO1xuICB9XG5cbiAgd2VhdGhlci5mZXRjaERhdGEoY2l0eSkudGhlbigoZGF0YSkgPT4ge1xuICAgIGxldCBjYXJkRWxlID0gd2VhdGhlci5jcmVhdGVDYXJkKGRhdGEsIGNhcmRUZW1wbGF0ZSk7XG4gICAgd2VhdGhlci5yZW5kZXJDYXJkKGNhcmRFbGUsIGNhcmRDb250YWluZXIpO1xuICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==