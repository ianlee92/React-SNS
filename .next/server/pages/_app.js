(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");


var _jsxFileName = "C:\\Users\\taehun\\Documents\\React-SNS\\pages\\_app.js";
// _app.js는 pages들의 공통 부분






const App = ({
  Component
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "\uD30C\uB791\uC0C8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

App.propTypes = {
  Component: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().elementType.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_5__.default.withRedux(App));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // // action creator (액션 생성 함수)
// const changeNickname = (data) => {
//     return {
//         type: 'CHANGE_NICKNAME',
//         data, // 동적
//     }
// }

const rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
        // SSR을 위해서 사용
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__.default,
  post: _post__WEBPACK_IMPORTED_MODULE_3__.default
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "addPost": function() { return /* binding */ addPost; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '이안'
    },
    content: '첫 게시글 #해시태그 #소통',
    Images: [{
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'
    }],
    Comments: [{
      User: {
        nickname: 'ian'
      },
      content: '우와 신기'
    }, {
      User: {
        nickname: 'yoono'
      },
      content: '퍼가요~'
    }]
  }],
  imagePaths: [],
  postAdded: false
};
const ADD_POST = 'ADD_POST';
const addPost = {
  type: ADD_POST
};
const dummyPost = {
  id: 2,
  content: '더미데이터',
  User: {
    id: 1,
    nickname: 'hyeok'
  },
  Images: [],
  Comments: []
}; // (이전상태, 액션) => 다음상태

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: [dummyPost, ...state.mainPosts],
          postAdded: true
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "loginRequestAction": function() { return /* binding */ loginRequestAction; },
/* harmony export */   "logoutRequestAction": function() { return /* binding */ logoutRequestAction; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  isLoggingIn: false,
  // 로그인 시도중 true면 로딩창을띄움
  isLoggedIn: false,
  isLoggingOut: false,
  // 로그아웃 시도중
  me: null,
  signUpData: {},
  loginData: {}
};
const loginRequestAction = data => {
  return {
    type: 'LOG_IN_REQUEST',
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: 'LOG_OUT_REQUEST'
  };
}; // (이전상태, 액션) => 다음상태

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_REQUEST':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingIn: true
      });

    case 'LOG_IN_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingIn: false,
        isLoggedIn: true,
        me: _objectSpread(_objectSpread({}, action.data), {}, {
          nickname: 'ianlee'
        })
      });

    case 'LOG_IN_FAILURE':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingIn: false,
        isLoggedIn: false
      });

    case 'LOG_OUT_REQUEST':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggeingOut: true
      });

    case 'LOG_OUT_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggeingOut: false,
        isLoggedIn: false,
        me: null
      });

    case 'LOG_OUT_FAILURE':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggeingOut: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rootSaga; }
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./sagas/user.js");



function* rootSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(_post__WEBPACK_IMPORTED_MODULE_1__.default), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(_user__WEBPACK_IMPORTED_MODULE_2__.default)]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ postSaga; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);



function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/post', data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.delay)(1000);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: 'ADD_POST_SUCCESS'
    });
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
      type: 'ADD_POST_FAILURE',
      data: err.response.data
    });
  }
}

function* watchAddPost() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)('ADD_POST_REQUEST', addPost);
}

function* postSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchAddPost)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ userSaga; }
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/login', data);
}

function* logIn(action) {
  // *붙이면 generator
  try {
    // const result = yield call(logInAPI);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: 'LOG_IN_SUCCESS',
      data: action.data
    });
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: 'LOG_IN_FAILURE',
      data: err.response.data
    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/logout');
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: 'LOG_OUT_SUCCESS'
    });
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: 'LOG_OUT_FAILURE',
      data: err.response.data
    });
  }
}

function* watchLogIn() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)('LOG_OUT_REQUEST', logOut);
}

function* userSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([// all은 동시에 실행
  (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogIn), // fork는 함수 실행
  (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogOut)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const configureStore = () => {
  // enhancer는 리덕스의 기능을 확장시켜준다
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware];
  const enhancer =  false ? 0 // 배포용일 경우 devtool연결안함
  : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middlewares)); // 개발때는 devtool연결

  const store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_4__.default, enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__.default);
  return store; // store는 state + reducer
};

