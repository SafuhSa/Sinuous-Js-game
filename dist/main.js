/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/circle.js":
/*!***********************!*\
  !*** ./src/circle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass Circle {\n  constructor(options) {\n    this.canvas = options.canvas\n    this.ctx = options.ctx\n\n    this.ball_x = options.ball_x;\n    this.ball_y = options.ball_y;\n    this.radius = options.radius;\n    this.color = options.color;\n    this.draw = this.draw.bind(this)\n    this.move = this.move.bind(this)\n  }\n\n\n  draw() {\n    this.ctx.fillStyle = this.color;\n\n    this.ctx.beginPath();\n\n    this.ctx.arc(this.ball_x, this.ball_y, this.radius, 0, 2 * Math.PI, true);\n    this.ctx.fill();\n  };\n\n\n  move() {\n    if ((this.ball_x <= 0) || (this.ball_y >= 600)) {\n      let pos = this.getrandom(this.ball_x, this.ball_y)\n      this.ball_x = pos[0];//this.canvas.width;\n      this.ball_y = pos[1];//0;\n    } else {\n      this.ball_x -= 2;\n      this.ball_y += 1.2;\n    }\n    this.draw()\n  };\n\n  getrandom(x, y) {\n    let new_y;\n    let new_x;\n\n    if (x <= 0 && y >= 600) {\n      new_x = this.canvas.width;\n      new_y = 0;\n    } else if (x <= 0) {\n      new_x = Math.floor(Math.random() * this.canvas.width) + 10;\n      new_y = 0\n    } else {\n      new_x = this.canvas.width\n      new_y = Math.floor(Math.random() * this.canvas.height) + 1;\n    }\n\n    return [new_x, new_y];\n  }\n}\nmodule.exports = Circle;\n\n//# sourceURL=webpack:///./src/circle.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nclass Game {\n  constructor(options) {\n    this.score;\n    this.life = 5;\n    this.level = options.level;\n    this.ctx = options.ctx\n    this.canvas = options.canvas\n\n    this.moving_objs = new MovingObject({\n      ctx: this.ctx,\n      canvas: this.canvas,\n      game: this,\n      nums: 5\n    });\n    this.start = this.start.bind(this)\n    this.update = this.update.bind(this)\n  }\n\n  start() {\n\n    window.requestAnimationFrame(this.update.bind(this));\n  }\n\n\n  update() {\n    this.fillrec();\n    this.moving_objs.update()\n\n    window.requestAnimationFrame(this.update);\n  }\n\n  fillrec(h, w) {\n    this.ctx.fillStyle = \"black\";\n    // this.ctx.fillRect(0, 0, w, h);\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  const canvasEl = document.getElementById(\"game-canvas\");\n  const ctx = canvasEl.getContext(\"2d\");\n  canvasEl.width = 1000\n  canvasEl.height = 600;\n\n\n  ctx.fillStyle = 'black';\n  ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);\n  const game = new Game({ctx: ctx, canvas: canvasEl, level: 1});\n\n  game.start()\n});\n\n\n\n\nconsole.log(\"Webpack is working!\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/line.js":
/*!*********************!*\
  !*** ./src/line.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Line {\n  constructor(options) {\n    this.ctx = options.ctx;\n    this.crl = options.cursor\n    this.xs = [options.cursor.ball_x]\n    this.ys = [options.cursor.ball_y]\n    \n    this.draw = this.draw.bind(this)\n    // setInterval(this.updatePos.bind(this), 1000 / 500)\n  }\n  \n  updatePos() {\n      this.xs = this.xs.map(val => val - 2)\n      this.ys = this.ys.map(val => val + 1.2)\n\n      this.xs.push(this.crl.ball_x)\n      this.ys.push(this.crl.ball_y)\n    \n    \n    if (this.xs.length > 50) {\n      this.xs.shift()\n      this.ys.shift()\n    }\n  }\n  \n  draw() {\n    this.updatePos()\n    for (let i = 0; i < this.xs.length - 1; i++) {\n      const x = this.xs[i];\n      const x1 = this.xs[i + 1];\n      const y = this.ys[i];\n      const y1 = this.ys[i + 1];\n      \n      this.drawline(x, y, x1, y1)\n    }\n  }\n  \n  \n  \n  drawline(fromx, fromy, toX, toY) {\n    this.ctx.strokeStyle = \"#4abaa3\";\n    this.ctx.lineWidth = 3;\n\n    // this.ctx.fillStyle = \"#4abaa3\";\n    // this.ctx.beginPath();\n    // this.ctx.arc(fromx, fromy, 2, 0, 2 * Math.PI, true);\n    // this.ctx.fill();\n\n    this.ctx.beginPath();\n    this.ctx.moveTo(fromx, fromy);\n    this.ctx.lineTo(toX, toY);\n    this.ctx.stroke();\n  }\n}\n\nmodule.exports = Line;\n\n//# sourceURL=webpack:///./src/line.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Circle = __webpack_require__(/*! ./circle */ \"./src/circle.js\");\nconst Line = __webpack_require__(/*! ./line */ \"./src/line.js\");\n\nclass MovingObject {\n  constructor(options) {\n    this.date = Date.now()\n    this.canvas = options.canvas;\n    this.ctx = options.ctx;\n    this.crl = new Circle ({ ctx: this.ctx, canvas: this.canvas, ball_x: 500, ball_y: 100, radius: 5, color: \"#00FFFF\" });\n    this.line = new Line({ cursor: this.crl, ctx: this.ctx})\n    this.game = options.game;\n\n    this.arr = this.populate(options.nums)\n    this.org = this.arr.length\n    \n    \n    this.refreshId = setInterval(this.incr.bind(this), 1000 / 2);\n    this.canvas.addEventListener('mousemove', this.updateMousePos.bind(this));\n    \n    // this.update = this.update.bind(this)\n  }\n\n  updateMousePos(event) {\n    let rect = this.canvas.getBoundingClientRect();\n    let root = document.documentElement;\n    let x = event.clientX - rect.left - root.scrollLeft;\n    let y = event.clientY - rect.top - root.scrollTop;\n    \n    this.crl.ball_x = x\n    this.crl.ball_y = y\n  }\n\n  collision(red_bl) {\n    if (Date.now() - this.date <= 1000) {\n      return null;\n    }\n    // sqrt((x2-x1)^2 + (y2-y1)^2) = r1+r2\n    // let xcols = ((red_bl.ball_x + red_bl.radius) >= this.crl.ball_x) && ((red_bl.ball_x - red_bl.radius) <= this.crl.ball_x);\n    // let ycols = ((red_bl.ball_y + red_bl.radius) >= this.crl.ball_y) && ((red_bl.ball_y - red_bl.radius) <= this.crl.ball_y);\n\n    \n    let dif_x = Math.pow((red_bl.ball_x - this.crl.ball_x), 2);\n    let dif_y = Math.pow((red_bl.ball_y - this.crl.ball_y), 2);\n    let dis = Math.sqrt(dif_x + dif_y);\n    let both_rds = red_bl.radius + this.crl.radius\n\n\n    if (dis <= both_rds) {\n      this.game.life -= 1;\n      this.date = Date.now();\n      console.log('collision');\n      }\n  }\n  \n  \n  incr() {\n    if (this.arr.length >= (this.org * this.org)) {\n      clearInterval(this.refreshId);\n    }\n    let num = Math.round(this.arr.length / 10)\n    if (num  < 1) {\n      num = 1\n    }\n    this.arr = this.arr.concat(this.populate(num))\n  }\n  \n  \n  update() {\n    this.crl.draw()\n    this.line.draw(this.crl.ball_x, this.crl.ball_y)\n    this.move(this.arr)\n  }\n  \n  move(arr) {\n    for (let i = 0; i < arr.length; i++) {\n      const circl = arr[i];\n      circl.move();\n      this.collision(circl)\n    }\n  }\n  \n  populate(nums) {\n    const xs = this.getRandom(1, this.canvas.width, nums / 2);\n    const ys = this.getRandom(1, this.canvas.height, Math.floor(nums / 2));\n    \n    let arr = [];\n    let obj;\n    let circle;\n    \n    for (let i = 0; i < xs.length; i++) {\n      const x = xs[i];\n      obj = {\n        ctx: this.ctx,\n        canvas: this.canvas,\n        ball_x: x,\n        ball_y: 0,\n        radius: 5,\n        color: \"#DC143C\" //red\n      };\n      circle = new Circle(obj);\n      arr.push(circle);\n    }\n    \n    for (let j = 0; j < ys.length; j++) {\n      const y = ys[j];\n      obj = {\n        ctx: this.ctx,\n        canvas: this.canvas,\n        ball_x: this.canvas.width,\n        ball_y: y,\n        radius: 5,\n        color: \"#DC143C\" // red\n      };\n      circle = new Circle(obj);\n      arr.push(circle);\n    }\n    return arr;\n  }\n  \n  \n  getRandom(start, end, nums) {\n    var arr = [];\n    while (arr.length < nums) {\n      var r = Math.floor(Math.random() * end) + start;\n      if (arr.indexOf(r) === -1) arr.push(r);\n    }\n    return arr;\n  }\n}\n\nmodule.exports = MovingObject;\n\n// class Game {\n//   constructor(options) {\n//     this.score;\n//     this.life = 5;\n//     this.level = options.level;\n//     this.ctx = options.ctx\n//     this.canvas = options.canvas\n    \n//     this.moving_objs = new MovingObject({\n//       ctx: this.ctx,\n//       canvas: this.canvas,\n//       game: this,\n//       nums: 5\n//     });\n//     this.start = this.start.bind(this)\n//     this.update = this.update.bind(this)\n//   }\n  \n//   start() {\n    \n//     window.requestAnimationFrame(this.update.bind(this));\n//   }\n  \n  \n//   update() {\n//     this.fillrec();\n//     this.moving_objs.update()\n\n//     window.requestAnimationFrame(this.update);\n//   }\n  \n//   fillrec(h, w) {\n//     this.ctx.fillStyle = \"black\";\n//     // this.ctx.fillRect(0, 0, w, h);\n//     this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n//   }\n// }\n// module.exports = Game;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ })

/******/ });