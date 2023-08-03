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

/***/ "./assets/scripts/activeAccordion.js":
/*!*******************************************!*\
  !*** ./assets/scripts/activeAccordion.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ activeAccordion)\n/* harmony export */ });\nfunction activeAccordion() {\r\n  let acc = [...document.querySelectorAll('.price_category')];\r\n\r\n  acc.forEach(item => {\r\n    item.addEventListener(\"click\", () => {\r\n      item.classList.toggle('active_category');\r\n      let panel = item.nextElementSibling;\r\n      panel.style.display === 'block' ? panel.style.display = 'none' : panel.style.display = 'block';\r\n    });\r\n  });\r\n}\n\n//# sourceURL=webpack://plants/./assets/scripts/activeAccordion.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ serviceButtons)\n/* harmony export */ });\nfunction serviceButtons() {\r\n  let gardens = document.querySelector('.gardens');\r\n  let lawn = document.querySelector('.lawn');\r\n  let planting = document.querySelector('.planting');\r\n  let service_arr = [...document.querySelectorAll('.service_item')];\r\n\r\n  let active_buttons = [];\r\n\r\n  function disabledButton(name) {\r\n    if(active_buttons.length == 1) {\r\n      name.disabled = true;\r\n      name.style.cursor = 'not-allowed';\r\n    }\r\n    else {\r\n      name.disabled = false;\r\n      name.style.cursor = 'pointer';\r\n    }\r\n  }\r\n\r\n  function addActiveElem(name) {\r\n    if(!active_buttons.includes(name)) {\r\n      active_buttons.push(name);\r\n\r\n      service_arr.forEach(item => {\r\n        if(item.childNodes[3].childNodes[1].innerHTML !== name) {\r\n          item.classList.add('inactive_service');\r\n        }\r\n        else {\r\n          item.classList.add('active_service');\r\n        }\r\n      });\r\n    }\r\n    else {\r\n      let count_active = 0;\r\n      active_buttons.splice(active_buttons.indexOf(name), 1);\r\n\r\n      service_arr.forEach(item => {\r\n        if(item.classList.contains('active_service') && item.childNodes[3].childNodes[1].innerHTML !== name) {\r\n          count_active++;\r\n        }\r\n      });\r\n\r\n      service_arr.forEach(item => {\r\n        if(count_active > 0) {\r\n          if(item.childNodes[3].childNodes[1].innerHTML === name) {\r\n            item.classList.remove('active_service');\r\n            item.classList.add('inactive_service');\r\n          }\r\n        }\r\n        else {\r\n          item.classList.remove('active_service');\r\n          item.classList.remove('inactive_service');\r\n        }\r\n      });\r\n    }\r\n  }\r\n  \r\n  gardens.onclick = () =>{\r\n    disabledButton(gardens);\r\n    gardens.classList.toggle('active_button');\r\n    addActiveElem('Garden care');\r\n  }\r\n\r\n  lawn.onclick = () =>{\r\n    disabledButton(lawn);\r\n    lawn.classList.toggle('active_button');\r\n    addActiveElem('Lawn care');\r\n  }\r\n\r\n  planting.onclick = () =>{\r\n    disabledButton(planting);\r\n    planting.classList.toggle('active_button');\r\n    addActiveElem('Planting');\r\n  }\r\n}\n\n//# sourceURL=webpack://plants/./assets/scripts/serviceButtons.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_scripts_activeMenuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scripts/activeMenuItem */ \"./assets/scripts/activeMenuItem.js\");\n/* harmony import */ var _assets_scripts_serviceButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/scripts/serviceButtons */ \"./assets/scripts/serviceButtons.js\");\n/* harmony import */ var _assets_scripts_activeAccordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/scripts/activeAccordion */ \"./assets/scripts/activeAccordion.js\");\n\r\n\r\n// import burgerMenu from \"./assets/scripts/burgerMenu\";\r\n\r\n\r\n(0,_assets_scripts_activeMenuItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n// burgerMenu();\r\n(0,_assets_scripts_serviceButtons__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_assets_scripts_activeAccordion__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://plants/./script.js?");

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