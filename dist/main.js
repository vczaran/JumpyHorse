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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/view */ \"./src/scripts/view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('background');\n  const game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  // const view = new View(canvas);\n  // const start = document.getElementById(\"start-button\");\n  // start.onclick = function () {game.startGame(game.view)};\n  // new View(canvas);\n  // const view = new View(canvas);\n  // new Game(view);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWtDO0FBQ0E7QUFFbENFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFlBQVksQ0FBQztFQUNwRCxNQUFNQyxJQUFJLEdBQUcsSUFBSU4scURBQUksQ0FBQ0ksTUFBTSxDQUFDO0VBQzdCO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2p1bXB5aG9yc2UvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5pbXBvcnQgVmlldyBmcm9tICcuL3NjcmlwdHMvdmlldyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2dyb3VuZCcpO1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xuICAgIC8vIGNvbnN0IHZpZXcgPSBuZXcgVmlldyhjYW52YXMpO1xuICAgIC8vIGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1idXR0b25cIik7XG4gICAgLy8gc3RhcnQub25jbGljayA9IGZ1bmN0aW9uICgpIHtnYW1lLnN0YXJ0R2FtZShnYW1lLnZpZXcpfTtcbiAgICAvLyBuZXcgVmlldyhjYW52YXMpO1xuICAgIC8vIGNvbnN0IHZpZXcgPSBuZXcgVmlldyhjYW52YXMpO1xuICAgIC8vIG5ldyBHYW1lKHZpZXcpO1xufSkiXSwibmFtZXMiOlsiR2FtZSIsIlZpZXciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImdhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/scripts/view.js\");\n\nclass Game {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.view = new _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n    // const start = document.getElementById(\"start-button\");\n    this.startGame(this.view);\n    // start.onclick = function () {this.startGame(view)};\n  }\n\n  startGame(view) {\n    // const start = document.getElementById(\"start-button\");\n    // start.onclick = function() { view.draw(this.ctx);};\n    // this.running = true;\n    view.draw(this.ctx);\n  }\n  gameOver() {\n    if (this.view.collision === true) {\n      alert(\"Game Over!\");\n      // this.running = false;\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBRVgsTUFBTUMsSUFBSSxDQUFDO0VBQ3RCQyxXQUFXQSxDQUFDQyxNQUFNLEVBQUU7SUFDaEIsSUFBSSxDQUFDQyxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsVUFBVSxDQUFDLElBQUksQ0FBQztJQUNsQyxJQUFJLENBQUNDLFVBQVUsR0FBRztNQUFFQyxLQUFLLEVBQUVKLE1BQU0sQ0FBQ0ksS0FBSztNQUFFQyxNQUFNLEVBQUVMLE1BQU0sQ0FBQ0s7SUFBTyxDQUFDO0lBQ2hFLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUlULDZDQUFJLENBQUNHLE1BQU0sQ0FBQztJQUM1QjtJQUNBLElBQUksQ0FBQ08sU0FBUyxDQUFDLElBQUksQ0FBQ0QsSUFBSSxDQUFDO0lBQ3pCO0VBQ0o7O0VBRUFDLFNBQVNBLENBQUNELElBQUksRUFBRTtJQUNaO0lBQ0E7SUFDQTtJQUNDQSxJQUFJLENBQUNFLElBQUksQ0FBQyxJQUFJLENBQUNQLEdBQUcsQ0FBQztFQUN4QjtFQUVBUSxRQUFRQSxDQUFBLEVBQUc7SUFDUCxJQUFJLElBQUksQ0FBQ0gsSUFBSSxDQUFDSSxTQUFTLEtBQUssSUFBSSxFQUFFO01BQ2xDQyxLQUFLLENBQUMsWUFBWSxDQUFDO01BQ25CO0lBQ0E7RUFDSjtBQUdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanVtcHlob3JzZS8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlldyBmcm9tIFwiLi92aWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBWaWV3KGNhbnZhcyk7XG4gICAgICAgIC8vIGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1idXR0b25cIik7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKHRoaXMudmlldyk7XG4gICAgICAgIC8vIHN0YXJ0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7dGhpcy5zdGFydEdhbWUodmlldyl9O1xuICAgIH1cblxuICAgIHN0YXJ0R2FtZSh2aWV3KSB7XG4gICAgICAgIC8vIGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1idXR0b25cIik7XG4gICAgICAgIC8vIHN0YXJ0Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHsgdmlldy5kcmF3KHRoaXMuY3R4KTt9O1xuICAgICAgICAvLyB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgdmlldy5kcmF3KHRoaXMuY3R4KTtcbiAgICB9XG5cbiAgICBnYW1lT3ZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudmlldy5jb2xsaXNpb24gPT09IHRydWUpIHtcbiAgICAgICAgYWxlcnQoXCJHYW1lIE92ZXIhXCIpO1xuICAgICAgICAvLyB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59Il0sIm5hbWVzIjpbIlZpZXciLCJHYW1lIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZGltZW5zaW9ucyIsIndpZHRoIiwiaGVpZ2h0IiwidmlldyIsInN0YXJ0R2FtZSIsImRyYXciLCJnYW1lT3ZlciIsImNvbGxpc2lvbiIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Obstacle; }\n/* harmony export */ });\nclass Obstacle {\n  constructor(x, y, width, height) {\n    this.x = x;\n    this.y = y;\n    this.speedX = 2;\n    this.width = width;\n    this.height = height;\n  }\n  drawObstacle() {\n    const canvas = document.getElementById(\"background\");\n    const ctx = canvas.getContext(\"2d\");\n    ctx.fillStyle = \"yellow\";\n    ctx.fillRect(this.x, this.y, this.width, this.height);\n    this.moveObstacle();\n  }\n  moveObstacle() {\n    this.x -= this.speedX;\n    // console.log(this.x);\n  }\n\n  speedUp() {\n    if (score % 5 === 0) {\n      this.speedX += 1;\n    }\n  }\n  drawScore() {\n    this.x = 100;\n    this.y = 10;\n    this.ctx.font = \"bold 50pt serif\";\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillText(this.score, loc.x, loc.y);\n    this.ctx.strokeStyle = \"black\";\n    this.ctx.lineWidth = 2;\n    this.ctx.strokeText(this.score, loc.x, loc.y);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9vYnN0YWNsZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsUUFBUSxDQUFDO0VBRTFCQyxXQUFXQSxDQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUU7SUFDOUIsSUFBSSxDQUFDSCxDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNDLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0csTUFBTSxHQUFHLENBQUM7SUFDZixJQUFJLENBQUNGLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN4QjtFQUVBRSxZQUFZQSxDQUFBLEVBQUc7SUFDWCxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQztJQUNwRCxNQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBVSxDQUFDLElBQUksQ0FBQztJQUNuQ0QsR0FBRyxDQUFDRSxTQUFTLEdBQUcsUUFBUTtJQUN4QkYsR0FBRyxDQUFDRyxRQUFRLENBQUMsSUFBSSxDQUFDWixDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEVBQUUsSUFBSSxDQUFDQyxLQUFLLEVBQUUsSUFBSSxDQUFDQyxNQUFNLENBQUM7SUFDckQsSUFBSSxDQUFDVSxZQUFZLENBQUMsQ0FBQztFQUN2QjtFQUVBQSxZQUFZQSxDQUFBLEVBQUk7SUFDUixJQUFJLENBQUNiLENBQUMsSUFBSSxJQUFJLENBQUNJLE1BQU07SUFDckI7RUFDUjs7RUFFQVUsT0FBT0EsQ0FBQSxFQUFJO0lBQ1AsSUFBSUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7TUFDakIsSUFBSSxDQUFDWCxNQUFNLElBQUksQ0FBQztJQUNwQjtFQUNKO0VBRUFZLFNBQVNBLENBQUEsRUFBRztJQUNSLElBQUksQ0FBQ2hCLENBQUMsR0FBRyxHQUFHO0lBQ1osSUFBSSxDQUFDQyxDQUFDLEdBQUcsRUFBRTtJQUNYLElBQUksQ0FBQ1EsR0FBRyxDQUFDUSxJQUFJLEdBQUcsaUJBQWlCO0lBQ2pDLElBQUksQ0FBQ1IsR0FBRyxDQUFDRSxTQUFTLEdBQUcsT0FBTztJQUM1QixJQUFJLENBQUNGLEdBQUcsQ0FBQ1MsUUFBUSxDQUFDLElBQUksQ0FBQ0gsS0FBSyxFQUFFSSxHQUFHLENBQUNuQixDQUFDLEVBQUVtQixHQUFHLENBQUNsQixDQUFDLENBQUM7SUFDM0MsSUFBSSxDQUFDUSxHQUFHLENBQUNXLFdBQVcsR0FBRyxPQUFPO0lBQzlCLElBQUksQ0FBQ1gsR0FBRyxDQUFDWSxTQUFTLEdBQUcsQ0FBQztJQUN0QixJQUFJLENBQUNaLEdBQUcsQ0FBQ2EsVUFBVSxDQUFDLElBQUksQ0FBQ1AsS0FBSyxFQUFFSSxHQUFHLENBQUNuQixDQUFDLEVBQUVtQixHQUFHLENBQUNsQixDQUFDLENBQUM7RUFDL0M7QUFFTiIsInNvdXJjZXMiOlsid2VicGFjazovL2p1bXB5aG9yc2UvLi9zcmMvc2NyaXB0cy9vYnN0YWNsZS5qcz8zNTIzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic3RhY2xlIHtcblxuICAgIGNvbnN0cnVjdG9yICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuc3BlZWRYID0gMjtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBkcmF3T2JzdGFjbGUoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZFwiKTtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLm1vdmVPYnN0YWNsZSgpO1xuICAgIH1cblxuICAgIG1vdmVPYnN0YWNsZSAoKSB7XG4gICAgICAgICAgICB0aGlzLnggLT0gdGhpcy5zcGVlZFg7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLngpO1xuICAgIH1cblxuICAgIHNwZWVkVXAgKCkge1xuICAgICAgICBpZiAoc2NvcmUgJSA1ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkWCArPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd1Njb3JlKCkge1xuICAgICAgICB0aGlzLnggPSAxMDA7XG4gICAgICAgIHRoaXMueSA9IDEwO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCJib2xkIDUwcHQgc2VyaWZcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLnNjb3JlLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlVGV4dCh0aGlzLnNjb3JlLCBsb2MueCwgbG9jLnkpO1xuICAgICAgfVxuXG59Il0sIm5hbWVzIjpbIk9ic3RhY2xlIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0Iiwic3BlZWRYIiwiZHJhd09ic3RhY2xlIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm1vdmVPYnN0YWNsZSIsInNwZWVkVXAiLCJzY29yZSIsImRyYXdTY29yZSIsImZvbnQiLCJmaWxsVGV4dCIsImxvYyIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/obstacle.js\n");

