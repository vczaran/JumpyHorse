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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('background');\n  const game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  const startModal = document.getElementById(\"startModal\");\n  startModal.style.display = \"block\";\n  const start = document.getElementById(\"start-button\");\n  start.onclick = function () {\n    game.startGame(game.view);\n    startModal.style.display = \"none\";\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBa0M7QUFFbENDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFlBQVksQ0FBQztFQUNwRCxNQUFNQyxJQUFJLEdBQUcsSUFBSUwscURBQUksQ0FBQ0csTUFBTSxDQUFDO0VBQzdCLE1BQU1HLFVBQVUsR0FBR0wsUUFBUSxDQUFDRyxjQUFjLENBQUMsWUFBWSxDQUFDO0VBQ3hERSxVQUFVLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU87RUFDbEMsTUFBTUMsS0FBSyxHQUFHUixRQUFRLENBQUNHLGNBQWMsQ0FBQyxjQUFjLENBQUM7RUFDckRLLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLFlBQVk7SUFDeEJMLElBQUksQ0FBQ00sU0FBUyxDQUFDTixJQUFJLENBQUNPLElBQUksQ0FBQztJQUN6Qk4sVUFBVSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0VBQ3JDLENBQUM7QUFDTCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1weWhvcnNlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tncm91bmQnKTtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcbiAgICBjb25zdCBzdGFydE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydE1vZGFsXCIpO1xuICAgIHN0YXJ0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBjb25zdCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtYnV0dG9uXCIpO1xuICAgIHN0YXJ0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGdhbWUuc3RhcnRHYW1lKGdhbWUudmlldyk7XG4gICAgICAgIHN0YXJ0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH07XG59KSJdLCJuYW1lcyI6WyJHYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJnYW1lIiwic3RhcnRNb2RhbCIsInN0eWxlIiwiZGlzcGxheSIsInN0YXJ0Iiwib25jbGljayIsInN0YXJ0R2FtZSIsInZpZXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/scripts/view.js\");\n\nclass Game {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.view = new _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  }\n  startGame(view) {\n    view.draw(this.ctx);\n  }\n\n  // gameOver() {\n  //     if (this.view.collision() === true) {\n  //     this.over = true;\n  //     clearInterval(this.intervalID);\n  //     const endModal = document.getElementById(\"endModal\");\n  //     endModal.style.display = \"block\";\n  //     // const start = document.getElementById(\"start-button\");\n  //     // start.onclick = function () {\n  //     //     game.startGame();\n  //     //     endModal.style.display = \"none\";\n  //     // };\n  //     }\n  // }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBR1gsTUFBTUMsSUFBSSxDQUFDO0VBQ3RCQyxXQUFXQSxDQUFDQyxNQUFNLEVBQUU7SUFDaEIsSUFBSSxDQUFDQyxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsVUFBVSxDQUFDLElBQUksQ0FBQztJQUNsQyxJQUFJLENBQUNDLFVBQVUsR0FBRztNQUFFQyxLQUFLLEVBQUVKLE1BQU0sQ0FBQ0ksS0FBSztNQUFFQyxNQUFNLEVBQUVMLE1BQU0sQ0FBQ0s7SUFBTyxDQUFDO0lBQ2hFLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUlULDZDQUFJLENBQUNHLE1BQU0sQ0FBQztFQUNoQztFQUVBTyxTQUFTQSxDQUFDRCxJQUFJLEVBQUU7SUFDWEEsSUFBSSxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDUCxHQUFHLENBQUM7RUFDeEI7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFHSiIsInNvdXJjZXMiOlsid2VicGFjazovL2p1bXB5aG9yc2UvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXcgZnJvbSBcIi4vdmlld1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgeyBcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgVmlldyhjYW52YXMpO1xuICAgIH1cblxuICAgIHN0YXJ0R2FtZSh2aWV3KSB7XG4gICAgICAgICB2aWV3LmRyYXcodGhpcy5jdHgpO1xuICAgIH1cblxuICAgIC8vIGdhbWVPdmVyKCkge1xuICAgIC8vICAgICBpZiAodGhpcy52aWV3LmNvbGxpc2lvbigpID09PSB0cnVlKSB7XG4gICAgLy8gICAgIHRoaXMub3ZlciA9IHRydWU7XG4gICAgLy8gICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElEKTtcbiAgICAvLyAgICAgY29uc3QgZW5kTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZE1vZGFsXCIpO1xuICAgIC8vICAgICBlbmRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIC8vICAgICAvLyBjb25zdCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtYnV0dG9uXCIpO1xuICAgIC8vICAgICAvLyBzdGFydC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAvLyAgICAgZ2FtZS5zdGFydEdhbWUoKTtcbiAgICAvLyAgICAgLy8gICAgIGVuZE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAvLyAgICAgLy8gfTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuXG59Il0sIm5hbWVzIjpbIlZpZXciLCJHYW1lIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZGltZW5zaW9ucyIsIndpZHRoIiwiaGVpZ2h0IiwidmlldyIsInN0YXJ0R2FtZSIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/horse.js":
/*!******************************!*\
  !*** ./src/scripts/horse.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Horse; }\n/* harmony export */ });\nclass Horse {\n  constructor(x, y, width, height) {\n    this.gravity = 0.3;\n    this.x = x;\n    this.y = y;\n    this.speedX = 0;\n    this.speedY = 0;\n    this.width = width;\n    this.height = height;\n    this.runhorse1 = document.getElementById(\"runhorse1\");\n  }\n  drawHorse() {\n    const canvas = document.getElementById(\"background\");\n    const ctx = canvas.getContext(\"2d\");\n    // ctx.fillStyle = \"brown\";\n    // ctx.fillRect(this.x, this.y, this.width, this.height);\n    ctx.drawImage(this.runhorse1, this.x, this.y, this.width, this.height);\n    this.move();\n    if (this.y > 360) {\n      this.y = 360;\n    }\n  }\n  move() {\n    this.y += this.speedY;\n    this.speedY += this.gravity;\n  }\n  jump() {\n    this.speedY = -10;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ob3JzZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsS0FBSyxDQUFDO0VBQ3ZCQyxXQUFXQSxDQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUU7SUFDOUIsSUFBSSxDQUFDQyxPQUFPLEdBQUcsR0FBRztJQUNsQixJQUFJLENBQUNKLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDO0lBQ1YsSUFBSSxDQUFDSSxNQUFNLEdBQUcsQ0FBQztJQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHLENBQUM7SUFDZixJQUFJLENBQUNKLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUVwQixJQUFJLENBQUNJLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDO0VBRXpEO0VBRUFDLFNBQVNBLENBQUEsRUFBSTtJQUNULE1BQU1DLE1BQU0sR0FBR0gsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDO0lBQ3BELE1BQU1HLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ25DO0lBQ0E7SUFDQUQsR0FBRyxDQUFDRSxTQUFTLENBQUMsSUFBSSxDQUFDUCxTQUFTLEVBQUUsSUFBSSxDQUFDUCxDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEVBQUUsSUFBSSxDQUFDQyxLQUFLLEVBQUUsSUFBSSxDQUFDQyxNQUFNLENBQUM7SUFDdEUsSUFBSSxDQUFDWSxJQUFJLENBQUMsQ0FBQztJQUNYLElBQUksSUFBSSxDQUFDZCxDQUFDLEdBQUcsR0FBRyxFQUFFO01BQ2QsSUFBSSxDQUFDQSxDQUFDLEdBQUcsR0FBRztJQUNoQjtFQUNKO0VBRUFjLElBQUlBLENBQUEsRUFBSTtJQUNKLElBQUksQ0FBQ2QsQ0FBQyxJQUFJLElBQUksQ0FBQ0ssTUFBTTtJQUNyQixJQUFJLENBQUNBLE1BQU0sSUFBSSxJQUFJLENBQUNGLE9BQU87RUFDL0I7RUFFQVksSUFBSUEsQ0FBQSxFQUFJO0lBQ0osSUFBSSxDQUFDVixNQUFNLEdBQUcsQ0FBQyxFQUFFO0VBQ3JCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1weWhvcnNlLy4vc3JjL3NjcmlwdHMvaG9yc2UuanM/ODE5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBIb3JzZSB7XG4gICAgY29uc3RydWN0b3IgKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5ncmF2aXR5ID0gMC4zO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnNwZWVkWCA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWRZID0gMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICB0aGlzLnJ1bmhvcnNlMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicnVuaG9yc2UxXCIpO1xuXG4gICAgfVxuXG4gICAgZHJhd0hvcnNlICgpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kXCIpO1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJicm93blwiO1xuICAgICAgICAvLyBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLnJ1bmhvcnNlMSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgICAgIGlmICh0aGlzLnkgPiAzNjApIHtcbiAgICAgICAgICAgIHRoaXMueSA9IDM2MDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmUgKCkge1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG4gICAgICAgIHRoaXMuc3BlZWRZICs9IHRoaXMuZ3Jhdml0eTtcbiAgICB9XG5cbiAgICBqdW1wICgpIHtcbiAgICAgICAgdGhpcy5zcGVlZFkgPSAtMTA7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJIb3JzZSIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImdyYXZpdHkiLCJzcGVlZFgiLCJzcGVlZFkiLCJydW5ob3JzZTEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZHJhd0hvcnNlIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsIm1vdmUiLCJqdW1wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/horse.js\n");

/***/ }),

