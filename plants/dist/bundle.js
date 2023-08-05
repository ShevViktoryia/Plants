/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/data/citiesData.js":
/*!***********************************!*\
  !*** ./assets/data/citiesData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst citiesData = [\r\n  {\r\n    id: 1,\r\n    city: 'Yonkers, NY',\r\n    phone: '+1\t914\t678 0003',\r\n    address: '511 Warburton Ave'\r\n  },\r\n  {\r\n    id: 2,\r\n    city: 'Canandaigua, NY',\r\n    phone: '+1\t585\t393 0001',\r\n    address: '151 Charlotte Street'\r\n  },\r\n  {\r\n    id: 3,\r\n    city: 'Sherrill, NY',\r\n    phone: '+1\t315\t908 0004',\r\n    address: '14 WEST Noyes BLVD'\r\n  },\r\n  {\r\n    id: 4,\r\n    city: 'New York City',\r\n    phone: '+1\t212\t456 0002',\r\n    address: '9 East 91st Street'\r\n  }\r\n];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (citiesData);\n\n//# sourceURL=webpack://plants/./assets/data/citiesData.js?");

/***/ }),

/***/ "./assets/scripts/activeAccordion.js":
/*!*******************************************!*\
  !*** ./assets/scripts/activeAccordion.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ activeAccordion)\n/* harmony export */ });\nfunction activeAccordion() {\r\n  let acc = [...document.querySelectorAll('.price_category')];\r\n\r\n  acc.forEach(item => {\r\n    item.addEventListener(\"click\", () => {\r\n      item.classList.toggle('active_category');\r\n      let panel = item.nextElementSibling;\r\n      panel.style.display === 'block' ? panel.style.display = 'none' : panel.style.display = 'block';\r\n    });\r\n  });\r\n}\n\n//# sourceURL=webpack://plants/./assets/scripts/activeAccordion.js?");

/***/ }),

/***/ "./assets/scripts/activeCity.js":
/*!**************************************!*\
  !*** ./assets/scripts/activeCity.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ activeCity)\n/* harmony export */ });\n/* harmony import */ var _data_citiesData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/citiesData */ \"./assets/data/citiesData.js\");\n\r\n\r\nfunction activeCity() {\r\n  let selectCity = document.querySelector('.city');\r\n  let city_block = document.querySelector('.city_block');\r\n  if(city_block.style.display !== 'flex' && window.matchMedia(\"(max-width: 1240px)\")) {\r\n    selectCity.style.marginBottom = '250px';\r\n  }\r\n  if(city_block.style.display !== 'flex' && window.matchMedia(\"(max-width: 680px)\")) {\r\n    selectCity.style.marginBottom = '132px';\r\n  }\r\n  selectCity.addEventListener(\"change\", e => {\r\n    if(city_block.style.display !== 'flex' && window.matchMedia(\"(max-width: 1240px)\")) {\r\n      selectCity.style.marginBottom = '0px';\r\n    }\r\n    if(city_block.style.display !== 'flex' && window.matchMedia(\"(max-width: 680px)\")) {\r\n      selectCity.style.marginBottom = '0px';\r\n    }\r\n    _data_citiesData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(item => {\r\n      if(e.target.value == item.city) {\r\n        city_block.innerHTML = '';\r\n        city_block.style.display = 'flex';\r\n        const city = document.createElement('p');\r\n        city.className = 'city_name';\r\n        const city_span = document.createElement('span');\r\n        city_span.textContent = 'City:';\r\n        city.textContent = item.city;\r\n        city.prepend(city_span);\r\n        const city_phone = document.createElement('p');\r\n        city_phone.className = 'city_phone';\r\n        const phone_span = document.createElement('span');\r\n        phone_span.textContent = 'Phone:';\r\n        city_phone.innerHTML = item.phone;\r\n        city_phone.prepend(phone_span);\r\n        const city_address = document.createElement('p');\r\n        city_address.className = 'city_address';\r\n        const address_span = document.createElement('span');\r\n        address_span.textContent = 'Office address:';\r\n        city_address.textContent = item.address;\r\n        city_address.prepend(address_span);\r\n        const call_btn = document.createElement('a');\r\n        call_btn.className = 'call_btn';\r\n        call_btn.setAttribute('href', `tel:${item.phone}`);\r\n        call_btn.textContent = 'Call us';\r\n        city_block.append(city);\r\n        city_block.append(city_phone);\r\n        city_block.append(city_address);\r\n        city_block.append(call_btn);\r\n      }\r\n      if(e.target.value == 'City') {\r\n        city_block.innerHTML = '';\r\n        city_block.style.display = 'none';\r\n      }\r\n    })\r\n  });\r\n}\n\n//# sourceURL=webpack://plants/./assets/scripts/activeCity.js?");

