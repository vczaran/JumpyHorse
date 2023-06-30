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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/view */ \"./src/scripts/view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('background');\n  const game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  // new View(game);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWtDO0FBQ0E7QUFFbENFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFlBQVksQ0FBQztFQUNwRCxNQUFNQyxJQUFJLEdBQUcsSUFBSU4scURBQUksQ0FBQ0ksTUFBTSxDQUFDO0VBQzdCO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanVtcHlob3JzZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcbmltcG9ydCBWaWV3IGZyb20gJy4vc2NyaXB0cy92aWV3JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kJyk7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XG4gICAgLy8gbmV3IFZpZXcoZ2FtZSk7XG59KSJdLCJuYW1lcyI6WyJHYW1lIiwiVmlldyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiZ2FtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _horse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horse */ \"./src/scripts/horse.js\");\n/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacle */ \"./src/scripts/obstacle.js\");\n\n\nclass Game {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    const horse = new _horse__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 250);\n    // new Obstacle(900, 360)\n    setInterval(() => {\n      new _obstacle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](900, 360);\n    }, 7000);\n    window.addEventListener(\"keydown\", e => {\n      if (e.code === \"Space\") {\n        horse.jump();\n      }\n      ;\n    });\n    window.addEventListener(\"keyup\", e => {\n      if (e.code === \"Space\") {\n        horse.fall();\n      }\n      ;\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUNNO0FBRW5CLE1BQU1FLElBQUksQ0FBQztFQUN0QkMsV0FBV0EsQ0FBQ0MsTUFBTSxFQUFFO0lBQ2hCLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbEMsSUFBSSxDQUFDQyxVQUFVLEdBQUc7TUFBRUMsS0FBSyxFQUFFSixNQUFNLENBQUNJLEtBQUs7TUFBRUMsTUFBTSxFQUFFTCxNQUFNLENBQUNLO0lBQU8sQ0FBQztJQUNoRSxNQUFNQyxLQUFLLEdBQUcsSUFBSVYsOENBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQy9CO0lBQ0FXLFdBQVcsQ0FBRyxNQUFNO01BQ2hCLElBQUlWLGlEQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUFBLENBQUMsRUFBRSxJQUM3QixDQUFDO0lBRURXLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUcsU0FBUyxFQUFHQyxDQUFDLElBQUs7TUFDeEMsSUFBSUEsQ0FBQyxDQUFDQyxJQUFJLEtBQUssT0FBTyxFQUFFO1FBQ3BCTCxLQUFLLENBQUNNLElBQUksQ0FBQyxDQUFDO01BQ2hCO01BQUM7SUFDTCxDQUFDLENBQUM7SUFFRkosTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBRyxPQUFPLEVBQUdDLENBQUMsSUFBSztNQUN0QyxJQUFJQSxDQUFDLENBQUNDLElBQUksS0FBSyxPQUFPLEVBQUU7UUFDcEJMLEtBQUssQ0FBQ08sSUFBSSxDQUFDLENBQUM7TUFDaEI7TUFBQztJQUNMLENBQUMsQ0FBQztFQUNOO0FBR0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1weWhvcnNlLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIb3JzZSBmcm9tIFwiLi9ob3JzZVwiO1xuaW1wb3J0IE9ic3RhY2xlIGZyb20gXCIuL29ic3RhY2xlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgICAgIGNvbnN0IGhvcnNlID0gbmV3IEhvcnNlKDAsIDI1MCk7XG4gICAgICAgIC8vIG5ldyBPYnN0YWNsZSg5MDAsIDM2MClcbiAgICAgICAgc2V0SW50ZXJ2YWwgKCAoKSA9PiB7XG4gICAgICAgICAgICBuZXcgT2JzdGFjbGUoOTAwLCAzNjApfSwgNzAwMFxuICAgICAgICApO1xuICAgICAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICggXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSBcIlNwYWNlXCIpIHtcbiAgICAgICAgICAgICAgICBob3JzZS5qdW1wKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICggXCJrZXl1cFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJTcGFjZVwiKSB7XG4gICAgICAgICAgICAgICAgaG9yc2UuZmFsbCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxufSJdLCJuYW1lcyI6WyJIb3JzZSIsIk9ic3RhY2xlIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsImhvcnNlIiwic2V0SW50ZXJ2YWwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvZGUiLCJqdW1wIiwiZmFsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Obstacle; }\n/* harmony export */ });\nclass Obstacle {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n    this.speedX = 3;\n    this.width = 900;\n    this.height = 450;\n    this.drawObstacle();\n  }\n  drawObstacle() {\n    const canvas = document.getElementById(\"background\");\n    const ctx = canvas.getContext(\"2d\");\n    ctx.clearRect(0, 0, this.width, this.height);\n    ctx.fillStyle = \"yellow\";\n    ctx.fillRect(this.x, this.y, 20, 60);\n    this.moveObstacle();\n  }\n  moveObstacle() {\n    requestAnimationFrame(() => {\n      this.x -= this.speedX;\n      this.drawObstacle();\n    });\n  }\n  speedUp() {\n    if (score % 5 === 0) {\n      this.speedX += 1;\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9vYnN0YWNsZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsUUFBUSxDQUFDO0VBRTFCQyxXQUFXQSxDQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNmLElBQUksQ0FBQ0QsQ0FBQyxHQUFHQSxDQUFDO0lBQ1YsSUFBSSxDQUFDQyxDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ2YsSUFBSSxDQUFDQyxLQUFLLEdBQUcsR0FBRztJQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBRyxHQUFHO0lBQ2pCLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7RUFDdkI7RUFFQUEsWUFBWUEsQ0FBQSxFQUFHO0lBQ1gsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUM7SUFDcEQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbkNELEdBQUcsQ0FBQ0UsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDUixLQUFLLEVBQUUsSUFBSSxDQUFDQyxNQUFNLENBQUM7SUFDNUNLLEdBQUcsQ0FBQ0csU0FBUyxHQUFHLFFBQVE7SUFDeEJILEdBQUcsQ0FBQ0ksUUFBUSxDQUFDLElBQUksQ0FBQ2IsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDcEMsSUFBSSxDQUFDYSxZQUFZLENBQUMsQ0FBQztFQUN2QjtFQUVBQSxZQUFZQSxDQUFBLEVBQUk7SUFDWkMscUJBQXFCLENBQUcsTUFBTTtNQUMxQixJQUFJLENBQUNmLENBQUMsSUFBSSxJQUFJLENBQUNFLE1BQU07TUFDckIsSUFBSSxDQUFDRyxZQUFZLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUM7RUFDTjtFQUVBVyxPQUFPQSxDQUFBLEVBQUk7SUFDUCxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtNQUNqQixJQUFJLENBQUNmLE1BQU0sSUFBSSxDQUFDO0lBQ3BCO0VBQ0o7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL2p1bXB5aG9yc2UvLi9zcmMvc2NyaXB0cy9vYnN0YWNsZS5qcz8zNTIzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic3RhY2xlIHtcblxuICAgIGNvbnN0cnVjdG9yICh4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuc3BlZWRYID0gMztcbiAgICAgICAgdGhpcy53aWR0aCA9IDkwMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA0NTA7XG4gICAgICAgIHRoaXMuZHJhd09ic3RhY2xlKCk7XG4gICAgfVxuXG4gICAgZHJhd09ic3RhY2xlKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIik7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCAyMCwgNjApO1xuICAgICAgICB0aGlzLm1vdmVPYnN0YWNsZSgpO1xuICAgIH1cblxuICAgIG1vdmVPYnN0YWNsZSAoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSAoICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkWDtcbiAgICAgICAgICAgIHRoaXMuZHJhd09ic3RhY2xlKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3BlZWRVcCAoKSB7XG4gICAgICAgIGlmIChzY29yZSAlIDUgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWRYICs9IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiT2JzdGFjbGUiLCJjb25zdHJ1Y3RvciIsIngiLCJ5Iiwic3BlZWRYIiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3T2JzdGFjbGUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwibW92ZU9ic3RhY2xlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3BlZWRVcCIsInNjb3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/obstacle.js\n");