/***/ "./src/scripts/obstacle.js":
/*!*********************************!*\
  !*** ./src/scripts/obstacle.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Obstacle; }\n/* harmony export */ });\nclass Obstacle {\n  constructor(x, y, width, height) {\n    this.x = x;\n    this.y = y;\n    this.speedX = 2;\n    this.width = width;\n    this.height = height;\n  }\n  drawObstacle() {\n    const canvas = document.getElementById(\"background\");\n    const ctx = canvas.getContext(\"2d\");\n    ctx.fillStyle = \"yellow\";\n    ctx.fillRect(this.x, this.y, this.width, this.height);\n    this.moveObstacle();\n  }\n  moveObstacle() {\n    this.x -= this.speedX;\n  }\n\n  // speedUp () {\n  //     if (score % 5 === 0) {\n  //         this.speedX += 1;\n  //     }\n  // }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9vYnN0YWNsZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsUUFBUSxDQUFDO0VBRTFCQyxXQUFXQSxDQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUU7SUFDOUIsSUFBSSxDQUFDSCxDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNDLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0csTUFBTSxHQUFHLENBQUM7SUFDZixJQUFJLENBQUNGLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN4QjtFQUVBRSxZQUFZQSxDQUFBLEVBQUc7SUFDWCxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQztJQUNwRCxNQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBVSxDQUFDLElBQUksQ0FBQztJQUNuQ0QsR0FBRyxDQUFDRSxTQUFTLEdBQUcsUUFBUTtJQUN4QkYsR0FBRyxDQUFDRyxRQUFRLENBQUMsSUFBSSxDQUFDWixDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEVBQUUsSUFBSSxDQUFDQyxLQUFLLEVBQUUsSUFBSSxDQUFDQyxNQUFNLENBQUM7SUFDckQsSUFBSSxDQUFDVSxZQUFZLENBQUMsQ0FBQztFQUN2QjtFQUVBQSxZQUFZQSxDQUFBLEVBQUk7SUFDUixJQUFJLENBQUNiLENBQUMsSUFBSSxJQUFJLENBQUNJLE1BQU07RUFDN0I7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanVtcHlob3JzZS8uL3NyYy9zY3JpcHRzL29ic3RhY2xlLmpzPzM1MjMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzdGFjbGUge1xuXG4gICAgY29uc3RydWN0b3IgKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5zcGVlZFggPSAyO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIGRyYXdPYnN0YWNsZSgpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kXCIpO1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMubW92ZU9ic3RhY2xlKCk7XG4gICAgfVxuXG4gICAgbW92ZU9ic3RhY2xlICgpIHtcbiAgICAgICAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkWDtcbiAgICB9XG5cbiAgICAvLyBzcGVlZFVwICgpIHtcbiAgICAvLyAgICAgaWYgKHNjb3JlICUgNSA9PT0gMCkge1xuICAgIC8vICAgICAgICAgdGhpcy5zcGVlZFggKz0gMTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuXG59Il0sIm5hbWVzIjpbIk9ic3RhY2xlIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0Iiwic3BlZWRYIiwiZHJhd09ic3RhY2xlIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm1vdmVPYnN0YWNsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/obstacle.js\n");

/***/ }),

