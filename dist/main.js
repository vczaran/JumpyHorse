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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _horse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horse */ \"./src/scripts/horse.js\");\n/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacle */ \"./src/scripts/obstacle.js\");\n\n\nclass Game {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    const horse = new _horse__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 250);\n    // new Obstacle(900, 360)\n    // setInterval ( () => {\n    //     new Obstacle(900, 360)}, 10000\n    // );\n\n    window.addEventListener(\"keydown\", e => {\n      if (e.code === \"Space\") {\n        horse.jump();\n      }\n      ;\n    });\n    window.addEventListener(\"keyup\", e => {\n      if (e.code === \"Space\") {\n        horse.fall();\n      }\n      ;\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUNNO0FBRW5CLE1BQU1FLElBQUksQ0FBQztFQUN0QkMsV0FBV0EsQ0FBQ0MsTUFBTSxFQUFFO0lBQ2hCLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbEMsSUFBSSxDQUFDQyxVQUFVLEdBQUc7TUFBRUMsS0FBSyxFQUFFSixNQUFNLENBQUNJLEtBQUs7TUFBRUMsTUFBTSxFQUFFTCxNQUFNLENBQUNLO0lBQU8sQ0FBQztJQUNoRSxNQUFNQyxLQUFLLEdBQUcsSUFBSVYsOENBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQy9CO0lBQ0E7SUFDQTtJQUNBOztJQUVBVyxNQUFNLENBQUNDLGdCQUFnQixDQUFHLFNBQVMsRUFBR0MsQ0FBQyxJQUFLO01BQ3hDLElBQUlBLENBQUMsQ0FBQ0MsSUFBSSxLQUFLLE9BQU8sRUFBRTtRQUNwQkosS0FBSyxDQUFDSyxJQUFJLENBQUMsQ0FBQztNQUNoQjtNQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBRUZKLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUcsT0FBTyxFQUFHQyxDQUFDLElBQUs7TUFDdEMsSUFBSUEsQ0FBQyxDQUFDQyxJQUFJLEtBQUssT0FBTyxFQUFFO1FBQ3BCSixLQUFLLENBQUNNLElBQUksQ0FBQyxDQUFDO01BQ2hCO01BQUM7SUFDTCxDQUFDLENBQUM7RUFDTjtBQUdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanVtcHlob3JzZS8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSG9yc2UgZnJvbSBcIi4vaG9yc2VcIjtcbmltcG9ydCBPYnN0YWNsZSBmcm9tIFwiLi9vYnN0YWNsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICBjb25zdCBob3JzZSA9IG5ldyBIb3JzZSgwLCAyNTApO1xuICAgICAgICAvLyBuZXcgT2JzdGFjbGUoOTAwLCAzNjApXG4gICAgICAgIC8vIHNldEludGVydmFsICggKCkgPT4ge1xuICAgICAgICAvLyAgICAgbmV3IE9ic3RhY2xlKDkwMCwgMzYwKX0sIDEwMDAwXG4gICAgICAgIC8vICk7XG4gICAgICBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgKCBcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT09IFwiU3BhY2VcIikge1xuICAgICAgICAgICAgICAgIGhvcnNlLmp1bXAoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgKCBcImtleXVwXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSBcIlNwYWNlXCIpIHtcbiAgICAgICAgICAgICAgICBob3JzZS5mYWxsKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgIH1cblxuXG59Il0sIm5hbWVzIjpbIkhvcnNlIiwiT2JzdGFjbGUiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZGltZW5zaW9ucyIsIndpZHRoIiwiaGVpZ2h0IiwiaG9yc2UiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvZGUiLCJqdW1wIiwiZmFsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/horse.js":
/*!******************************!*\
  !*** ./src/scripts/horse.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Horse; }\n/* harmony export */ });\nclass Horse {\n  constructor(x, y) {\n    this.gravity = 0.3;\n    this.x = x;\n    this.y = y;\n    this.speedX = 0;\n    this.speedY = 0;\n    this.width = 900;\n    this.height = 450;\n  }\n  drawHorse() {\n    const canvas = document.getElementById(\"background\");\n    const ctx = canvas.getContext(\"2d\");\n    ctx.clearRect(0, 0, this.width, this.height);\n    const horse1 = document.getElementById(\"horse1\");\n    if (this.y > 250) this.y = 250;\n    ctx.drawImage(horse1, this.x, this.y, 300, 300);\n  }\n  jump() {\n    this.speedY += -10;\n    this.y += this.speedY;\n    // console.log(this.y);\n  }\n\n  fall() {\n    if (this.y < 250) {\n      this.speedY += this.gravity;\n      this.y += this.speedY;\n      this.drawHorse();\n      requestAnimationFrame(() => {\n        this.fall();\n      });\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ob3JzZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsS0FBSyxDQUFDO0VBQ3ZCQyxXQUFXQSxDQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNmLElBQUksQ0FBQ0MsT0FBTyxHQUFHLEdBQUc7SUFDbEIsSUFBSSxDQUFDRixDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNDLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0UsTUFBTSxHQUFHLENBQUM7SUFDZixJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ2YsSUFBSSxDQUFDQyxLQUFLLEdBQUcsR0FBRztJQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBRyxHQUFHO0VBRXJCO0VBRUFDLFNBQVNBLENBQUEsRUFBSTtJQUNULE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDO0lBQ3BELE1BQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ25DRCxHQUFHLENBQUNFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQ1IsS0FBSyxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDO0lBQzVDLE1BQU1RLE1BQU0sR0FBR0wsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDO0lBQ2hELElBQUksSUFBSSxDQUFDVCxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQ0EsQ0FBQyxHQUFHLEdBQUc7SUFDOUJVLEdBQUcsQ0FBQ0ksU0FBUyxDQUFDRCxNQUFNLEVBQUUsSUFBSSxDQUFDZCxDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztFQUNuRDtFQUVBZSxJQUFJQSxDQUFBLEVBQUk7SUFDSixJQUFJLENBQUNaLE1BQU0sSUFBSSxDQUFDLEVBQUU7SUFDbEIsSUFBSSxDQUFDSCxDQUFDLElBQUksSUFBSSxDQUFDRyxNQUFNO0lBQ3JCO0VBQ0o7O0VBRUFhLElBQUlBLENBQUEsRUFBSTtJQUNKLElBQUksSUFBSSxDQUFDaEIsQ0FBQyxHQUFHLEdBQUcsRUFBRTtNQUNkLElBQUksQ0FBQ0csTUFBTSxJQUFJLElBQUksQ0FBQ0YsT0FBTztNQUMzQixJQUFJLENBQUNELENBQUMsSUFBSSxJQUFJLENBQUNHLE1BQU07TUFDckIsSUFBSSxDQUFDRyxTQUFTLENBQUMsQ0FBQztNQUVoQlcscUJBQXFCLENBQUUsTUFBTTtRQUN6QixJQUFJLENBQUNELElBQUksQ0FBQyxDQUFDO01BQ2YsQ0FBQyxDQUFDO0lBQ047RUFDSjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanVtcHlob3JzZS8uL3NyYy9zY3JpcHRzL2hvcnNlLmpzPzgxOWQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9yc2Uge1xuICAgIGNvbnN0cnVjdG9yICh4LCB5KSB7XG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IDAuMztcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5zcGVlZFggPSAwO1xuICAgICAgICB0aGlzLnNwZWVkWSA9IDA7XG4gICAgICAgIHRoaXMud2lkdGggPSA5MDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNDUwO1xuXG4gICAgfVxuXG4gICAgZHJhd0hvcnNlICgpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kXCIpO1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgaG9yc2UxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob3JzZTFcIik7XG4gICAgICAgIGlmICh0aGlzLnkgPiAyNTApIHRoaXMueSA9IDI1MDtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShob3JzZTEsIHRoaXMueCwgdGhpcy55LCAzMDAsIDMwMCk7XG4gICAgfVxuXG4gICAganVtcCAoKSB7XG4gICAgICAgIHRoaXMuc3BlZWRZICs9IC0xMDtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnkpO1xuICAgIH1cblxuICAgIGZhbGwgKCkge1xuICAgICAgICBpZiAodGhpcy55IDwgMjUwKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkWSArPSB0aGlzLmdyYXZpdHk7XG4gICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG4gICAgICAgICAgICB0aGlzLmRyYXdIb3JzZSgpO1xuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZhbGwoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gXG4gICAgfVxufSJdLCJuYW1lcyI6WyJIb3JzZSIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJncmF2aXR5Iiwic3BlZWRYIiwic3BlZWRZIiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3SG9yc2UiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsImhvcnNlMSIsImRyYXdJbWFnZSIsImp1bXAiLCJmYWxsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/horse.js\n");

/***/ }),