/***/ }),

/***/ "./src/scripts/view.js":
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\n/* harmony import */ var _horse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horse */ \"./src/scripts/horse.js\");\n/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacle */ \"./src/scripts/obstacle.js\");\n\n\nclass View {\n  constructor() {\n    const canvas = document.getElementById(\"background\");\n    const ctx = canvas.getContext(\"2d\");\n    const horse = new _horse__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 250);\n    const obs = new _obstacle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](900, 360);\n  }\n  draw(ctx) {\n    ctx.clearRect(0, 0, this.width, this.height);\n    ctx.drawHorse();\n    ctx.drawObstacle();\n    requestAnimationFrame(() => {\n      this.draw(ctx);\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy92aWV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUNNO0FBR25CLE1BQU1FLElBQUksQ0FBQztFQUV0QkMsV0FBV0EsQ0FBQSxFQUFJO0lBQ2YsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUM7SUFDcEQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbkMsTUFBTUMsS0FBSyxHQUFHLElBQUlULDhDQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUMvQixNQUFNVSxHQUFHLEdBQUcsSUFBSVQsaURBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0VBQ2xDO0VBRUFVLElBQUlBLENBQUVKLEdBQUcsRUFBRTtJQUNQQSxHQUFHLENBQUNLLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsS0FBSyxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDO0lBQzVDUCxHQUFHLENBQUNRLFNBQVMsQ0FBQyxDQUFDO0lBQ2ZSLEdBQUcsQ0FBQ1MsWUFBWSxDQUFDLENBQUM7SUFFbEJDLHFCQUFxQixDQUFHLE1BQU07TUFDMUIsSUFBSSxDQUFDTixJQUFJLENBQUNKLEdBQUcsQ0FBQztJQUNsQixDQUFDLENBQUM7RUFDTjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanVtcHlob3JzZS8uL3NyYy9zY3JpcHRzL3ZpZXcuanM/ODBjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSG9yc2UgZnJvbSBcIi4vaG9yc2VcIjtcbmltcG9ydCBPYnN0YWNsZSBmcm9tIFwiLi9vYnN0YWNsZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZFwiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnN0IGhvcnNlID0gbmV3IEhvcnNlKDAsIDI1MCk7XG4gICAgY29uc3Qgb2JzID0gbmV3IE9ic3RhY2xlKDkwMCwgMzYwKTtcbiAgICB9XG5cbiAgICBkcmF3IChjdHgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIGN0eC5kcmF3SG9yc2UoKTtcbiAgICAgICAgY3R4LmRyYXdPYnN0YWNsZSgpO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSAoICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZHJhdyhjdHgpO1xuICAgICAgICB9KVxuICAgIH1cbn0iXSwibmFtZXMiOlsiSG9yc2UiLCJPYnN0YWNsZSIsIlZpZXciLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiaG9yc2UiLCJvYnMiLCJkcmF3IiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3SG9yc2UiLCJkcmF3T2JzdGFjbGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/view.js\n");

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