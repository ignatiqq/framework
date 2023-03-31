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

/***/ "./src/hyperscript/constants.js":
/*!**************************************!*\
  !*** ./src/hyperscript/constants.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TEXT_NODE\": () => (/* binding */ TEXT_NODE),\n/* harmony export */   \"VALID_HYPERSCRIPT_TYPES\": () => (/* binding */ VALID_HYPERSCRIPT_TYPES)\n/* harmony export */ });\nvar TEXT_NODE = 'TEXT_NODE';\nvar VALID_HYPERSCRIPT_TYPES = ['div', 'p', 'button', 'section', 'input', 'search', 'ul', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'footer', 'header', TEXT_NODE];\n\n//# sourceURL=webpack://framework/./src/hyperscript/constants.js?");

/***/ }),

/***/ "./src/hyperscript/h.js":
/*!******************************!*\
  !*** ./src/hyperscript/h.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"h\": () => (/* binding */ h),\n/* harmony export */   \"textNode\": () => (/* binding */ textNode)\n/* harmony export */ });\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index */ \"./src/utils/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/hyperscript/constants.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\nfunction h(type, props) {\n  validateTagType(type);\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n  return {\n    type: type,\n    props: _objectSpread(_objectSpread({}, props), {}, {\n      children: children.map(function (child) {\n        return (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.isObject)(child) ? child : textNode(child);\n      })\n    })\n  };\n}\nfunction validateTagType(type) {\n  if (!_constants__WEBPACK_IMPORTED_MODULE_1__.VALID_HYPERSCRIPT_TYPES.includes(type) && !(0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.isFunction)(type)) {\n    throw new Error('Invalid hyperscript tag type');\n  }\n}\nfunction textNode(text) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_1__.TEXT_NODE,\n    props: {\n      nodeValue: text\n    }\n  };\n}\n\n//# sourceURL=webpack://framework/./src/hyperscript/h.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _hyperscript_h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hyperscript/h */ \"./src/hyperscript/h.js\");\n/* harmony import */ var _render_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/render */ \"./src/render/render.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  h: _hyperscript_h__WEBPACK_IMPORTED_MODULE_0__.h,\n  render: _render_render__WEBPACK_IMPORTED_MODULE_1__.render\n});\n\n//# sourceURL=webpack://framework/./src/index.js?");

/***/ }),

/***/ "./src/render/property.js":
/*!********************************!*\
  !*** ./src/render/property.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"property\": () => (/* binding */ property)\n/* harmony export */ });\n/* harmony import */ var _signals_signals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../signals/signals */ \"./src/signals/signals.js\");\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index */ \"./src/utils/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\nfunction property(element, name, prop) {\n  var isCss = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.isFunction)(prop)) {\n    if (prop.$signal) {\n      // добавить сравнения и ануманты и маунты функций и тд\n      // оптимизация этого кодана дестрой и тд\n      // например раньше показывался, потом не показывается\n      // добавить компонент жизненного цикла\n      (0,_signals_signals__WEBPACK_IMPORTED_MODULE_0__.createEffect)(function () {\n        // initialize effect for property (signal) change\n        // after any signal \"set\" any state\n        // it will trigger update property to dom element\n        var propVal = prop();\n        console.log({\n          element: element,\n          name: name,\n          propVal: propVal,\n          isCss: isCss\n        });\n        property(element, name, propVal, isCss);\n\n        // можно удалить все функции здесь, например\n        // onCleanup(() => {\n\n        // });\n      });\n    } else if (isFunctionHandler(name)) {\n      handleEvent(name, element, prop);\n    } else {\n      (0,_signals_signals__WEBPACK_IMPORTED_MODULE_0__.createEffect)(function () {\n        console.log('PROPERY EFFECT: ', {\n          element: element,\n          name: name,\n          prop: prop(),\n          isCss: isCss\n        });\n        property(element, name, prop(), isCss);\n      });\n    }\n  } else if (Array.isArray(prop)) {\n    console.log('IS ARRAY: ', {\n      prop: prop\n    });\n  } else if (isAttribute(name)) {\n    element.setAttribute(name, prop);\n  } else if (isCss) {\n    element.style.setProperty(name, prop);\n  } else if (isStyle(name)) {\n    if (typeof prop === 'string') {\n      element.style.cssText = prop;\n    }\n    if (_typeof(prop) === 'object') {\n      for (var _name in prop) {\n        property(element, _name, prop[_name], true);\n      }\n    }\n  } else if (isClassProperty(name)) {\n    element.classList.add(prop);\n  } else {\n    element[name] = prop;\n  }\n}\nfunction isFunctionHandler(name) {\n  return name[0] === name[1] && name[1].toLowerCase !== name[1];\n}\nfunction handleEvent(name, element, fn) {\n  name = name.slice(2).toLowerCase();\n  element.addEventListener(name, fn);\n}\nfunction isAttribute(name) {\n  return name.startsWith('data-') || name.startsWith('aria');\n}\nfunction isStyle(name) {\n  return name === 'style';\n}\nfunction isClassProperty(name) {\n  return name.toLowerCase() === 'classname';\n}\n\n//# sourceURL=webpack://framework/./src/render/property.js?");