/***/ "./src/scripts/view.js":
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\n/* harmony import */ var _horse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horse */ \"./src/scripts/horse.js\");\n/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacle */ \"./src/scripts/obstacle.js\");\n\n\nclass View {\n  constructor(canvas) {\n    this.over = false;\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.score = 0;\n    this.horse = new _horse__WEBPACK_IMPORTED_MODULE_0__[\"default\"](20, 360, 100, 70);\n    this.obstacles = [new _obstacle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](900, 360, 20, 60)];\n    this.intervalID = setInterval(() => {\n      this.obstacles.push(new _obstacle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](900, 360, 20, 60));\n      if (this.obstacles[0].x <= 0) {\n        this.obstacles.shift();\n      }\n    }, 7000);\n    window.addEventListener(\"keydown\", e => {\n      if (e.code === \"Space\" && this.horse.y === 360) {\n        this.horse.jump();\n      }\n      ;\n    });\n  }\n  draw(ctx) {\n    if (!this.over) {\n      ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);\n      this.horse.drawHorse();\n      this.obstacles.forEach(obs => {\n        obs.drawObstacle();\n      });\n      this.drawScore();\n      requestAnimationFrame(() => {\n        this.draw(ctx);\n        this.collision();\n      });\n    }\n  }\n  collision() {\n    const obs = this.obstacles[0];\n    const horse = this.horse;\n    if (obs.x > horse.x && obs.x < horse.x + horse.width && obs.x + obs.width > horse.x && obs.x + obs.width < horse.x + horse.width && horse.y + horse.height >= obs.y && horse.y + horse.height >= obs.y - obs.height) {\n      this.gameOver();\n    }\n    // {return true}\n    else {\n      this.scoreUp();\n    }\n    ;\n  }\n  scoreUp() {\n    if (this.horse.x > this.obstacles[0].x && this.obstacles[0].x > 17) {\n      this.score += 1;\n    }\n  }\n  drawScore() {\n    const canvas = document.getElementById(\"background\");\n    const ctx = canvas.getContext(\"2d\");\n    this.x = 435;\n    this.y = 50;\n    ctx.font = \"40pt serif\";\n    ctx.fillStyle = \"white\";\n    ctx.fillText(this.score, this.x, this.y);\n  }\n  gameOver() {\n    this.over = true;\n    clearInterval(this.intervalID);\n    const canvas = document.getElementById(\"background\");\n    const ctx = canvas.getContext(\"2d\");\n    const endModal = document.getElementById(\"endModal\");\n    endModal.style.display = \"block\";\n    const start = document.getElementById(\"start-button\");\n    start.onclick = function () {\n      debugger;\n      this.over = false;\n      // const view = new View(canvas);\n      // view.draw(ctx);\n      endModal.style.display = \"none\";\n    };\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxJQUFJO0lBQ2hCb0MsYUFBYSxDQUFDLElBQUksQ0FBQzdCLFVBQVUsQ0FBQztJQUM5QixNQUFNUixNQUFNLEdBQUcrQixRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUM7SUFDcEQsTUFBTVosR0FBRyxHQUFHcEIsTUFBTSxDQUFDaUMsVUFBVSxDQUFDLElBQUksQ0FBQztJQUNuQyxNQUFNSyxRQUFRLEdBQUdQLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsQ0FBQztJQUNwRE0sUUFBUSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO0lBQ2hDLE1BQU1DLEtBQUssR0FBR1YsUUFBUSxDQUFDQyxjQUFjLENBQUMsY0FBYyxDQUFDO0lBQ3JEUyxLQUFLLENBQUNDLE9BQU8sR0FBRyxZQUFZO01BQ3hCO01BQ0EsSUFBSSxDQUFDekMsSUFBSSxHQUFHLEtBQUs7TUFDakI7TUFDQTtNQUNBcUMsUUFBUSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQ25DLENBQUM7RUFDRDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanVtcHlob3JzZS8uL3NyYy9zY3JpcHRzL3ZpZXcuanM/ODBjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSG9yc2UgZnJvbSBcIi4vaG9yc2VcIjtcbmltcG9ydCBPYnN0YWNsZSBmcm9tIFwiLi9vYnN0YWNsZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuXG4gICAgY29uc3RydWN0b3IgKGNhbnZhcykge1xuICAgICAgICB0aGlzLm92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuaG9yc2UgPSBuZXcgSG9yc2UoMjAsIDM2MCwgMTAwLCA3MCk7XG4gICAgICAgIHRoaXMub2JzdGFjbGVzID0gW25ldyBPYnN0YWNsZSg5MDAsIDM2MCwgMjAsIDYwKV07XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJRCA9IHNldEludGVydmFsICggKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vYnN0YWNsZXMucHVzaChuZXcgT2JzdGFjbGUoOTAwLCAzNjAsIDIwLCA2MCkpO1xuICAgICAgICAgICAgaWYgKHRoaXMub2JzdGFjbGVzWzBdLnggPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMub2JzdGFjbGVzLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDcwMDApO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJTcGFjZVwiICYmIHRoaXMuaG9yc2UueSA9PT0gMzYwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3JzZS5qdW1wKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICBpZiAoIXRoaXMub3ZlcikgeyBcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmhvcnNlLmRyYXdIb3JzZSgpO1xuICAgICAgICB0aGlzLm9ic3RhY2xlcy5mb3JFYWNoKG9icyA9PiB7XG4gICAgICAgICAgICBvYnMuZHJhd09ic3RhY2xlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRyYXdTY29yZSgpO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRyYXcoY3R4KTtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIH1cblxuICAgIGNvbGxpc2lvbiAoKSB7XG4gICAgICAgIGNvbnN0IG9icyA9IHRoaXMub2JzdGFjbGVzWzBdO1xuICAgICAgICBjb25zdCBob3JzZSA9IHRoaXMuaG9yc2U7XG5cbiAgICAgICAgaWYgKChvYnMueCA+IGhvcnNlLngpIFxuICAgICAgICAgICAgJiYgKG9icy54IDwgKGhvcnNlLnggKyBob3JzZS53aWR0aCkpXG4gICAgICAgICAgICAmJiAoKG9icy54ICsgb2JzLndpZHRoKSA+IGhvcnNlLngpXG4gICAgICAgICAgICAmJiAoKG9icy54ICsgb2JzLndpZHRoKSA8IChob3JzZS54ICsgaG9yc2Uud2lkdGgpKVxuICAgICAgICAgICAgJiYgKGhvcnNlLnkgKyBob3JzZS5oZWlnaHQgPj0gb2JzLnkpXG4gICAgICAgICAgICAmJiAoaG9yc2UueSArIGhvcnNlLmhlaWdodCA+PSBvYnMueSAtIG9icy5oZWlnaHQpKVxuICAgICAgICAgICAge3RoaXMuZ2FtZU92ZXIoKX1cbiAgICAgICAgICAgIC8vIHtyZXR1cm4gdHJ1ZX1cbiAgICAgICAgICAgICAgICBlbHNlIHt0aGlzLnNjb3JlVXAoKX07XG4gICAgfVxuXG4gICAgc2NvcmVVcCAoKSB7XG4gICAgICAgIGlmICh0aGlzLmhvcnNlLnggPiB0aGlzLm9ic3RhY2xlc1swXS54ICYmIHRoaXMub2JzdGFjbGVzWzBdLnggPiAxNylcbiAgICAgICAge3RoaXMuc2NvcmUgKz0gMTt9XG4gICAgfVxuXG4gICAgZHJhd1Njb3JlKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIik7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMueCA9IDQzNTtcbiAgICAgICAgdGhpcy55ID0gNTA7XG4gICAgICAgIGN0eC5mb250ID0gXCI0MHB0IHNlcmlmXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnNjb3JlLCB0aGlzLngsIHRoaXMueSk7XG4gICAgICB9XG5cblxuICAgIGdhbWVPdmVyKCkge1xuICAgICAgICB0aGlzLm92ZXIgPSB0cnVlO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJRCk7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZFwiKTtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY29uc3QgZW5kTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZE1vZGFsXCIpO1xuICAgICAgICBlbmRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBjb25zdCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtYnV0dG9uXCIpO1xuICAgICAgICBzdGFydC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIHRoaXMub3ZlciA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gY29uc3QgdmlldyA9IG5ldyBWaWV3KGNhbnZhcyk7XG4gICAgICAgICAgICAvLyB2aWV3LmRyYXcoY3R4KTtcbiAgICAgICAgICAgIGVuZE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiJdLCJuYW1lcyI6WyJIb3JzZSIsIk9ic3RhY2xlIiwiVmlldyIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwib3ZlciIsImRpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsInNjb3JlIiwiaG9yc2UiLCJvYnN0YWNsZXMiLCJpbnRlcnZhbElEIiwic2V0SW50ZXJ2YWwiLCJwdXNoIiwieCIsInNoaWZ0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwieSIsImp1bXAiLCJkcmF3IiwiY3R4IiwiY2xlYXJSZWN0IiwiZHJhd0hvcnNlIiwiZm9yRWFjaCIsIm9icyIsImRyYXdPYnN0YWNsZSIsImRyYXdTY29yZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNvbGxpc2lvbiIsImdhbWVPdmVyIiwic2NvcmVVcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiZm9udCIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwiY2xlYXJJbnRlcnZhbCIsImVuZE1vZGFsIiwic3R5bGUiLCJkaXNwbGF5Iiwic3RhcnQiLCJvbmNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/view.js\n");

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