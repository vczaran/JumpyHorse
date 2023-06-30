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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/view */ \"./src/scripts/view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('background');\n  const game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  new _scripts_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWtDO0FBQ0E7QUFFbENFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFlBQVksQ0FBQztFQUNwRCxNQUFNQyxJQUFJLEdBQUcsSUFBSU4scURBQUksQ0FBQ0ksTUFBTSxDQUFDO0VBQzdCLElBQUlILHFEQUFJLENBQUNHLE1BQU0sQ0FBQztBQUNwQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1weWhvcnNlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi9zY3JpcHRzL3ZpZXcnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tncm91bmQnKTtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcbiAgICBuZXcgVmlldyhjYW52YXMpO1xufSkiXSwibmFtZXMiOlsiR2FtZSIsIlZpZXciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImdhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _horse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horse */ \"./src/scripts/horse.js\");\n/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacle */ \"./src/scripts/obstacle.js\");\n\n\nclass Game {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    // const horse = new Horse(0, 250);\n    // new Obstacle(900, 360)\n    // setInterval ( () => {\n    //     new Obstacle(900, 360)}, 7000\n    // );\n\n    // window.addEventListener ( \"keydown\", (e) => {\n    //     if (e.code === \"Space\") {\n    //         horse.jump();\n    //     };\n    // })\n\n    // window.addEventListener ( \"keyup\", (e) => {\n    //     if (e.code === \"Space\") {\n    //         horse.fall();\n    //     };\n    // })\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUNNO0FBRW5CLE1BQU1FLElBQUksQ0FBQztFQUN0QkMsV0FBV0EsQ0FBQ0MsTUFBTSxFQUFFO0lBQ2hCLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbEMsSUFBSSxDQUFDQyxVQUFVLEdBQUc7TUFBRUMsS0FBSyxFQUFFSixNQUFNLENBQUNJLEtBQUs7TUFBRUMsTUFBTSxFQUFFTCxNQUFNLENBQUNLO0lBQU8sQ0FBQztJQUNoRTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNKO0FBR0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1weWhvcnNlLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIb3JzZSBmcm9tIFwiLi9ob3JzZVwiO1xuaW1wb3J0IE9ic3RhY2xlIGZyb20gXCIuL29ic3RhY2xlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgICAgIC8vIGNvbnN0IGhvcnNlID0gbmV3IEhvcnNlKDAsIDI1MCk7XG4gICAgICAgIC8vIG5ldyBPYnN0YWNsZSg5MDAsIDM2MClcbiAgICAgICAgLy8gc2V0SW50ZXJ2YWwgKCAoKSA9PiB7XG4gICAgICAgIC8vICAgICBuZXcgT2JzdGFjbGUoOTAwLCAzNjApfSwgNzAwMFxuICAgICAgICAvLyApO1xuICAgICAgXG4gICAgICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICggXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgIC8vICAgICBpZiAoZS5jb2RlID09PSBcIlNwYWNlXCIpIHtcbiAgICAgICAgLy8gICAgICAgICBob3JzZS5qdW1wKCk7XG4gICAgICAgIC8vICAgICB9O1xuICAgICAgICAvLyB9KVxuXG4gICAgICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICggXCJrZXl1cFwiLCAoZSkgPT4ge1xuICAgICAgICAvLyAgICAgaWYgKGUuY29kZSA9PT0gXCJTcGFjZVwiKSB7XG4gICAgICAgIC8vICAgICAgICAgaG9yc2UuZmFsbCgpO1xuICAgICAgICAvLyAgICAgfTtcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cblxufSJdLCJuYW1lcyI6WyJIb3JzZSIsIk9ic3RhY2xlIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/horse.js":
/*!******************************!*\
  !*** ./src/scripts/horse.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Horse; }\n/* harmony export */ });\nclass Horse {\n  constructor(x, y) {\n    this.gravity = 0.3;\n    this.x = x;\n    this.y = y;\n    this.speedX = 0;\n    this.speedY = 0;\n    this.width = 900;\n    this.height = 450;\n    this.horse1 = document.getElementById(\"horse1\");\n  }\n  drawHorse() {\n    const canvas = document.getElementById(\"background\");\n    const ctx = canvas.getContext(\"2d\");\n    // ctx.clearRect(0, 0, this.width, this.height);\n\n    ctx.drawImage(this.horse1, this.x, this.y, 300, 300);\n    this.move();\n    if (this.y > 250) {\n      this.y = 250;\n    }\n  }\n  move() {\n    this.y += this.speedY;\n    this.speedY += this.gravity;\n  }\n  jump() {\n    this.speedY = -10;\n\n    // requestAnimationFrame( () => {\n    //     this.jump();\n    // })\n    // console.log(this.y);\n  }\n\n  fall() {\n    if (this.y < 250) {\n      this.speedY += this.gravity;\n      this.y += this.speedY;\n      this.drawHorse();\n      requestAnimationFrame(() => {\n        this.fall();\n      });\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ob3JzZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsS0FBSyxDQUFDO0VBQ3ZCQyxXQUFXQSxDQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNmLElBQUksQ0FBQ0MsT0FBTyxHQUFHLEdBQUc7SUFDbEIsSUFBSSxDQUFDRixDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNDLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0UsTUFBTSxHQUFHLENBQUM7SUFDZixJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ2YsSUFBSSxDQUFDQyxLQUFLLEdBQUcsR0FBRztJQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBRyxHQUFHO0lBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUM7RUFFbkQ7RUFFQUMsU0FBU0EsQ0FBQSxFQUFJO0lBQ1QsTUFBTUMsTUFBTSxHQUFHSCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUM7SUFDcEQsTUFBTUcsR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbkM7O0lBRUFELEdBQUcsQ0FBQ0UsU0FBUyxDQUFDLElBQUksQ0FBQ1AsTUFBTSxFQUFFLElBQUksQ0FBQ1AsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDcEQsSUFBSSxDQUFDYyxJQUFJLENBQUMsQ0FBQztJQUNYLElBQUksSUFBSSxDQUFDZCxDQUFDLEdBQUcsR0FBRyxFQUFFO01BQ2QsSUFBSSxDQUFDQSxDQUFDLEdBQUcsR0FBRztJQUNoQjtFQUNKO0VBRUFjLElBQUlBLENBQUEsRUFBSTtJQUNKLElBQUksQ0FBQ2QsQ0FBQyxJQUFJLElBQUksQ0FBQ0csTUFBTTtJQUNyQixJQUFJLENBQUNBLE1BQU0sSUFBSSxJQUFJLENBQUNGLE9BQU87RUFDL0I7RUFFQWMsSUFBSUEsQ0FBQSxFQUFJO0lBQ0osSUFBSSxDQUFDWixNQUFNLEdBQUcsQ0FBQyxFQUFFOztJQUVqQjtJQUNBO0lBQ0E7SUFDQTtFQUNKOztFQUVBYSxJQUFJQSxDQUFBLEVBQUk7SUFDSixJQUFJLElBQUksQ0FBQ2hCLENBQUMsR0FBRyxHQUFHLEVBQUU7TUFDZCxJQUFJLENBQUNHLE1BQU0sSUFBSSxJQUFJLENBQUNGLE9BQU87TUFDM0IsSUFBSSxDQUFDRCxDQUFDLElBQUksSUFBSSxDQUFDRyxNQUFNO01BQ3JCLElBQUksQ0FBQ00sU0FBUyxDQUFDLENBQUM7TUFFaEJRLHFCQUFxQixDQUFFLE1BQU07UUFDekIsSUFBSSxDQUFDRCxJQUFJLENBQUMsQ0FBQztNQUNmLENBQUMsQ0FBQztJQUNOO0VBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2p1bXB5aG9yc2UvLi9zcmMvc2NyaXB0cy9ob3JzZS5qcz84MTlkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvcnNlIHtcbiAgICBjb25zdHJ1Y3RvciAoeCwgeSkge1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSAwLjM7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuc3BlZWRYID0gMDtcbiAgICAgICAgdGhpcy5zcGVlZFkgPSAwO1xuICAgICAgICB0aGlzLndpZHRoID0gOTAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDQ1MDtcblxuICAgICAgICB0aGlzLmhvcnNlMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9yc2UxXCIpO1xuXG4gICAgfVxuXG4gICAgZHJhd0hvcnNlICgpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kXCIpO1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAvLyBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5ob3JzZTEsIHRoaXMueCwgdGhpcy55LCAzMDAsIDMwMCk7XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgICBpZiAodGhpcy55ID4gMjUwKSB7XG4gICAgICAgICAgICB0aGlzLnkgPSAyNTA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlICgpIHtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZO1xuICAgICAgICB0aGlzLnNwZWVkWSArPSB0aGlzLmdyYXZpdHk7XG4gICAgfVxuXG4gICAganVtcCAoKSB7XG4gICAgICAgIHRoaXMuc3BlZWRZID0gLTEwO1xuICAgICAgICBcbiAgICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmp1bXAoKTtcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy55KTtcbiAgICB9XG5cbiAgICBmYWxsICgpIHtcbiAgICAgICAgaWYgKHRoaXMueSA8IDI1MCkge1xuICAgICAgICAgICAgdGhpcy5zcGVlZFkgKz0gdGhpcy5ncmF2aXR5O1xuICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZO1xuICAgICAgICAgICAgdGhpcy5kcmF3SG9yc2UoKTtcblxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWxsKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IFxuICAgIH1cbn0iXSwibmFtZXMiOlsiSG9yc2UiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwiZ3Jhdml0eSIsInNwZWVkWCIsInNwZWVkWSIsIndpZHRoIiwiaGVpZ2h0IiwiaG9yc2UxIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRyYXdIb3JzZSIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJtb3ZlIiwianVtcCIsImZhbGwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/horse.js\n");

/***/ }),