/***/ }),

/***/ "./src/render/render.js":
/*!******************************!*\
  !*** ./src/render/render.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _hyperscript_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hyperscript/constants */ \"./src/hyperscript/constants.js\");\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index */ \"./src/utils/index.js\");\n/* harmony import */ var _property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property */ \"./src/render/property.js\");\n\n\n\nfunction render(root, h) {\n  if (!root) {\n    if (process.env === 'development') throw new Error('Root is not valid selector');\n    return null;\n  }\n  if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.isFunction)(h.type)) {\n    h = h.type(h.props);\n  }\n  var element = h.type === _hyperscript_constants__WEBPACK_IMPORTED_MODULE_0__.TEXT_NODE ? document.createTextNode('') : document.createElement(h.type);\n  if (h.props) {\n    var propsWithoutChildren = Object.keys(h.props).filter(function (prop) {\n      return prop !== 'children';\n    });\n    propsWithoutChildren.forEach(function (name) {\n      (0,_property__WEBPACK_IMPORTED_MODULE_2__.property)(element, name, h.props[name]);\n    });\n  }\n  if (h.props.children && h.props.children.length) {\n    h.props.children.forEach(function (child) {\n      render(element, child);\n    });\n    root.append(element);\n  } else {\n    root.append(element);\n  }\n}\n\n//# sourceURL=webpack://framework/./src/render/render.js?");

/***/ }),

