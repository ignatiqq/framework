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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TEXT_NODE\": () => (/* binding */ TEXT_NODE),\n/* harmony export */   \"VALID_HYPERSCRIPT_TYPES\": () => (/* binding */ VALID_HYPERSCRIPT_TYPES)\n/* harmony export */ });\nvar TEXT_NODE = 'TEXT_NODE';\nvar VALID_HYPERSCRIPT_TYPES = ['div', 'p', 'section', 'ul', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'footer', 'header'];\n\n//# sourceURL=webpack://framework/./src/hyperscript/constants.js?");

/***/ }),

/***/ "./src/hyperscript/h.js":
/*!******************************!*\
  !*** ./src/hyperscript/h.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"h\": () => (/* binding */ h),\n/* harmony export */   \"textNode\": () => (/* binding */ textNode)\n/* harmony export */ });\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ \"./src/utils/index.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ \"./src/hyperscript/constants.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\nfunction h(type, props) {\n  validateTagType(type);\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n  return {\n    type: type,\n    props: _objectSpread(_objectSpread({}, props), {}, {\n      children: children.map(function (child) {\n        return (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(child) ? child : textNode(child);\n      })\n    })\n  };\n}\nfunction validateTagType(type) {\n  if (!_constants_js__WEBPACK_IMPORTED_MODULE_1__.VALID_HYPERSCRIPT_TYPES.includes(type) && !(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.isFunction)(type)) {\n    throw new Error('Invalid hyperscript tag type');\n  }\n}\nfunction textNode(text) {\n  return {\n    type: _constants_js__WEBPACK_IMPORTED_MODULE_1__.TEXT_NODE,\n    props: {\n      nodeValue: text\n    }\n  };\n}\n\n//# sourceURL=webpack://framework/./src/hyperscript/h.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _hyperscript_h_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hyperscript/h.js */ \"./src/hyperscript/h.js\");\n/* harmony import */ var _render_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/render.js */ \"./src/render/render.js\");\n\n\n\n/** @jsx h */\nfunction FunctionComponent(hello) {\n  console.log(hello);\n  return (0,_hyperscript_h_js__WEBPACK_IMPORTED_MODULE_0__.h)(\"div\", null, \"Hello world\");\n}\nconsole.log((0,_hyperscript_h_js__WEBPACK_IMPORTED_MODULE_0__.h)(FunctionComponent, {\n  hello: \"world\"\n}));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  h: _hyperscript_h_js__WEBPACK_IMPORTED_MODULE_0__.h,\n  render: _render_render_js__WEBPACK_IMPORTED_MODULE_1__.render\n});\n\n//# sourceURL=webpack://framework/./src/index.js?");

/***/ }),

/***/ "./src/render/FC.js":
/*!**************************!*\
  !*** ./src/render/FC.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFunctionalComponent\": () => (/* binding */ createFunctionalComponent)\n/* harmony export */ });\nfunction createFunctionalComponent(fc) {\n  console.log({\n    fc: fc\n  }, fc.type(fc.props));\n  return fc.type(fc.props);\n}\n\n//# sourceURL=webpack://framework/./src/render/FC.js?");

/***/ }),

/***/ "./src/render/property.js":
/*!********************************!*\
  !*** ./src/render/property.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"property\": () => (/* binding */ property)\n/* harmony export */ });\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ \"./src/utils/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction property(element, name, property) {\n  var isCss = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.isFunction)(property)) {\n    handleEvent(name, element, property);\n  } else if (isAttribute(name)) {\n    element.setAttribute(name, property);\n  } else if (isCss) {\n    element.style.setProperty(name, value);\n  } else if (isStyle(name)) {\n    if (typeof property === 'string') {\n      element.style.cssText = value;\n    }\n    if ((typeof value === \"undefined\" ? \"undefined\" : _typeof(value)) === 'object') {\n      for (var _name in value) {\n        property(element, _name, value[_name], true);\n      }\n    }\n  } else if (isClassProperty(name)) {\n    element.classList.add(property);\n  } else {\n    element[name] = property;\n  }\n}\nfunction handleEvent(name, element, fn) {\n  name = name.slice(2).toLowerCase();\n  element.addEventListener(name, fn);\n}\nfunction isAttribute(name) {\n  return name.startsWith('data-') || name.startsWith('aria');\n}\nfunction isStyle(name) {\n  return name === 'style';\n}\nfunction isClassProperty(name) {\n  return name.toLowerCase() === 'classname';\n}\n\n//# sourceURL=webpack://framework/./src/render/property.js?");

/***/ }),

/***/ "./src/render/render.js":
/*!******************************!*\
  !*** ./src/render/render.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _hyperscript_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hyperscript/constants.js */ \"./src/hyperscript/constants.js\");\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index.js */ \"./src/utils/index.js\");\n/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property.js */ \"./src/render/property.js\");\n/* harmony import */ var _FC_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FC.js */ \"./src/render/FC.js\");\n\n\n\n\nfunction render(root, h) {\n  if (!root) {\n    if (process.env === 'development') throw new Error('Root is not valid selector');\n    return null;\n  }\n  console.log({\n    h: h\n  }, h.type(h.props));\n  var element = h.type === _hyperscript_constants_js__WEBPACK_IMPORTED_MODULE_0__.TEXT_NODE ? document.createTextNode('') : (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(h.type) ? render((0,_FC_js__WEBPACK_IMPORTED_MODULE_3__.createFunctionalComponent)(h)) : document.createElement(h.type);\n  if (h.props) {\n    var propsWithoutChildren = Object.keys(h.props).filter(function (prop) {\n      return prop !== 'children';\n    });\n    propsWithoutChildren.forEach(function (name) {\n      (0,_property_js__WEBPACK_IMPORTED_MODULE_2__.property)(element, name, h.props[name]);\n    });\n  }\n  if (h.props.children.length) {\n    h.props.children.forEach(function (child) {\n      render(element, child);\n    });\n    root.append(element);\n  } else {\n    root.append(element);\n  }\n}\n\n//# sourceURL=webpack://framework/./src/render/render.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isFunction\": () => (/* binding */ isFunction),\n/* harmony export */   \"isObject\": () => (/* binding */ isObject)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction isObject(el) {\n  return _typeof(el) === 'object' && !Array.isArray(el) && el !== null;\n}\nfunction isFunction(el) {\n  return typeof el === 'function';\n}\n\n//# sourceURL=webpack://framework/./src/utils/index.js?");

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