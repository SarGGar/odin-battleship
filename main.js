/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `table {\n    border-collapse: collapse;\n    border: 2px solid rgb(140 140 140);\n    font-family: sans-serif;\n    font-size: 0.8rem;\n    letter-spacing: 1px;\n  }\n\n  th,\ntd {\n  border: 1px solid rgb(160 160 160);\n  width: 30px;\n  height: 30px;\n  text-align: center;\n}\n\n.boards {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  align-items: center;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/domcontrol.js":
/*!***************************!*\
  !*** ./src/domcontrol.js ***!
  \***************************/
/***/ ((module) => {

eval("function domControl() {\n    const reset = (playerName) => {\n        const tds = document.querySelectorAll(`.${playerName} td`)\n        for (let td of tds) {\n            td.removeAttribute(\"style\")\n            td.innerHTML = ''\n        }\n    }\n\n    const getCell = (playerName, cell) => {\n        const rows = document.querySelectorAll(`.${playerName} tr`)\n        const cellRow = rows.item(cell.r+1)\n        const td = cellRow.children[cell.c+1]\n        return td\n    }\n\n    const updateBoard = (playerName, nodes, type) => {\n        switch (type) {\n            case 'new-ship':\n                for (let node of nodes) {\n                    updateCellWithX(playerName, node)\n                }\n                break;\n            case 'new-hit':\n                for (let node of nodes) {\n                    updateCellBackgroundColor(playerName, node, 'red')\n                }\n                break;\n            case 'new-miss':\n                for (let node of nodes) {\n                    updateCellBackgroundColor(playerName, node, 'gray')\n                }\n                break;\n            case 'new-sink':\n                for (let node of nodes) {\n                    updateCellBackgroundColor(playerName, node, 'black')\n                }\n                break;\n        }\n\n    }\n\n    const updateCellBackgroundColor = (playerName, cell, color) => {\n        const td = getCell(playerName, cell)\n        td.style.background = color;\n    }\n\n    const updateCellWithX = (playerName, cell) => {\n        const td = getCell(playerName, cell)\n        td.innerHTML = '&#10060'\n\n    }\n\n    return {reset, updateBoard}\n}\n\n// function updateCellBackgroundColor(playerName, cell, color) {\n\n// }\n\n// function updateCellWithX(playerName, cell) {\n\n// }\n\n// function getCell(playerName, cell) {\n//     const table = document.querySelector(`#${playerName}`)\n//     const rows = table.children\n//     const cellRow = rows[cell[0]]\n//     const cell = cellRow.children[cell[1]]\n//     return cell\n// }\n\n// function updateBoard(playerName, nodes, type) {\n    // switch (type) {\n    //     case 'new-ship':\n    //         for (let node of nodes) {\n    //             updateCellWithX(playerName, node)\n    //         }\n    //         break;\n    //     case 'new-hit':\n    //         for (let node of nodes) {\n    //             updateCellBackgroundColor(playerName, node, 'red')\n    //         }\n    //         break;\n    //     case 'new-miss':\n    //         for (let node of nodes) {\n    //             updateCellBackgroundColor(playerName, node, 'gray')\n    //         }\n    //         break;\n    //     case 'new-sink':\n    //         for (let node of nodes) {\n    //             updateCellBackgroundColor(playerName, node, 'black')\n    //         }\n    //         break;\n    // }\n// }\n\nmodule.exports = domControl\n\n//# sourceURL=webpack://battleship/./src/domcontrol.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\")\n\nfunction Gameboard () {\n    let numberUnsunk = 0\n    let occupiedCoords = {}\n    let missedShots = {}\n    let hitShots = {}\n\n    const reset = () => {\n        numberUnsunk = 0\n        occupiedCoords = {}\n        missedShots = {}\n        hitShots = {}\n    }\n\n    const generateRandomBoard = (shipLengthArray) => {\n        let allShips = []\n        for (let len of shipLengthArray) {\n            let ship = []\n            let buildingShip = true\n            while (buildingShip) {\n                let row_i = Math.floor(Math.random() * 10)\n                let col_i = Math.floor(Math.random() * 10)\n                let multiplier = (col_i%2 ===0) ? 1 : -1\n                let direction = (row_i%2 ===0) ? [0, 1]: [1, 0]\n                ship = [{r:row_i, c:col_i}]\n                for (let i=1; i< len; i++) {\n                    let row_next = row_i+i*direction[0]*multiplier\n                    let col_next = col_i+i*direction[1]*multiplier\n                    ship.push({r:row_next, c:col_next})\n                }\n                let builds = []\n                for (let coord of ship) {\n                    if (occupiedCoords.hasOwnProperty(`(${coord.r},${coord.c})`) ||\n                        coord.r< 0 || coord.c< 0 || coord.r>9 || coord.c> 9) {\n                            builds.push(true)\n                        }\n                    else {\n                        builds.push(false)\n                    }\n                }\n                if (builds.every(v => v === false)) {\n                    buildingShip = false\n                }\n            }\n            placeShip(ship)\n            allShips.push(ship)\n        }\n        return allShips\n    }\n    \n    const getNumberUnsunk = () => numberUnsunk\n\n    const getMissedShots = () => missedShots\n\n    const getHitShots = () => hitShots\n\n    const placeShip = (coordList) => {\n        const newShip = Ship(coordList.length)\n        for (const coord of coordList) {\n            occupiedCoords[`(${coord.r},${coord.c})`] = newShip\n        }\n        numberUnsunk++\n    }\n\n    const receiveAttack = (row, col) => {\n        let msg = ''\n        let action = 0\n        if (occupiedCoords[`(${row},${col})`]) {\n            const attackedShip = occupiedCoords[`(${row},${col})`]\n            attackedShip.hit()\n            let status = attackedShip.isSunk()\n            if (status) {\n                msg = 'Hit & Sunk!'\n                action = 2\n                numberUnsunk--\n            } else {\n                msg = `Hit ship of length ${attackedShip.length}!`\n                action = 1\n            }\n            if (hitShots[`${row}`]) {\n                hitShots[`${row}`].push(col)\n            } else {\n                hitShots[`${row}`] = [col]\n            }\n        } else {\n            if (missedShots[`${row}`]) {\n                missedShots[`${row}`].push(col)\n            } else {\n                missedShots[`${row}`] = [col]\n            }\n            msg = 'Miss!'\n            action = 0\n        }\n        return {msg, action}\n    }\n    \n    return {generateRandomBoard, reset, getNumberUnsunk, getMissedShots, getHitShots, placeShip, receiveAttack}\n}\n\nmodule.exports = Gameboard\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\nconst Player = __webpack_require__(/*! ./player */ \"./src/player.js\")\nconst DOMControl = __webpack_require__(/*! ./domcontrol */ \"./src/domcontrol.js\")\n\n\nconst shipCoords = [\n    [{r:0, c:0}, {r:0, c:1}],\n    [{r:2, c:3}, {r:3, c:3}, {r:4, c:3}],\n    [{r:5, c:2}, {r:6, c: 2}],\n    [{r:4, c:7}, {r:5, c:7}, {r:6, c:7}, {r:7, c:7}],\n    [{r:9, c:1}, {r:9, c:2}, {r:9, c:3}, {r:9, c:4}, {r:9, c:5}]\n]\n\nconst player1 = Player()\nconst player2 = Player()\n\nlet currentTurn = 'real-player'\n\nconst control = DOMControl()\n\nlet shipCoordsForPlayer2 = player2.generateRandomBoard([2, 2, 3, 4, 5])\n// console.log(shipCoordsForPlayer2)\n// for (const ship of shipCoordsForPlayer2) {\n//     control.updateBoard('computer-player', ship, 'new-ship')\n// }\n\n// for (const ship of shipCoords) {\n//     player1.placeShip(ship)\n//     control.updateBoard('real-player', ship, 'new-ship')\n// }\n\nconst realPlayerBoard = document.querySelector('.real-player')\nconst computerPlayerBoard = document.querySelector('.computer-player')\n\ncomputerPlayerBoard.addEventListener('click', (e) => {\n    if (gameOver===true) return\n    if (currentTurn !== 'real-player') return\n    let col = e.target.cellIndex-1\n    let row = e.target.parentElement.rowIndex-1\n    if (col < 0 || row < 0) return\n    let result = player2.receiveAttack(row, col)\n    switch (result.action) {\n        case 0:\n            control.updateBoard('computer-player', [{r:row, c:col}], 'new-miss')\n            break \n        case 1:\n            control.updateBoard('computer-player', [{r:row, c:col}], 'new-hit')\n            break\n        case 2:\n            control.updateBoard('computer-player', [{r:row, c:col}], 'new-hit')\n            break\n    }\n    currentTurn = 'computer-player'\n    banner.textContent = ''\n\n    while (currentTurn === 'computer-player'){\n        generateComputerMove()\n    }\n})\n\nfunction generateComputerMove() {\n    if (gameOver===true) return\n    while (currentTurn === 'computer-player') {\n        let row = Math.floor(Math.random() * 10)\n        let col = Math.floor(Math.random() * 10)\n        \n        if (nextMoves.length !== 0) {\n            row = nextMoves[0][0]\n            col = nextMoves[0][1]\n            nextMoves.shift()\n        }\n\n        if (col < 0 || row < 0) {\n            if (shipIdentifiedMode) {\n                iter++\n            }\n            return\n        } \n        if (col > 9 || row > 9 ) {\n            if (shipIdentifiedMode) {\n                iter++\n            }\n            \n            return\n        }\n\n        let missedShots = player1.getMissedShots()\n        if (Object.keys(missedShots).length !== 0  && `${row}` in missedShots) {\n            if (missedShots[`${row}`].includes(col)) {\n                return\n            }\n        }\n\n        let hitShots = player1.getHitShots()\n        if (Object.keys(hitShots).length !== 0  && `${row}` in hitShots) {\n            if (hitShots[`${row}`].includes(col)) {\n                return\n            }\n        }\n\n        let result = player1.receiveAttack(row, col)\n        switch (result.action) {\n            case 0:\n                control.updateBoard('real-player', [{r:row, c:col}], 'new-miss')\n                break \n            case 1:\n                control.updateBoard('real-player', [{r:row, c:col}], 'new-hit')\n                shipIdentifiedMode = true\n                break\n            case 2:\n                control.updateBoard('real-player', [{r:row, c:col}], 'new-hit')\n                shipIdentifiedMode = false\n                iter = 0\n                nextMoves = []\n        }\n        currentTurn = 'real-player'\n        if (shipIdentifiedMode) {\n            optimizeNextMoves(result.action, row, col)\n        }\n    }\n    checkGameOver()\n}\n\nfunction optimizeNextMoves(lastMoveAction, lastMoveRow, lastMoveCol) {\n    if (nextMoves.length === 0) {\n        for (let dir of smartMoves) {\n            nextMoves.push([dir[0]+lastMoveRow, dir[1]+lastMoveCol])\n        }\n        nextMoves.push([smartMoves[3][0]+lastMoveRow, smartMoves[3][1]+lastMoveCol])\n    } else {\n        if (lastMoveAction === 1) {\n            nextMoves = []\n            nextMoves.push([smartMoves[iter][0]+lastMoveRow, smartMoves[iter][1]+lastMoveCol])\n            for (let i =0; i<4; i++) {\n                nextMoves.push([-1*(i+1)*smartMoves[iter][0]+lastMoveRow, -1*(i+1)*smartMoves[iter][1]+lastMoveCol])\n            }\n        } else {\n            iter++\n        }\n    }\n}\n\nconst banner = document.querySelector('.banner')\n\nfunction checkGameOver() {\n    if (player1.getNumberUnsunk()===0) {\n        gameOver = true\n        banner.textContent = 'Computer is Winner!'\n        showMissingShips()\n    }\n\n    if (player2.getNumberUnsunk()===0) {\n        gameOver = true\n        banner.textContent = 'You are Winner!'\n    }\n}\n\nfunction showMissingShips () {\n    console.log(shipCoordsForPlayer2)\n    for (const ship of shipCoordsForPlayer2) {\n        control.updateBoard('computer-player', ship, 'new-ship')    \n    }\n\n}\n\nconst resetButton = document.querySelector('.new-game')\nresetButton.addEventListener('click', resetGame)\n\nfunction resetGame() {\n    banner.textContent = ''\n    player1.reset()\n    player2.reset()\n\n    control.reset('real-player')\n    control.reset('computer-player')\n\n    shipCoordsForPlayer2 = player2.generateRandomBoard([2, 2, 3, 4, 5])\n    userBuildBoard([2, 2, 3, 4, 5])\n    // for (const ship of shipCoords) {\n    //     player1.placeShip(ship)\n    //     control.updateBoard('real-player', ship, 'new-ship')\n    // }\n\n    currentTurn = 'real-player'\n    gameOver = false\n}\n\nlet gameOver = false\n\nlet iter = 0\n\nlet nextMoves = []\n\nlet shipIdentifiedMode = false\n\nconst smartMoves = [\n    [0, 1],\n    [0, -1],\n    [1, 0],\n    [-1, 0]\n]\n\nasync function userBuildBoard(shipLengthArray) {\n    realPlayerBoard.addEventListener('click', (e) => {\n\n    })\n\n    let allShips = []\n    for (let length of shipLengthArray) {\n        let ship = []\n        for (let i=0; i<length;i++) {\n            banner.textContent = `Select Cell ${i+1} of ${length} for this ship`\n            let cell = await waitForUserSelection()\n            //assume all valid for now\n            ship.push(cell)\n            control.updateBoard('real-player', ship, 'new-ship')\n        }\n        allShips.push(ship)\n        player1.placeShip(ship)\n        control.updateBoard('real-player', ship, 'new-ship')\n    }\n    banner.textContent = 'Game on! You have first move..'\n}\n\n\nfunction waitForUserSelection() {\n    return new Promise((resolve) => {\n        const eventListener = (e) => {\n            let col = e.target.cellIndex-1\n            let row = e.target.parentElement.rowIndex-1\n\n            realPlayerBoard.removeEventListener('click', eventListener)\n\n            resolve({r:row, c:col})\n\n        }\n\n        realPlayerBoard.addEventListener('click', eventListener)\n    })\n}\n\nuserBuildBoard([2, 2, 3, 4, 5])\n\n\n\n// Computer make smart moves - DONE\n// Announcement of winner - DONE\n// show missing ships -DONE\n// Computer randomly generate ships -DONE\n// User can select placement of ships\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Gameboard = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\")\n\nfunction Player () {\n    const board = Gameboard()\n\n    return {...board}\n}\n\nmodule.exports = Player\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("function Ship (length) {\n    let hits = 0\n\n    const hit = () => hits++\n\n    const getHits = () => hits\n\n    const isSunk = () => (hits >= length) ? true: false\n\n    return {length, hit, getHits, isSunk}\n}\n\nmodule.exports = Ship\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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