/***/ "./src/signals/Executor.js":
/*!*********************************!*\
  !*** ./src/signals/Executor.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Executor = /*#__PURE__*/function () {\n  function Executor(context, fn) {\n    _classCallCheck(this, Executor);\n    this._observables = new Set();\n    this._cleanupCallbacks = new Set();\n    this._context = context;\n    this.fn = fn;\n    this.execute = this.execute.bind(this);\n    this.cleanup = this.cleanup.bind(this);\n    this.addCleanupCallback = this.addCleanupCallback.bind(this);\n  }\n  _createClass(Executor, [{\n    key: \"addCleanupCallback\",\n    value: function addCleanupCallback(cb) {\n      this._cleanupCallbacks.add(cb);\n    }\n  }, {\n    key: \"onCleanup\",\n    value: function onCleanup() {\n      for (var _i = 0, _arr = _toConsumableArray(this._cleanupCallbacks); _i < _arr.length; _i++) {\n        var cb = _arr[_i];\n        console.log('tocleanup: ', cb);\n        cb();\n      }\n    }\n  }, {\n    key: \"onUpdateObservables\",\n    value: function onUpdateObservables() {\n      for (var _i2 = 0, _arr2 = _toConsumableArray(this._observables); _i2 < _arr2.length; _i2++) {\n        var observable = _arr2[_i2];\n        observable[\"delete\"](this);\n      }\n      this._observables.clear();\n    }\n  }, {\n    key: \"cleanup\",\n    value: function cleanup() {\n      this.onUpdateObservables();\n      this.onCleanup();\n    }\n  }, {\n    key: \"execute\",\n    value: function execute() {\n      if (!this.fn) {\n        // if(process.env === 'development') {\n        // throw new Error('Executor.execute fn is not defined');\n        // }\n        return;\n      }\n      this.executeFn(this.fn);\n    }\n  }, {\n    key: \"executeFn\",\n    value: function executeFn(fn) {\n      try {\n        // мы должны определять и переопределять подписки во время выполенения\n        /**\n                  * @example\n                  * например у нас есть такой код:\n                  * const [flag, setFlag] = createSignal(false);\n                  * const [val1, setVal1] = createSignal(1);\n                  * const [val2, setVal2] = createSignal(2);\n                  * \n                  * createEffect(() => flag ? val1() : val2());\n                  * первый раз он выведет однерку, но что если:\n                  * \n                  * setFlag(true);\n                  * \n                  * эффект должен очистить предыдущие полписки перед началом выполнения, \n                  * для того, чтобы в случае чего подписаться на новые сигналы.\n                  * \n                  * в данном случае в this.cleanup() мы отписываемся от (всех) val1 подписчика\n                  * и подписываемся на нового val2();\n                  * \n                  * и при обновлении setVal1(2) эффект уже не должен отрабатывать, так как нам нет смысла\n                  * больше за ним следить\n                  * \n                  * \"МИНИМАЛЬНЫЙ СОГЛАСОВАННЫЙ НАБОР ПОДПИСОК МОЖЕТ БЫТЬ ДОСТИГНУТ ТОЛЬКО В ТОМ СЛУЧАЕ,\n                  * ЕСЛИ ОНИ ОПРЕДЕЛЕНЫ ВО ВРЕМЯ ВЫПОЛНЕНИЯ\"\n                  */\n        this.cleanup();\n        this._context.push(this);\n        fn();\n      } catch (error) {\n        // if(process.env === 'development') {\n        // throw new Error('Executor.executeFn fn throws an error: ', error);\n        // }\n        console.error(error);\n      } finally {\n        console.log('FINALLY');\n        this._context.pop();\n      }\n    }\n  }]);\n  return Executor;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Executor);\n\n//# sourceURL=webpack://framework/./src/signals/Executor.js?");

/***/ }),

/***/ "./src/signals/signals.js":
/*!********************************!*\
  !*** ./src/signals/signals.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createEffect\": () => (/* binding */ createEffect),\n/* harmony export */   \"createSignal\": () => (/* binding */ createSignal),\n/* harmony export */   \"onCleanup\": () => (/* binding */ onCleanup)\n/* harmony export */ });\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index */ \"./src/utils/index.js\");\n/* harmony import */ var _Executor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Executor */ \"./src/signals/Executor.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\nvar context = [];\nfunction getRunnningExecutor() {\n  return context[context.length - 1];\n}\nfunction createSignal(initialValue) {\n  var state = initialValue;\n  var _observers = new Set();\n  function getValue() {\n    var contextExecutor = getRunnningExecutor();\n    console.log({\n      state: state,\n      contextExecutor: contextExecutor\n    });\n    if (contextExecutor) {\n      _observers.add(contextExecutor);\n      contextExecutor._observables.add(_observers);\n    }\n    return state;\n  }\n  function setValue(nextVal) {\n    if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.isFunction)(nextVal)) {\n      var result = nextVal(state);\n      state = result;\n    }\n    if (!(0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.isFunction)(nextVal)) {\n      state = nextVal;\n    }\n    if (_observers.size > 0) {\n      // convert set to array to iterate it\n      for (var _i = 0, _arr = _toConsumableArray(_observers); _i < _arr.length; _i++) {\n        var observer = _arr[_i];\n        observer.execute();\n      }\n    }\n  }\n\n  // mark function's as signals\n  getValue.$signal = 'get';\n  setValue.$signal = 'set';\n  return [getValue, setValue];\n}\nfunction createEffect(fn) {\n  var executor = new _Executor__WEBPACK_IMPORTED_MODULE_1__[\"default\"](context, fn);\n  executor.execute();\n}\nfunction onCleanup(fn) {\n  var executor = getRunnningExecutor();\n  executor.addCleanupCallback(fn);\n}\n\n// @TODO REALIZE BATCH UPDATES https://dev.to/ryansolid/a-hands-on-introduction-to-fine-grained-reactivity-3ndf#:~:text=The%20easiest%20way%20to%20demonstrate%20how%20this%20works%20is%20to%20apply%202%20changes\n\n// export function subscribe(fn) {\n//     createEffect(fn);\n// }\n\n//# sourceURL=webpack://framework/./src/signals/signals.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isFunction\": () => (/* binding */ isFunction),\n/* harmony export */   \"isObject\": () => (/* binding */ isObject)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction isObject(el) {\n  return _typeof(el) === 'object' && !Array.isArray(el) && el !== null;\n}\nfunction isFunction(el) {\n  return typeof el === 'function';\n}\n\n//# sourceURL=webpack://framework/./src/utils/index.js?");

