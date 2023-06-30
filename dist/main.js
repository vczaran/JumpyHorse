/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('background');\n  new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBa0M7QUFFbENDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFlBQVksQ0FBQztFQUNwRCxJQUFJSixxREFBSSxDQUFDRyxNQUFNLENBQUM7QUFDcEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanVtcHlob3JzZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kJyk7XG4gICAgbmV3IEdhbWUoY2FudmFzKTtcbn0pIl0sIm5hbWVzIjpbIkdhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _horse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horse */ \"./src/scripts/horse.js\");\n/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacle */ \"./src/scripts/obstacle.js\");\n\n\nclass Game {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    const horse = new _horse__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 250);\n    window.addEventListener(\"keydown\", e => {\n      if (e.code === \"Space\") {\n        horse.jump();\n      }\n      ;\n    });\n    window.addEventListener(\"keyup\", e => {\n      if (e.code === \"Space\") {\n        horse.fall();\n      }\n      ;\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUNNO0FBRW5CLE1BQU1FLElBQUksQ0FBQztFQUN0QkMsV0FBV0EsQ0FBQ0MsTUFBTSxFQUFFO0lBQ2hCLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbEMsSUFBSSxDQUFDQyxVQUFVLEdBQUc7TUFBRUMsS0FBSyxFQUFFSixNQUFNLENBQUNJLEtBQUs7TUFBRUMsTUFBTSxFQUFFTCxNQUFNLENBQUNLO0lBQU8sQ0FBQztJQUNoRSxNQUFNQyxLQUFLLEdBQUcsSUFBSVYsOENBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBRS9CVyxNQUFNLENBQUNDLGdCQUFnQixDQUFHLFNBQVMsRUFBR0MsQ0FBQyxJQUFLO01BQ3hDLElBQUlBLENBQUMsQ0FBQ0MsSUFBSSxLQUFLLE9BQU8sRUFBRTtRQUNwQkosS0FBSyxDQUFDSyxJQUFJLENBQUMsQ0FBQztNQUNoQjtNQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBRUZKLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUcsT0FBTyxFQUFHQyxDQUFDLElBQUs7TUFDdEMsSUFBSUEsQ0FBQyxDQUFDQyxJQUFJLEtBQUssT0FBTyxFQUFFO1FBQ3BCSixLQUFLLENBQUNNLElBQUksQ0FBQyxDQUFDO01BQ2hCO01BQUM7SUFDTCxDQUFDLENBQUM7RUFDTjtBQUdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanVtcHlob3JzZS8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSG9yc2UgZnJvbSBcIi4vaG9yc2VcIjtcbmltcG9ydCBPYnN0YWNsZSBmcm9tIFwiLi9vYnN0YWNsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICBjb25zdCBob3JzZSA9IG5ldyBIb3JzZSgwLCAyNTApO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICggXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSBcIlNwYWNlXCIpIHtcbiAgICAgICAgICAgICAgICBob3JzZS5qdW1wKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICggXCJrZXl1cFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJTcGFjZVwiKSB7XG4gICAgICAgICAgICAgICAgaG9yc2UuZmFsbCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxufSJdLCJuYW1lcyI6WyJIb3JzZSIsIk9ic3RhY2xlIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsImhvcnNlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwianVtcCIsImZhbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/horse.js":
/*!******************************!*\
  !*** ./src/scripts/horse.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Horse; }\n/* harmony export */ });\nclass Horse {\n  constructor(x, y) {\n    this.gravity = 0.3;\n    this.x = x;\n    this.y = y;\n    this.speedX = 0;\n    this.speedY = 0;\n    this.width = 700;\n    this.height = 450;\n    this.fall = function () {\n      if (this.y < 250) {\n        this.speedY += this.gravity;\n        this.y += this.speedY;\n        this.drawHorse();\n        requestAnimationFrame(() => {\n          this.fall();\n        });\n        // } else {\n        //     this.y = 250;\n      }\n    };\n  }\n\n  drawHorse() {\n    const canvas = document.getElementById(\"background\");\n    const ctx = canvas.getContext(\"2d\");\n    ctx.clearRect(0, 0, this.width, this.height);\n    const horse1 = document.getElementById(\"horse1\");\n    ctx.drawImage(horse1, this.x, this.y, 300, 300);\n  }\n  jump() {\n    this.speedY += -10;\n    this.y += this.speedY;\n    console.log(this.y);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ob3JzZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsS0FBSyxDQUFDO0VBQ3ZCQyxXQUFXQSxDQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNmLElBQUksQ0FBQ0MsT0FBTyxHQUFHLEdBQUc7SUFDbEIsSUFBSSxDQUFDRixDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNDLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0UsTUFBTSxHQUFHLENBQUM7SUFDZixJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ2YsSUFBSSxDQUFDQyxLQUFLLEdBQUcsR0FBRztJQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBRyxHQUFHO0lBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHLFlBQVk7TUFDcEIsSUFBSSxJQUFJLENBQUNOLENBQUMsR0FBRyxHQUFHLEVBQUU7UUFDbEIsSUFBSSxDQUFDRyxNQUFNLElBQUksSUFBSSxDQUFDRixPQUFPO1FBQzNCLElBQUksQ0FBQ0QsQ0FBQyxJQUFJLElBQUksQ0FBQ0csTUFBTTtRQUNyQixJQUFJLENBQUNJLFNBQVMsQ0FBQyxDQUFDO1FBQ2hCQyxxQkFBcUIsQ0FBRyxNQUFNO1VBQzFCLElBQUksQ0FBQ0YsSUFBSSxDQUFDLENBQUM7UUFDZixDQUFDLENBQUM7UUFDTjtRQUNBO01BQ0E7SUFDQSxDQUFDO0VBQ0w7O0VBRUFDLFNBQVNBLENBQUEsRUFBSTtJQUNULE1BQU1FLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDO0lBQ3BELE1BQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ25DRCxHQUFHLENBQUNFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDO0lBQzVDLE1BQU1VLE1BQU0sR0FBR0wsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDO0lBQ2hEQyxHQUFHLENBQUNJLFNBQVMsQ0FBQ0QsTUFBTSxFQUFFLElBQUksQ0FBQ2hCLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0VBQ25EO0VBRUFpQixJQUFJQSxDQUFBLEVBQUk7SUFDSixJQUFJLENBQUNkLE1BQU0sSUFBSSxDQUFDLEVBQUU7SUFDbEIsSUFBSSxDQUFDSCxDQUFDLElBQUksSUFBSSxDQUFDRyxNQUFNO0lBQ3JCZSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNuQixDQUFDLENBQUM7RUFDdkI7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2p1bXB5aG9yc2UvLi9zcmMvc2NyaXB0cy9ob3JzZS5qcz84MTlkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvcnNlIHtcbiAgICBjb25zdHJ1Y3RvciAoeCwgeSkge1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSAwLjM7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuc3BlZWRYID0gMDtcbiAgICAgICAgdGhpcy5zcGVlZFkgPSAwO1xuICAgICAgICB0aGlzLndpZHRoID0gNzAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDQ1MDtcblxuICAgICAgICB0aGlzLmZhbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy55IDwgMjUwKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkWSArPSB0aGlzLmdyYXZpdHk7XG4gICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG4gICAgICAgICAgICB0aGlzLmRyYXdIb3JzZSgpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICggKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmFsbCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIHRoaXMueSA9IDI1MDtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0hvcnNlICgpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kXCIpO1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgaG9yc2UxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob3JzZTFcIik7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaG9yc2UxLCB0aGlzLngsIHRoaXMueSwgMzAwLCAzMDApO1xuICAgIH1cblxuICAgIGp1bXAgKCkge1xuICAgICAgICB0aGlzLnNwZWVkWSArPSAtMTA7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkWTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy55KTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIkhvcnNlIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsImdyYXZpdHkiLCJzcGVlZFgiLCJzcGVlZFkiLCJ3aWR0aCIsImhlaWdodCIsImZhbGwiLCJkcmF3SG9yc2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsImhvcnNlMSIsImRyYXdJbWFnZSIsImp1bXAiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/horse.js\n");

/***/ }),

/***/ "./src/scripts/obstacle.js":
/*!*********************************!*\
  !*** ./src/scripts/obstacle.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Obstacle; }\n/* harmony export */ });\nclass Obstacle {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9vYnN0YWNsZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsUUFBUSxDQUFDO0VBRTFCQyxXQUFXQSxDQUFFQyxVQUFVLEVBQUU7SUFDckIsSUFBSSxDQUFDQSxVQUFVLEdBQUdBLFVBQVU7RUFDaEM7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL2p1bXB5aG9yc2UvLi9zcmMvc2NyaXB0cy9vYnN0YWNsZS5qcz8zNTIzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic3RhY2xlIHtcblxuICAgIGNvbnN0cnVjdG9yIChkaW1lbnNpb25zKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIk9ic3RhY2xlIiwiY29uc3RydWN0b3IiLCJkaW1lbnNpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/obstacle.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1weWhvcnNlLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;