const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga");;

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga/effects");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zbnMtZnJvbnQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3JlYWN0LXNucy1mcm9udC8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0LXNucy1mcm9udC8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtc25zLWZyb250Ly4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1zbnMtZnJvbnQvLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1zbnMtZnJvbnQvLi9zYWdhcy9wb3N0LmpzIiwid2VicGFjazovL3JlYWN0LXNucy1mcm9udC8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtc25zLWZyb250Ly4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtc25zLWZyb250L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9yZWFjdC1zbnMtZnJvbnQvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9yZWFjdC1zbnMtZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9yZWFjdC1zbnMtZnJvbnQvZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vcmVhY3Qtc25zLWZyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9yZWFjdC1zbnMtZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9yZWFjdC1zbnMtZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL3JlYWN0LXNucy1mcm9udC9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovL3JlYWN0LXNucy1mcm9udC9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly9yZWFjdC1zbnMtZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwicG9zdEFkZGVkIiwiQUREX1BPU1QiLCJhZGRQb3N0IiwiZHVtbXlQb3N0IiwicmVkdWNlciIsImlzTG9nZ2luZ0luIiwiaXNMb2dnZWRJbiIsImlzTG9nZ2luZ091dCIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiaXNMb2dnZWluZ091dCIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJhZGRQb3N0QVBJIiwiYXhpb3MiLCJkZWxheSIsInB1dCIsImVyciIsInJlc3BvbnNlIiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFw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Z2Vz65Ok7J2YIOqzte2GtSDrtoDrtoRcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPu2MjOuekeyDiDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5BcHAucHJvcFR5cGVzID0ge1xyXG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTsiLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5cclxuLy8gLy8gYWN0aW9uIGNyZWF0b3IgKOyVoeyFmCDsg53shLEg7ZWo7IiYKVxyXG4vLyBjb25zdCBjaGFuZ2VOaWNrbmFtZSA9IChkYXRhKSA9PiB7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHR5cGU6ICdDSEFOR0VfTklDS05BTUUnLFxyXG4vLyAgICAgICAgIGRhdGEsIC8vIOuPmeyggVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBIWURSQVRFOiAvLyBTU1LsnYQg7JyE7ZW07IScIOyCrOyaqVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVzZXIsXHJcbiAgICBwb3N0LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFt7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmlja25hbWU6ICfsnbTslYgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogJ+yyqyDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7IaM7Ya1JyxcclxuICAgICAgICBJbWFnZXM6IFt7XHJcbiAgICAgICAgICBzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNicsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnJyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5OTgvcm5fdmlld19CTjAwMTk5OC5qcGcnLFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ2lhbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfsmrDsmYAg7Iug6riwJyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAneW9vbm8nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiAn7Y286rCA7JqUficsXHJcbiAgICAgICAgfV1cclxuICAgIH1dLFxyXG4gICAgaW1hZ2VQYXRoczogW10sXHJcbiAgICBwb3N0QWRkZWQ6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgQUREX1BPU1QgPSAnQUREX1BPU1QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSB7XHJcbiAgICB0eXBlOiBBRERfUE9TVCxcclxufTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IHtcclxuICAgIGlkOiAyLFxyXG4gICAgY29udGVudDogJ+uNlOuvuOuNsOydtO2EsCcsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICdoeWVvaycsXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzOiBbXSxcclxuICAgIENvbW1lbnRzOiBbXSxcclxufTtcclxuXHJcbi8vICjsnbTsoITsg4Htg5wsIOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1Q6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgcG9zdEFkZGVkOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBpc0xvZ2dpbmdJbjogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJEgdHJ1ZeuptCDroZzrlKnssL3snYTrnYTsm4BcclxuICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgaXNMb2dnaW5nT3V0OiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gICAgbWU6IG51bGwsXHJcbiAgICBzaWduVXBEYXRhOiB7fSxcclxuICAgIGxvZ2luRGF0YToge30sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAnTE9HX0lOX1JFUVVFU1QnLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAnTE9HX09VVF9SRVFVRVNUJyxcclxuICAgIH1cclxufVxyXG5cclxuLy8gKOydtOyghOyDge2DnCwg7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnTE9HX0lOX1JFUVVFU1QnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdJbjogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdMT0dfSU5fU1VDQ0VTUyc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ0luOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZTogeyAuLi5hY3Rpb24uZGF0YSwgbmlja25hbWU6ICdpYW5sZWUnIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnTE9HX0lOX0ZBSUxVUkUnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdMT0dfT1VUX1JFUVVFU1QnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlaW5nT3V0OiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0xPR19PVVRfU1VDQ0VTUyc6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGlzTG9nZ2VpbmdPdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgICAgICAgbWU6IG51bGwsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdMT0dfT1VUX0ZBSUxVUkUnOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBpc0xvZ2dlaW5nT3V0OiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbIFxyXG4gICAgICAgIGZvcmsocG9zdFNhZ2EpLCBcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgZGVsYXksIHB1dCwgdGFrZUxhdGVzdCwgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ0FERF9QT1NUX1NVQ0NFU1MnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ0FERF9QT1NUX0ZBSUxVUkUnLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoJ0FERF9QT1NUX1JFUVVFU1QnLCBhZGRQb3N0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICBdKTtcclxufSIsImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCBkZWxheSwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHsgLy8gKuu2meydtOuptCBnZW5lcmF0b3JcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ0xPR19JTl9TVUNDRVNTJyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnTE9HX0lOX0ZBSUxVUkUnLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0JylcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMT0dfT1VUX1NVQ0NFU1MnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ0xPR19PVVRfRkFJTFVSRScsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdCgnTE9HX0lOX1JFUVVFU1QnLCBsb2dJbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoJ0xPR19PVVRfUkVRVUVTVCcsIGxvZ091dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbIC8vIGFsbOydgCDrj5nsi5zsl5Ag7Iuk7ZaJXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSwgLy8gZm9ya+uKlCDtlajsiJgg7Iuk7ZaJXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICBdKVxyXG59IiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbXBvc2UsIGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHsgLy8gZW5oYW5jZXLripQg66as642V7Iqk7J2YIOq4sOuKpeydhCDtmZXsnqXsi5zsvJzspIDri6RcclxuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTtcclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKSAvLyDrsLDtj6zsmqnsnbwg6rK97JqwIGRldnRvb2zsl7DqsrDslYjtlahcclxuICAgICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSkgLy8g6rCc67Cc65WM64qUIGRldnRvb2zsl7DqsrBcclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gICAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gICAgcmV0dXJuIHN0b3JlOyAvLyBzdG9yZeuKlCBzdGF0ZSArIHJlZHVjZXJcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7ZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==