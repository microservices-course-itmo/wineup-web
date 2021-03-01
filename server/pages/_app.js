module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__("XGOH");

// EXTERNAL MODULE: ./node_modules/reactjs-popup/dist/index.css
var dist = __webpack_require__("SKz9");

// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__("pNaP");
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);

// CONCATENATED MODULE: ./utils/firebaseConfig.js

const firebaseConfig = {
  apiKey: 'AIzaSyCExaLzKWdhhr_1IRPe1NIFdR7Uor12LTI',
  authDomain: 'testfire-1bc2f.firebaseapp.com',
  databaseURL: 'https://testfire-1bc2f.firebaseio.com',
  projectId: 'testfire-1bc2f',
  storageBucket: 'testfire-1bc2f.appspot.com',
  messagingSenderId: '243423113529',
  appId: '1:243423113529:web:d363f5aa8bf5ca297bf8e8'
};
const initFirebase = () => {
  if (!external_firebase_default.a.apps.length) {
    external_firebase_default.a.initializeApp(firebaseConfig);
  }
};
/* harmony default export */ var utils_firebaseConfig = ({
  initFirebase,
  firebase: external_firebase_default.a
});
// CONCATENATED MODULE: ./store/RecoilObserver/RecoilObserver.js
/*eslint-disable*/



const RecoilObserver = () => {
  const snapshot = Object(external_recoil_["useRecoilSnapshot"])();
  Object(external_react_["useEffect"])(() => {
    console.debug('The following atoms were modified:'); // eslint-disable-next-line

    for (const node of snapshot.getNodes_UNSTABLE({
      isModified: true
    })) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);
  return null;
};

/* harmony default export */ var RecoilObserver_RecoilObserver = (RecoilObserver);
// CONCATENATED MODULE: ./store/RecoilObserver/index.js

/* harmony default export */ var store_RecoilObserver = (RecoilObserver_RecoilObserver);
// CONCATENATED MODULE: ./pages/_app.js


var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





initFirebase();

const App = ({
  Component,
  pageProps
}) => {
  return __jsx(external_recoil_["RecoilRoot"], null,  false && false, __jsx(Component, _extends({}, pageProps, {
    className: "jsx-72242540" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
  })), __jsx(style_default.a, {
    id: "72242540"
  }, ["*,*::before,*::after{box-sizing:border-box;}", "ul[class],ol[class]{padding:0;}", "body,h1,h2,h3,h4,p,ul[class],ol[class],li,figure,figcaption,blockquote,dl,dd{margin:0;}", "body{font-family:'PT Sans',sans-serif;min-height:100vh;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;text-rendering:optimizeSpeed;line-height:1.5;}", "ul[class],ol[class]{list-style:none;}", "a:not([class]){-webkit-text-decoration-skip-ink:auto;text-decoration-skip-ink:auto;}", "img{max-width:100%;display:block;}", "input,button,textarea,select{font:inherit;}"]));
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (App);

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "SKz9":
/***/ (function(module, exports) {



/***/ }),

/***/ "XGOH":
/***/ (function(module, exports) {

module.exports = require("recoil");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ })

/******/ });