/***/ }),

/***/ "./tests/index.js":
/*!************************!*\
  !*** ./tests/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jsx_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsx/jsx */ \"./tests/jsx/jsx.js\");\n\n\n//# sourceURL=webpack://framework/./tests/index.js?");

/***/ }),

/***/ "./tests/jsx/jsx.js":
/*!**************************!*\
  !*** ./tests/jsx/jsx.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_hyperscript_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/hyperscript/constants */ \"./src/hyperscript/constants.js\");\n/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/index */ \"./src/index.js\");\n/* harmony import */ var _src_signals_signals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/signals/signals */ \"./src/signals/signals.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n// const el = framework.h('div', {id: '123', onClick: () => console.log(\"123\")}, \n//     framework.h('p', {className: 'p-class'}, framework.h(TEXT_NODE, {\n//         nodeValue: value(),\n//     }))\n// )\n\n// /** @jsx framework.h */\n// function FunctionComponent({hello}, root) {\n// \tconsole.log({hello});\n\n// \tconst [count, setCount] = createSignal(0);\n\n// setInterval(() => setCount((prev) => prev + 1), 1000);\n\n// const view = () => {\n// \treturn framework.h('div', {}, \n// \t\tframework.h('TEXT_NODE', {nodeValue: count()}));\n// };\n\n// createEffect(() => root.append(view()));\n// }\n\n/** @jsx framework.h */\n\nvar Component = function Component() {\n  var _createSignal = (0,_src_signals_signals__WEBPACK_IMPORTED_MODULE_2__.createSignal)([]),\n    _createSignal2 = _slicedToArray(_createSignal, 2),\n    value = _createSignal2[0],\n    setValue = _createSignal2[1];\n  (0,_src_signals_signals__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {\n    fetch('https://jsonplaceholder.typicode.com/todos/1').then(function (response) {\n      return response.json();\n    }).then(function (json) {\n      setValue([].concat(_toConsumableArray(value()), [json]));\n    });\n  });\n\n  // try to implement query users and easy view\n\n  var titleCard = function titleCard(user) {\n    return _src_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h(\"h1\", null, user.title);\n  };\n  (0,_src_signals_signals__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {\n    console.log('check log: ', value());\n  });\n  var renderUsers = function renderUsers() {\n    return value().length > 0 ? _src_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h(\"div\", null, value().map(titleCard)) : 'no users found';\n  };\n  return _src_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h(\"div\", null, _src_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h(\"h1\", {\n    className: \"hello\"\n  }, \"Hello world 123\"), _src_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h(\"p\", {\n    style: \"color: red\"\n  }, \"It's very simple counter frameword signals example\"), _src_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h(\"div\", {\n    id: \"map\"\n  }, \"Count: \", renderUsers));\n};\nwindow.addEventListener('DOMContentLoaded', function () {\n  var root = document.querySelector('#root');\n  console.log({\n    framework: _src_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    root: root\n  });\n  _src_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render(root, _src_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h(Component, null));\n  // createEffect(() => {\n  // const interval = setInterval(() => console.log('will clear every time: ', value()), 1000);\n  // console.log('new effect val: ', interval, 'value : ', value());\n  // onCleanup(() => clearInterval(interval));\n  // });\n  // createEffect(() => {\n  // \tconsole.log('effect');\n  // framework.render(root, framework.h('div', {id: '123', onClick: () => console.log('123')}, \n  // \tframework.h('p', {className: 'p-class'}, framework.h(TEXT_NODE, {\n  // \t\tnodeValue: value,\n  // \t})),\n  // \tframework.h('input', {onInput: (e) => setValue(e.target.value), value: value})\n  // ));\n\n  // });\n  // setInterval(() => setValue((val) => val + 1), 5000);\n  // framework.render(root, framework.h(FunctionComponent, {hello: 'Hello world!'}));\n});\n\n//# sourceURL=webpack://framework/./tests/jsx/jsx.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./tests/index.js");
/******/ 	
/******/ })()
;