/***/ "./src/scripts/obstacle.js":
/*!*********************************!*\
  !*** ./src/scripts/obstacle.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Obstacle; }\n/* harmony export */ });\nclass Obstacle {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n    this.speedX = 3;\n    this.width = 900;\n    this.height = 450;\n    // this.drawObstacle();\n  }\n\n  drawObstacle() {\n    const canvas = document.getElementById(\"background\");\n    const ctx = canvas.getContext(\"2d\");\n    // ctx.clearRect(0, 0, this.width, this.height);\n    ctx.fillStyle = \"yellow\";\n    ctx.fillRect(this.x, this.y, 20, 60);\n    this.moveObstacle();\n  }\n  moveObstacle() {\n    // requestAnimationFrame ( () => {\n    this.x -= this.speedX;\n    // this.drawObstacle();\n    // })\n  }\n\n  speedUp() {\n    if (score % 5 === 0) {\n      this.speedX += 1;\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9vYnN0YWNsZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsUUFBUSxDQUFDO0VBRTFCQyxXQUFXQSxDQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNmLElBQUksQ0FBQ0QsQ0FBQyxHQUFHQSxDQUFDO0lBQ1YsSUFBSSxDQUFDQyxDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ2YsSUFBSSxDQUFDQyxLQUFLLEdBQUcsR0FBRztJQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBRyxHQUFHO0lBQ2pCO0VBQ0o7O0VBRUFDLFlBQVlBLENBQUEsRUFBRztJQUNYLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDO0lBQ3BELE1BQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ25DO0lBQ0FELEdBQUcsQ0FBQ0UsU0FBUyxHQUFHLFFBQVE7SUFDeEJGLEdBQUcsQ0FBQ0csUUFBUSxDQUFDLElBQUksQ0FBQ1osQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDcEMsSUFBSSxDQUFDWSxZQUFZLENBQUMsQ0FBQztFQUN2QjtFQUVBQSxZQUFZQSxDQUFBLEVBQUk7SUFDWjtJQUNJLElBQUksQ0FBQ2IsQ0FBQyxJQUFJLElBQUksQ0FBQ0UsTUFBTTtJQUNyQjtJQUNKO0VBQ0o7O0VBRUFZLE9BQU9BLENBQUEsRUFBSTtJQUNQLElBQUlDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO01BQ2pCLElBQUksQ0FBQ2IsTUFBTSxJQUFJLENBQUM7SUFDcEI7RUFDSjtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanVtcHlob3JzZS8uL3NyYy9zY3JpcHRzL29ic3RhY2xlLmpzPzM1MjMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzdGFjbGUge1xuXG4gICAgY29uc3RydWN0b3IgKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5zcGVlZFggPSAzO1xuICAgICAgICB0aGlzLndpZHRoID0gOTAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDQ1MDtcbiAgICAgICAgLy8gdGhpcy5kcmF3T2JzdGFjbGUoKTtcbiAgICB9XG5cbiAgICBkcmF3T2JzdGFjbGUoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZFwiKTtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgLy8gY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIDIwLCA2MCk7XG4gICAgICAgIHRoaXMubW92ZU9ic3RhY2xlKCk7XG4gICAgfVxuXG4gICAgbW92ZU9ic3RhY2xlICgpIHtcbiAgICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lICggKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWRYO1xuICAgICAgICAgICAgLy8gdGhpcy5kcmF3T2JzdGFjbGUoKTtcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cbiAgICBzcGVlZFVwICgpIHtcbiAgICAgICAgaWYgKHNjb3JlICUgNSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zcGVlZFggKz0gMTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdLCJuYW1lcyI6WyJPYnN0YWNsZSIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJzcGVlZFgiLCJ3aWR0aCIsImhlaWdodCIsImRyYXdPYnN0YWNsZSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJtb3ZlT2JzdGFjbGUiLCJzcGVlZFVwIiwic2NvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/obstacle.js\n");

/***/ }),