/***/ "./src/scripts/obstacle.js":
/*!*********************************!*\
  !*** ./src/scripts/obstacle.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Obstacle; }\n/* harmony export */ });\nclass Obstacle {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n    this.speedX = 2;\n    this.width = 900;\n    this.height = 450;\n    this.drawObstacle();\n  }\n  drawObstacle() {\n    const canvas = document.getElementById(\"background\");\n    const ctx = canvas.getContext(\"2d\");\n    ctx.clearRect(0, 0, this.width, this.height);\n    ctx.fillStyle = \"yellow\";\n    ctx.fillRect(this.x, this.y, 20, 60);\n    this.moveObstacle();\n  }\n  moveObstacle() {\n    requestAnimationFrame(() => {\n      this.x -= this.speedX;\n      this.drawObstacle();\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9vYnN0YWNsZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsUUFBUSxDQUFDO0VBRTFCQyxXQUFXQSxDQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNmLElBQUksQ0FBQ0QsQ0FBQyxHQUFHQSxDQUFDO0lBQ1YsSUFBSSxDQUFDQyxDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ2YsSUFBSSxDQUFDQyxLQUFLLEdBQUcsR0FBRztJQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBRyxHQUFHO0lBQ2pCLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7RUFDdkI7RUFFQUEsWUFBWUEsQ0FBQSxFQUFHO0lBQ1gsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUM7SUFDcEQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbkNELEdBQUcsQ0FBQ0UsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDUixLQUFLLEVBQUUsSUFBSSxDQUFDQyxNQUFNLENBQUM7SUFDNUNLLEdBQUcsQ0FBQ0csU0FBUyxHQUFHLFFBQVE7SUFDeEJILEdBQUcsQ0FBQ0ksUUFBUSxDQUFDLElBQUksQ0FBQ2IsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDcEMsSUFBSSxDQUFDYSxZQUFZLENBQUMsQ0FBQztFQUN2QjtFQUVBQSxZQUFZQSxDQUFBLEVBQUk7SUFDWkMscUJBQXFCLENBQUcsTUFBTTtNQUMxQixJQUFJLENBQUNmLENBQUMsSUFBSSxJQUFJLENBQUNFLE1BQU07TUFDckIsSUFBSSxDQUFDRyxZQUFZLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUM7RUFDTjtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanVtcHlob3JzZS8uL3NyYy9zY3JpcHRzL29ic3RhY2xlLmpzPzM1MjMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzdGFjbGUge1xuXG4gICAgY29uc3RydWN0b3IgKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5zcGVlZFggPSAyO1xuICAgICAgICB0aGlzLndpZHRoID0gOTAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDQ1MDtcbiAgICAgICAgdGhpcy5kcmF3T2JzdGFjbGUoKTtcbiAgICB9XG5cbiAgICBkcmF3T2JzdGFjbGUoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZFwiKTtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIDIwLCA2MCk7XG4gICAgICAgIHRoaXMubW92ZU9ic3RhY2xlKCk7XG4gICAgfVxuXG4gICAgbW92ZU9ic3RhY2xlICgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICggKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWRYO1xuICAgICAgICAgICAgdGhpcy5kcmF3T2JzdGFjbGUoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiT2JzdGFjbGUiLCJjb25zdHJ1Y3RvciIsIngiLCJ5Iiwic3BlZWRYIiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3T2JzdGFjbGUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwibW92ZU9ic3RhY2xlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/obstacle.js\n");

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