/***/ }),

/***/ "./assets/scripts/activeMenuItem.js":
/*!******************************************!*\
  !*** ./assets/scripts/activeMenuItem.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet navList = document.getElementById(\"nav_list\");\r\nlet navItems = navList.getElementsByClassName(\"item_link\");\r\n\r\nfunction addActiveClass() {\r\n  for(let i = 0; i < navItems.length; i++) {\r\n    navItems[i].addEventListener(\"click\", function(){\r\n      let curItem = document.getElementsByClassName(\"active\");\r\n      curItem[0].className = curItem[0].className.replace(\" active\", \"\");\r\n      this.className += \" active\";\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addActiveClass);\n\n//# sourceURL=webpack://plants/./assets/scripts/activeMenuItem.js?");

/***/ }),

/***/ "./assets/scripts/serviceButtons.js":
/*!******************************************!*\
  !*** ./assets/scripts/serviceButtons.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ serviceButtons)\n/* harmony export */ });\nfunction serviceButtons() {\r\n  let service_buttons = document.querySelector('.service_buttons');\r\n  let service_arr = [...document.querySelectorAll('.service_item')];\r\n  let buttons = [...document.querySelector('.service_buttons').children];\r\n  let count = 0;\r\n\r\n  service_buttons.addEventListener('click', e => {\r\n    e.target.classList.toggle('active_button');\r\n    service_arr.forEach(service => {\r\n      if(service.id !== e.target.id ) {\r\n        service.classList.add('inactive_service');\r\n        buttons.forEach(btn => {\r\n          !btn.classList.contains('active_button') ? count++ : count--;\r\n          if(count === 3) {\r\n            service_arr.forEach(service => service.classList.remove('inactive_service'));\r\n          }\r\n        })\r\n      }\r\n      else {\r\n        e.target.classList.contains('active_button') ? service.classList.add('active_service') : service.classList.remove('active_service');\r\n      }\r\n    })\r\n    service_arr.forEach(active => {\r\n      if(active.classList.contains('active_service')) {\r\n        service.classList.remove('inactive_service');\r\n        service.classList.remove('active_service')\r\n      }\r\n    });\r\n  });\r\n}\n\n//# sourceURL=webpack://plants/./assets/scripts/serviceButtons.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_scripts_activeMenuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scripts/activeMenuItem */ \"./assets/scripts/activeMenuItem.js\");\n/* harmony import */ var _assets_scripts_serviceButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/scripts/serviceButtons */ \"./assets/scripts/serviceButtons.js\");\n/* harmony import */ var _assets_scripts_activeAccordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/scripts/activeAccordion */ \"./assets/scripts/activeAccordion.js\");\n/* harmony import */ var _assets_scripts_activeCity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/scripts/activeCity */ \"./assets/scripts/activeCity.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_assets_scripts_activeMenuItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_assets_scripts_serviceButtons__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_assets_scripts_activeAccordion__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_assets_scripts_activeCity__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack://plants/./script.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;