/***/ }),

/***/ "./src/scripts/view.js":
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\n/* harmony import */ var _horse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horse */ \"./src/scripts/horse.js\");\n/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacle */ \"./src/scripts/obstacle.js\");\n\n\nclass View {\n  constructor(canvas) {\n    const ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.score = 0;\n    // this.collision = false;\n    this.horse = new _horse__WEBPACK_IMPORTED_MODULE_0__[\"default\"](20, 360, 100, 70);\n    this.obstacles = [new _obstacle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](900, 360, 20, 60)];\n    this.intervalID = setInterval(() => {\n      this.obstacles.push(new _obstacle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](900, 360, 20, 60));\n      if (this.obstacles[0].x <= 0) {\n        // let collision = false;\n        // console.log(collision);\n        this.obstacles.shift();\n        // this.called = false;\n        // console.log(this.obstacles);\n      }\n    }, 7000);\n    // this.draw(ctx);\n\n    window.addEventListener(\"keydown\", e => {\n      if (e.code === \"Space\" && this.horse.y === 360) {\n        this.horse.jump();\n      }\n      ;\n      // clearInterval(this.intervalID);\n    });\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);\n    this.horse.drawHorse();\n    this.obstacles.forEach(obs => {\n      obs.drawObstacle();\n    });\n    this.drawScore();\n    requestAnimationFrame(() => {\n      this.draw(ctx);\n      this.collision();\n    });\n  }\n  collision() {\n    const obs = this.obstacles[0];\n    const horse = this.horse;\n\n    // console.log(obs.x);\n    // console.log(obs.y);\n    // console.log(horse.x);\n    // console.log(horse.y);\n\n    if (obs.x > horse.x && obs.x < horse.x + horse.width && obs.x + obs.width > horse.x && obs.x + obs.width < horse.x + horse.width && horse.y + horse.height >= obs.y && horse.y + horse.height >= obs.y - obs.height) {\n      console.log(true);\n    }\n    // this.collision = true}\n    // alert(\"Game Over!\")};\n    else {\n      this.scoreUp();\n    }\n    ;\n  }\n  scoreUp() {\n    if (this.horse.x > this.obstacles[0].x && this.obstacles[0].x > 17) {\n      this.score += 1;\n      console.log(this.score);\n    }\n    // this.called = true};\n  }\n\n  drawScore() {\n    const canvas = document.getElementById(\"background\");\n    const ctx = canvas.getContext(\"2d\");\n    this.x = 435;\n    this.y = 50;\n    ctx.font = \"bold 40pt serif\";\n    ctx.fillStyle = \"black\";\n    ctx.fillText(this.score, this.x, this.y);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUM5QixLQUFLLEVBQUUsSUFBSSxDQUFDTSxDQUFDLEVBQUUsSUFBSSxDQUFDTSxDQUFDLENBQUM7RUFDMUM7QUFDTiIsInNvdXJjZXMiOlsid2VicGFjazovL2p1bXB5aG9yc2UvLi9zcmMvc2NyaXB0cy92aWV3LmpzPzgwYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhvcnNlIGZyb20gXCIuL2hvcnNlXCI7XG5pbXBvcnQgT2JzdGFjbGUgZnJvbSBcIi4vb2JzdGFjbGVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcblxuICAgIGNvbnN0cnVjdG9yIChjYW52YXMpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIC8vIHRoaXMuY29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaG9yc2UgPSBuZXcgSG9yc2UoMjAsIDM2MCwgMTAwLCA3MCk7XG4gICAgICAgIHRoaXMub2JzdGFjbGVzID0gW25ldyBPYnN0YWNsZSg5MDAsIDM2MCwgMjAsIDYwKV07XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJRCA9IHNldEludGVydmFsICggKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vYnN0YWNsZXMucHVzaChuZXcgT2JzdGFjbGUoOTAwLCAzNjAsIDIwLCA2MCkpO1xuICAgICAgICAgICAgaWYgKHRoaXMub2JzdGFjbGVzWzBdLnggPD0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGxldCBjb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb2xsaXNpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMub2JzdGFjbGVzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm9ic3RhY2xlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDcwMDApO1xuICAgICAgICAvLyB0aGlzLmRyYXcoY3R4KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT09IFwiU3BhY2VcIiAmJiB0aGlzLmhvcnNlLnkgPT09IDM2MCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaG9yc2UuanVtcCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElEKTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5ob3JzZS5kcmF3SG9yc2UoKTtcbiAgICAgICAgdGhpcy5vYnN0YWNsZXMuZm9yRWFjaChvYnMgPT4ge1xuICAgICAgICAgICAgb2JzLmRyYXdPYnN0YWNsZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kcmF3U2NvcmUoKTtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kcmF3KGN0eCk7XG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvbigpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGNvbGxpc2lvbiAoKSB7XG4gICAgICAgIGNvbnN0IG9icyA9IHRoaXMub2JzdGFjbGVzWzBdO1xuICAgICAgICBjb25zdCBob3JzZSA9IHRoaXMuaG9yc2U7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cob2JzLngpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhvYnMueSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGhvcnNlLngpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhob3JzZS55KTtcblxuICAgICAgICBpZiAoKG9icy54ID4gaG9yc2UueCkgXG4gICAgICAgICAgICAmJiAob2JzLnggPCAoaG9yc2UueCArIGhvcnNlLndpZHRoKSlcbiAgICAgICAgICAgICYmICgob2JzLnggKyBvYnMud2lkdGgpID4gaG9yc2UueClcbiAgICAgICAgICAgICYmICgob2JzLnggKyBvYnMud2lkdGgpIDwgKGhvcnNlLnggKyBob3JzZS53aWR0aCkpXG4gICAgICAgICAgICAmJiAoKGhvcnNlLnkgKyBob3JzZS5oZWlnaHQpID49IG9icy55KVxuICAgICAgICAgICAgJiYgKGhvcnNlLnkgKyBob3JzZS5oZWlnaHQgPj0gb2JzLnkgLSBvYnMuaGVpZ2h0KSlcbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHRydWUpfVxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY29sbGlzaW9uID0gdHJ1ZX1cbiAgICAgICAgICAgICAgICAvLyBhbGVydChcIkdhbWUgT3ZlciFcIil9O1xuICAgICAgICAgICAgICAgIGVsc2Uge3RoaXMuc2NvcmVVcCgpfTtcbiAgICB9XG5cbiAgICBzY29yZVVwICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaG9yc2UueCA+IHRoaXMub2JzdGFjbGVzWzBdLnggJiYgdGhpcy5vYnN0YWNsZXNbMF0ueCA+IDE3KVxuICAgICAgICB7dGhpcy5zY29yZSArPSAxO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNjb3JlKTt9XG4gICAgICAgIC8vIHRoaXMuY2FsbGVkID0gdHJ1ZX07XG4gICAgfVxuXG4gICAgZHJhd1Njb3JlKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIik7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMueCA9IDQzNTtcbiAgICAgICAgdGhpcy55ID0gNTA7XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMuc2NvcmUsIHRoaXMueCwgdGhpcy55KTtcbiAgICAgIH1cbn0iXSwibmFtZXMiOlsiSG9yc2UiLCJPYnN0YWNsZSIsIlZpZXciLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJzY29yZSIsImhvcnNlIiwib2JzdGFjbGVzIiwiaW50ZXJ2YWxJRCIsInNldEludGVydmFsIiwicHVzaCIsIngiLCJzaGlmdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29kZSIsInkiLCJqdW1wIiwiZHJhdyIsImNsZWFyUmVjdCIsImRyYXdIb3JzZSIsImZvckVhY2giLCJvYnMiLCJkcmF3T2JzdGFjbGUiLCJkcmF3U2NvcmUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb2xsaXNpb24iLCJjb25zb2xlIiwibG9nIiwic2NvcmVVcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb250IiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/view.js\n");

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