/***/ "./src/scripts/view.js":
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\n/* harmony import */ var _horse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horse */ \"./src/scripts/horse.js\");\n/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacle */ \"./src/scripts/obstacle.js\");\n\n\nclass View {\n  constructor(canvas) {\n    const ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.horse = new _horse__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 250);\n    this.obstacles = [new _obstacle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](900, 360)];\n    setInterval(() => {\n      this.obstacles.push(new _obstacle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](900, 360));\n    }, 7000);\n    // this.obs = new Obstacle(900, 360);\n    this.draw(ctx);\n    window.addEventListener(\"keydown\", e => {\n      if (e.code === \"Space\" && this.horse.y === 250) {\n        this.horse.jump();\n      }\n      ;\n    });\n\n    // window.addEventListener(\"keyup\", (e) => {\n    //     if (e.code === \"Space\") {\n    //         this.horse.fall();\n    //     };\n    // })\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);\n    this.horse.drawHorse();\n    // this.obs.drawObstacle();\n    this.obstacles.forEach(obs => {\n      obs.drawObstacle();\n    });\n    requestAnimationFrame(() => {\n      this.draw(ctx);\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy92aWV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUNNO0FBR25CLE1BQU1FLElBQUksQ0FBQztFQUV0QkMsV0FBV0EsQ0FBRUMsTUFBTSxFQUFFO0lBQ2pCLE1BQU1DLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ25DLElBQUksQ0FBQ0MsVUFBVSxHQUFHO01BQUVDLEtBQUssRUFBRUosTUFBTSxDQUFDSSxLQUFLO01BQUVDLE1BQU0sRUFBRUwsTUFBTSxDQUFDSztJQUFPLENBQUM7SUFFaEUsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSVYsOENBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQzlCLElBQUksQ0FBQ1csU0FBUyxHQUFHLENBQUMsSUFBSVYsaURBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekNXLFdBQVcsQ0FBRyxNQUFNO01BQ2hCLElBQUksQ0FBQ0QsU0FBUyxDQUFDRSxJQUFJLENBQUMsSUFBSVosaURBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUNSO0lBQ0EsSUFBSSxDQUFDYSxJQUFJLENBQUNULEdBQUcsQ0FBQztJQUVkVSxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsRUFBR0MsQ0FBQyxJQUFLO01BQ3RDLElBQUlBLENBQUMsQ0FBQ0MsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUNSLEtBQUssQ0FBQ1MsQ0FBQyxLQUFLLEdBQUcsRUFBRTtRQUM1QyxJQUFJLENBQUNULEtBQUssQ0FBQ1UsSUFBSSxDQUFDLENBQUM7TUFDckI7TUFBQztJQUNMLENBQUMsQ0FBQzs7SUFFRjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0o7O0VBRUFOLElBQUlBLENBQUNULEdBQUcsRUFBRTtJQUNOQSxHQUFHLENBQUNnQixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUNkLFVBQVUsQ0FBQ0MsS0FBSyxFQUFFLElBQUksQ0FBQ0QsVUFBVSxDQUFDRSxNQUFNLENBQUM7SUFDbEUsSUFBSSxDQUFDQyxLQUFLLENBQUNZLFNBQVMsQ0FBQyxDQUFDO0lBQ3RCO0lBQ0EsSUFBSSxDQUFDWCxTQUFTLENBQUNZLE9BQU8sQ0FBQ0MsR0FBRyxJQUFJO01BQzFCQSxHQUFHLENBQUNDLFlBQVksQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQztJQUVGQyxxQkFBcUIsQ0FBQyxNQUFNO01BQ3hCLElBQUksQ0FBQ1osSUFBSSxDQUFDVCxHQUFHLENBQUM7SUFDbEIsQ0FBQyxDQUFDO0VBQ047QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2p1bXB5aG9yc2UvLi9zcmMvc2NyaXB0cy92aWV3LmpzPzgwYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhvcnNlIGZyb20gXCIuL2hvcnNlXCI7XG5pbXBvcnQgT2JzdGFjbGUgZnJvbSBcIi4vb2JzdGFjbGVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcblxuICAgIGNvbnN0cnVjdG9yIChjYW52YXMpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcblxuICAgICAgICB0aGlzLmhvcnNlID0gbmV3IEhvcnNlKDAsIDI1MCk7XG4gICAgICAgIHRoaXMub2JzdGFjbGVzID0gW25ldyBPYnN0YWNsZSg5MDAsIDM2MCldO1xuICAgICAgICBzZXRJbnRlcnZhbCAoICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub2JzdGFjbGVzLnB1c2gobmV3IE9ic3RhY2xlKDkwMCwgMzYwKSk7XG4gICAgICAgIH0sIDcwMDApO1xuICAgICAgICAvLyB0aGlzLm9icyA9IG5ldyBPYnN0YWNsZSg5MDAsIDM2MCk7XG4gICAgICAgIHRoaXMuZHJhdyhjdHgpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJTcGFjZVwiICYmIHRoaXMuaG9yc2UueSA9PT0gMjUwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3JzZS5qdW1wKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcbiAgICAgICAgLy8gICAgIGlmIChlLmNvZGUgPT09IFwiU3BhY2VcIikge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuaG9yc2UuZmFsbCgpO1xuICAgICAgICAvLyAgICAgfTtcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIHRoaXMuaG9yc2UuZHJhd0hvcnNlKCk7XG4gICAgICAgIC8vIHRoaXMub2JzLmRyYXdPYnN0YWNsZSgpO1xuICAgICAgICB0aGlzLm9ic3RhY2xlcy5mb3JFYWNoKG9icyA9PiB7XG4gICAgICAgICAgICBvYnMuZHJhd09ic3RhY2xlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRyYXcoY3R4KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJIb3JzZSIsIk9ic3RhY2xlIiwiVmlldyIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsImhvcnNlIiwib2JzdGFjbGVzIiwic2V0SW50ZXJ2YWwiLCJwdXNoIiwiZHJhdyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29kZSIsInkiLCJqdW1wIiwiY2xlYXJSZWN0IiwiZHJhd0hvcnNlIiwiZm9yRWFjaCIsIm9icyIsImRyYXdPYnN0YWNsZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/view.js\n");

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