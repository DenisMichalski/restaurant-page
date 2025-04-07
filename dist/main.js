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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// contact.js\nfunction loadContact() {\n  const content = document.getElementById(\"content\");\n  content.innerText = \"\";\n\n  const contactDiv = document.createElement(\"div\");\n  contactDiv.classList.add(\"contact\");\n\n  const heading = document.createElement(\"h1\");\n  heading.textContent = \"Contact us\";\n\n  const adress = document.createElement(\"p\");\n  adress.textContent = \"Address: Restaurantstraße 123, Essenstadt, DE\";\n\n  const phone = document.createElement(\"p\");\n  phone.textContent = \"Telephone: 0123 456789\";\n\n  const form = document.createElement(\"form\");\n\n  const nameLabel = document.createElement(\"label\");\n  nameLabel.textContent = \"Name:\";\n  const nameInput = document.createElement(\"input\");\n  nameInput.type = \"text\";\n  nameInput.name = \"name\";\n\n  const emailLabel = document.createElement(\"label\");\n  emailLabel.textContent = \"Email:\";\n  const emailInput = document.createElement(\"input\");\n  emailInput.type = \"email\";\n  emailInput.name = \"email\";\n\n  const messageLabel = document.createElement(\"label\");\n  messageLabel.textContent = \"Message:\";\n  const messageTextAreaa = document.createElement(\"textarea\");\n  messageTextAreaa.name = \"message\";\n\n  const submitButton = document.createElement(\"button\");\n  submitButton.textContent = \"Submit\";\n\n  form.appendChild(nameLabel);\n  form.appendChild(nameInput);\n  form.appendChild(emailLabel);\n  form.appendChild(emailInput);\n  form.appendChild(messageLabel);\n  form.appendChild(messageTextAreaa);\n  form.appendChild(submitButton);\n\n  contactDiv.appendChild(heading);\n  contactDiv.appendChild(adress);\n  contactDiv.appendChild(phone);\n  contactDiv.appendChild(form);\n\n  content.appendChild(contactDiv);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHome() {\n  const content = document.getElementById(\"content\");\n\n  const homeDiv = document.createElement(\"div\");\n  homeDiv.classList.add(\"home\");\n\n  const heading = document.createElement(\"h1\");\n  heading.textContent = \"Welcome to our restaurant!\";\n\n  const paragraph = document.createElement(\"p\");\n  paragraph.textContent =\n    \"Enjoy an unforgettable experience in our restaurant, with excellent cuisine and friendly service.\";\n\n  const img = document.createElement(\"img\");\n    img.src = \"path/to/your-image.jpg\"; // Ersetze mit dem Bildpfad\n    img.alt = 'Restaurant Page';\n\n    homeDiv.appendChild(heading);\n    homeDiv.appendChild(paragraph);\n    homeDiv.appendChild(img);\n\n    content.appendChild(homeDiv);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n \n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nconst homeButton = document.getElementById('homeButton');\nconst menuButton = document.getElementById('menuButton');\nconst contactButton = document.getElementById('contactButton');\n\n\nhomeButton.addEventListener('click', () => {\n  _home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n});\n\nmenuButton.addEventListener('click', () => {\n  _menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n});\n\ncontactButton.addEventListener('click', () => {\n  _contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n});\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n// function clearContent() {\n//   const content = document.querySelector(\"#content\");\n//   content.innerText = \"\";\n// }\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//   loadHome();\n\n//   document.getElementById(\"homeBtn\").addEventListener(\"click\", () => {\n//     clearContent();\n//     loadHome();\n//   });\n\n//   document.getElementById(\"menuBtn\").addEventListener(\"click\", () => {\n//     clearContent();\n//     import(\"./menu.js\").then((module) => module.default());\n//   });\n//   document.getElementById(\"contactBtn\").addEventListener(\"click\", () => {\n//     clearContent();\n//     import(\"./contact.js\").then((module) => module.default());\n//   });\n// });\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMenu() {\n    const content = document.getElementById('content');\n    content.innerText = '';\n\n    const menuDiv = document.createElement('div');\n    menuDiv.classList.add('menu');\n\n    const heading = document.createElement('h1');\n    heading.textContent = \"Our menu\";\n\n    const menuList = document.createElement('ul');\n\n    const dishes = [\n        'Spaghetti Carbonara',\n        'Pizza Margherita',\n        'Lasagne',\n        'Ceaser Salad',\n        'Tiramisu'\n    ];\n\n    dishes.forEach(dish => {\n        const listItem = document.createElement('li');\n        listItem.textContent = dish;\n        menuList.appendChild(listItem);\n    });\n\n    menuDiv.appendChild(heading);\n    menuDiv.appendChild(menuList);\n    content.appendChild(menuDiv);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;