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
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: "\uD30C\uB791\uC0C8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined)]
}, void 0, true);

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
/* harmony export */   "generateDummyPost": function() { return /* binding */ generateDummyPost; },
/* harmony export */   "LOAD_POSTS_REQUEST": function() { return /* binding */ LOAD_POSTS_REQUEST; },
/* harmony export */   "LOAD_POSTS_SUCCESS": function() { return /* binding */ LOAD_POSTS_SUCCESS; },
/* harmony export */   "LOAD_POSTS_FAILURE": function() { return /* binding */ LOAD_POSTS_FAILURE; },
/* harmony export */   "ADD_POST_REQUEST": function() { return /* binding */ ADD_POST_REQUEST; },
/* harmony export */   "ADD_POST_SUCCESS": function() { return /* binding */ ADD_POST_SUCCESS; },
/* harmony export */   "ADD_POST_FAILURE": function() { return /* binding */ ADD_POST_FAILURE; },
/* harmony export */   "ADD_COMMENT_REQUEST": function() { return /* binding */ ADD_COMMENT_REQUEST; },
/* harmony export */   "ADD_COMMENT_SUCCESS": function() { return /* binding */ ADD_COMMENT_SUCCESS; },
/* harmony export */   "ADD_COMMENT_FAILURE": function() { return /* binding */ ADD_COMMENT_FAILURE; },
/* harmony export */   "REMOVE_POST_REQUEST": function() { return /* binding */ REMOVE_POST_REQUEST; },
/* harmony export */   "REMOVE_POST_SUCCESS": function() { return /* binding */ REMOVE_POST_SUCCESS; },
/* harmony export */   "REMOVE_POST_FAILURE": function() { return /* binding */ REMOVE_POST_FAILURE; },
/* harmony export */   "addPost": function() { return /* binding */ addPost; },
/* harmony export */   "addComment": function() { return /* binding */ addComment; }
/* harmony export */ });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
const generateDummyPost = number => Array(number).fill().map(() => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),
  User: {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),
    nickname: faker__WEBPACK_IMPORTED_MODULE_2___default().name.findName()
  },
  content: faker__WEBPACK_IMPORTED_MODULE_2___default().lorem.paragraph(),
  Images: [{
    src: faker__WEBPACK_IMPORTED_MODULE_2___default().image.image()
  }],
  Comments: [{
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default().name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default().lorem.sentence()
  }]
}));
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

const dummyPost = data => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: '이안'
  },
  Images: [],
  Comments: []
});

const dummyComment = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),
  content: data,
  User: {
    id: 1,
    nickname: '이안'
  }
}); // reducer 이전상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성은 지키면서)
// (이전상태, 액션) => 다음상태
// immer를 사용하면 불변성을 지킬 수 있다 ... 다 없어도됨 break; 써줘야됨


const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
  switch (action.type) {
    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;

    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = action.data.concat(draft.mainPosts); // concat은 기존배열에 새배열을 합쳐서 반환

      draft.hasMorePosts = draft.mainPosts.length < 50;
      break;

    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;

    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;

    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.mainPosts.unshift(dummyPost(action.data));
      break;

    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;

    case REMOVE_POST_SUCCESS:
      draft.removePostLoading = false;
      draft.removePostDone = true;
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data);
      break;

    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false;
      draft.removePostError = action.error;
      break;

    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;

    case ADD_COMMENT_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.postId);
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break; // // action.data.content, postId, userId
        // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
        // const post = { ...state.mainPosts[postIndex] };
        // post.Comments = [dummyComment(action.data.content), ...post.Comments];
        // const mainPosts = [...state.mainPosts];
        // mainPosts[postIndex] = post;
        // return {
        //   ...state,
        //   mainPosts,
        //   addCommentLoading: false,
        //   addCommentDone: true,
        // };
      }

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;

    default:
      break;
  }
});

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
/* harmony export */   "LOG_IN_REQUEST": function() { return /* binding */ LOG_IN_REQUEST; },
/* harmony export */   "LOG_IN_SUCCESS": function() { return /* binding */ LOG_IN_SUCCESS; },
/* harmony export */   "LOG_IN_FAILURE": function() { return /* binding */ LOG_IN_FAILURE; },
/* harmony export */   "LOG_OUT_REQUEST": function() { return /* binding */ LOG_OUT_REQUEST; },
/* harmony export */   "LOG_OUT_SUCCESS": function() { return /* binding */ LOG_OUT_SUCCESS; },
/* harmony export */   "LOG_OUT_FAILURE": function() { return /* binding */ LOG_OUT_FAILURE; },
/* harmony export */   "SIGN_UP_REQUEST": function() { return /* binding */ SIGN_UP_REQUEST; },
/* harmony export */   "SIGN_UP_SUCCESS": function() { return /* binding */ SIGN_UP_SUCCESS; },
/* harmony export */   "SIGN_UP_FAILURE": function() { return /* binding */ SIGN_UP_FAILURE; },
/* harmony export */   "CHANGE_NICKNAME_REQUEST": function() { return /* binding */ CHANGE_NICKNAME_REQUEST; },
/* harmony export */   "CHANGE_NICKNAME_SUCCESS": function() { return /* binding */ CHANGE_NICKNAME_SUCCESS; },
/* harmony export */   "CHANGE_NICKNAME_FAILURE": function() { return /* binding */ CHANGE_NICKNAME_FAILURE; },
/* harmony export */   "FOLLOW_REQUEST": function() { return /* binding */ FOLLOW_REQUEST; },
/* harmony export */   "FOLLOW_SUCCESS": function() { return /* binding */ FOLLOW_SUCCESS; },
/* harmony export */   "FOLLOW_FAILURE": function() { return /* binding */ FOLLOW_FAILURE; },
/* harmony export */   "UNFOLLOW_REQUEST": function() { return /* binding */ UNFOLLOW_REQUEST; },
/* harmony export */   "UNFOLLOW_SUCCESS": function() { return /* binding */ UNFOLLOW_SUCCESS; },
/* harmony export */   "UNFOLLOW_FAILURE": function() { return /* binding */ UNFOLLOW_FAILURE; },
/* harmony export */   "ADD_POST_TO_ME": function() { return /* binding */ ADD_POST_TO_ME; },
/* harmony export */   "REMOVE_POST_OF_ME": function() { return /* binding */ REMOVE_POST_OF_ME; },
/* harmony export */   "loginRequestAction": function() { return /* binding */ loginRequestAction; },
/* harmony export */   "logoutRequestAction": function() { return /* binding */ logoutRequestAction; }
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  followLoading: false,
  // 팔로우 시도중
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 언팔로우 시도중
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
  nickname: '이안',
  id: 1,
  Posts: [{
    id: 1
  }],
  Followings: [{
    nickname: 'd'
  }, {
    nickname: 'dd'
  }, {
    nickname: 'ddd'
  }],
  Followers: [{
    nickname: 'd'
  }, {
    nickname: 'dd'
  }, {
    nickname: 'ddd'
  }]
});

const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST
}); // (이전상태, 액션) => 다음상태

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followError = null;
      draft.followDone = false;
      break;

    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.me.Followings.push({
        id: action.data
      });
      draft.followDone = true;
      break;

    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      break;

    case UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowError = null;
      draft.unfollowDone = false;
      break;

    case UNFOLLOW_SUCCESS:
      draft.unfollowLoading = false;
      draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data);
      draft.unfollowDone = true;
      break;

    case UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      break;

    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      break;

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.me = dummyUser(action.data);
      draft.logInDone = true;
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;

    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutDone = false;
      draft.logOutError = null;
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
      break;

    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;

    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpDone = false;
      draft.signUpError = null;
      break;

    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;

    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;

    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameDone = false;
      draft.changeNicknameError = null;
      break;

    case CHANGE_NICKNAME_SUCCESS:
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      break;

    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;

    case ADD_POST_TO_ME:
      draft.me.Posts.unshift({
        id: action.data
      });
      break;
    // return {
    //   ...state,
    //   me: {
    //     ...state.me,
    //     Posts: [{ id: action.data}, ...state.me.Posts],
    //   },
    // };

    case REMOVE_POST_OF_ME:
      draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
      break;
    // return {
    //   ...state,
    //   me: {
    //     ...state.me,
    //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
    //   },
    // };

    default:
      break;
  }
});

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
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");






function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/posts', data);
}

function* loadPosts(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.delay)(1000);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.LOAD_POSTS_SUCCESS,
      data: (0,_reducers_post__WEBPACK_IMPORTED_MODULE_3__.generateDummyPost)(10)
    });
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.LOAD_POSTS_FAILURE,
      data: err.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/post', data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.delay)(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_1___default().generate();
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_POST_SUCCESS,
      data: {
        id,
        content: action.data
      }
    });
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__.ADD_POST_TO_ME,
      data: id
    });
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_POST_FAILURE,
      data: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().delete('/api/post', data);
}

function* removePost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.delay)(1000);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.REMOVE_POST_SUCCESS,
      data: action.data
    });
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__.REMOVE_POST_OF_ME,
      data: action.data
    });
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.REMOVE_POST_FAILURE,
      data: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(`/api/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.delay)(1000);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_COMMENT_SUCCESS,
      data: action.data
    });
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_COMMENT_FAILURE,
      data: err.response.data
    });
  }
}

function* watchAddPost() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__.REMOVE_POST_REQUEST, removePost);
}

function* watchLoadPosts() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.throttle)(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__.LOAD_POSTS_REQUEST, loadPosts);
}

function* watchAddComment() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_COMMENT_REQUEST, addComment);
}

function* postSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.fork)(watchAddPost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.fork)(watchRemovePost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.fork)(watchLoadPosts), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.fork)(watchAddComment)]);
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
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/login', data);
}

function* logIn(action) {
  // *붙이면 generator
  try {
    // const result = yield call(logInAPI);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_SUCCESS,
      data: action.data
    });
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_FAILURE,
      error: err.response.data
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
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_SUCCESS
    });
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_FAILURE,
      error: err.response.data
    });
  }
}

function signUpAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/signUp');
}

function* signUp() {
  try {
    // const result = yield call(signUpAPI);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.SIGN_UP_SUCCESS
    });
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.SIGN_UP_FAILURE,
      error: err.response.data
    });
  }
}

function followAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/follow');
}

function* follow(action) {
  try {
    // const result = yield call(followAPI);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.FOLLOW_SUCCESS,
      data: action.data
    });
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.FOLLOW_FAILURE,
      error: err.response.data
    });
  }
}

function unfollowAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/unfollow');
}

function* unfollow(action) {
  try {
    // const result = yield call(unfollowAPI);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.UNFOLLOW_SUCCESS,
      data: action.data
    });
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__.UNFOLLOW_FAILURE,
      error: err.response.data
    });
  }
}

function* watchFollow() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__.FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__.UNFOLLOW_REQUEST, unfollow);
}

function* watchLogIn() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__.LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__.SIGN_UP_REQUEST, signUp);
}

function* userSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([// all은 동시에 실행
  (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchFollow), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchUnfollow), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogIn), // fork는 함수 실행
  (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogOut), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchSignUp)]);
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

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("faker");;

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("immer");;

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

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("shortid");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zbnMtZnJvbnQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3JlYWN0LXNucy1mcm9udC8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0LXNucy1mcm9udC8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtc25zLWZyb250Ly4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1zbnMtZnJvbnQvLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1zbnMtZnJvbnQvLi9zYWdhcy9wb3N0LmpzIiwid2VicGFjazovL3JlYWN0LXNucy1mcm9udC8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtc25zLWZyb250Ly4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtc25zLWZyb250L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9yZWFjdC1zbnMtZnJvbnQvZXh0ZXJuYWwgXCJmYWtlclwiIiwid2VicGFjazovL3JlYWN0LXNucy1mcm9udC9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vcmVhY3Qtc25zLWZyb250L2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vcmVhY3Qtc25zLWZyb250L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vcmVhY3Qtc25zLWZyb250L2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL3JlYWN0LXNucy1mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmVhY3Qtc25zLWZyb250L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcmVhY3Qtc25zLWZyb250L2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9yZWFjdC1zbnMtZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly9yZWFjdC1zbnMtZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vcmVhY3Qtc25zLWZyb250L2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vcmVhY3Qtc25zLWZyb250L2V4dGVybmFsIFwic2hvcnRpZFwiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJwYXlsb2FkIiwidXNlciIsInBvc3QiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsImdlbmVyYXRlRHVtbXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaWQiLCJzaG9ydElkIiwiVXNlciIsIm5pY2tuYW1lIiwiZmFrZXIiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uY2F0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwidiIsImZpbmQiLCJwb3N0SWQiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiZHVtbXlVc2VyIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInB1c2giLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwibG9hZFBvc3RzQVBJIiwiYXhpb3MiLCJsb2FkUG9zdHMiLCJkZWxheSIsInB1dCIsImVyciIsInJlc3BvbnNlIiwiYWRkUG9zdEFQSSIsInJlbW92ZVBvc3RBUEkiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFQSSIsIndhdGNoQWRkUG9zdCIsInRha2VMYXRlc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaExvYWRQb3N0cyIsInRocm90dGxlIiwid2F0Y2hBZGRDb21tZW50IiwibG9nSW5BUEkiLCJsb2dJbiIsImxvZ091dEFQSSIsImxvZ091dCIsInNpZ25VcEFQSSIsInNpZ25VcCIsImZvbGxvd0FQSSIsImZvbGxvdyIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsa0JBQ1Y7QUFBQSwwQkFDRSw4REFBQyxrREFBRDtBQUFBLDJCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUUsOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQSxnQkFERjs7QUFTQUQsR0FBRyxDQUFDRSxTQUFKLEdBQWdCO0FBQ2RELFdBQVMsRUFBRUUsMEVBQWdDQztBQUQ3QixDQUFoQjtBQUlBLCtEQUFlQyxvRUFBQSxDQUFrQkwsR0FBbEIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTU0sV0FBVyxHQUFHQyxzREFBZSxDQUFDO0FBQ2xDQyxPQUFLLEVBQUUsQ0FBQ0MsS0FBSyxHQUFHLEVBQVQsRUFBYUMsTUFBYixLQUF3QjtBQUM3QixZQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxXQUFLQyx1REFBTDtBQUFjO0FBQ1osK0NBQVlILEtBQVosR0FBc0JDLE1BQU0sQ0FBQ0csT0FBN0I7O0FBQ0Y7QUFDRSxlQUFPSixLQUFQO0FBSko7QUFNRCxHQVJpQztBQVNsQ0ssTUFUa0M7QUFVbENDLE1BQUlBO0FBVjhCLENBQUQsQ0FBbkM7QUFhQSwrREFBZVQsV0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBRU8sTUFBTVUsWUFBWSxHQUFHO0FBQzFCQyxXQUFTLEVBQUUsRUFEZTtBQUUxQkMsWUFBVSxFQUFFLEVBRmM7QUFHMUJDLGNBQVksRUFBRSxJQUhZO0FBSTFCQyxrQkFBZ0IsRUFBRSxLQUpRO0FBSzFCQyxlQUFhLEVBQUUsS0FMVztBQU0xQkMsZ0JBQWMsRUFBRSxJQU5VO0FBTzFCQyxnQkFBYyxFQUFFLEtBUFU7QUFRMUJDLGFBQVcsRUFBRSxLQVJhO0FBUzFCQyxjQUFZLEVBQUUsSUFUWTtBQVUxQkMsbUJBQWlCLEVBQUUsS0FWTztBQVcxQkMsZ0JBQWMsRUFBRSxLQVhVO0FBWTFCQyxpQkFBZSxFQUFFLElBWlM7QUFhMUJDLG1CQUFpQixFQUFFLEtBYk87QUFjMUJDLGdCQUFjLEVBQUUsS0FkVTtBQWUxQkMsaUJBQWUsRUFBRTtBQWZTLENBQXJCO0FBa0JBLE1BQU1DLGlCQUFpQixHQUFJQyxNQUFELElBQVlDLEtBQUssQ0FBQ0QsTUFBRCxDQUFMLENBQWNFLElBQWQsR0FBcUJDLEdBQXJCLENBQXlCLE9BQU87QUFDM0VDLElBQUUsRUFBRUMsdURBQUEsRUFEdUU7QUFFM0VDLE1BQUksRUFBRTtBQUNKRixNQUFFLEVBQUVDLHVEQUFBLEVBREE7QUFFSkUsWUFBUSxFQUFFQywwREFBQTtBQUZOLEdBRnFFO0FBTTNFQyxTQUFPLEVBQUVELDREQUFBLEVBTmtFO0FBTzNFRSxRQUFNLEVBQUUsQ0FBQztBQUNQQyxPQUFHLEVBQUVILHdEQUFBO0FBREUsR0FBRCxDQVBtRTtBQVUzRUksVUFBUSxFQUFFLENBQUM7QUFDVE4sUUFBSSxFQUFFO0FBQ0pGLFFBQUUsRUFBRUMsdURBQUEsRUFEQTtBQUVKRSxjQUFRLEVBQUVDLDBEQUFBO0FBRk4sS0FERztBQUtUQyxXQUFPLEVBQUVELDJEQUFBO0FBTEEsR0FBRDtBQVZpRSxDQUFQLENBQXpCLENBQXRDO0FBbUJBLE1BQU1LLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUVBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLE1BQU1DLE9BQU8sR0FBSUMsSUFBRCxLQUFXO0FBQ2hDaEQsTUFBSSxFQUFFc0MsZ0JBRDBCO0FBRWhDVTtBQUZnQyxDQUFYLENBQWhCO0FBS0EsTUFBTUMsVUFBVSxHQUFJRCxJQUFELEtBQVc7QUFDbkNoRCxNQUFJLEVBQUV5QyxtQkFENkI7QUFFbkNPO0FBRm1DLENBQVgsQ0FBbkI7O0FBS1AsTUFBTUUsU0FBUyxHQUFJRixJQUFELEtBQVc7QUFDM0J0QixJQUFFLEVBQUVzQixJQUFJLENBQUN0QixFQURrQjtBQUUzQkssU0FBTyxFQUFFaUIsSUFBSSxDQUFDakIsT0FGYTtBQUczQkgsTUFBSSxFQUFFO0FBQ0pGLE1BQUUsRUFBRSxDQURBO0FBRUpHLFlBQVEsRUFBRTtBQUZOLEdBSHFCO0FBTzNCRyxRQUFNLEVBQUUsRUFQbUI7QUFRM0JFLFVBQVEsRUFBRTtBQVJpQixDQUFYLENBQWxCOztBQVdBLE1BQU1pQixZQUFZLEdBQUlILElBQUQsS0FBVztBQUM5QnRCLElBQUUsRUFBRUMsdURBQUEsRUFEMEI7QUFFOUJJLFNBQU8sRUFBRWlCLElBRnFCO0FBRzlCcEIsTUFBSSxFQUFFO0FBQ0pGLE1BQUUsRUFBRSxDQURBO0FBRUpHLFlBQVEsRUFBRTtBQUZOO0FBSHdCLENBQVgsQ0FBckIsQyxDQVNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTXVCLE9BQU8sR0FBRyxDQUFDdEQsS0FBSyxHQUFHTyxZQUFULEVBQXVCTixNQUF2QixLQUFrQ3NELDRDQUFPLENBQUN2RCxLQUFELEVBQVN3RCxLQUFELElBQVc7QUFDMUUsVUFBUXZELE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUttQyxrQkFBTDtBQUNFbUIsV0FBSyxDQUFDN0MsZ0JBQU4sR0FBeUIsSUFBekI7QUFDQTZDLFdBQUssQ0FBQzVDLGFBQU4sR0FBc0IsS0FBdEI7QUFDQTRDLFdBQUssQ0FBQzNDLGNBQU4sR0FBdUIsSUFBdkI7QUFDQTs7QUFDRixTQUFLeUIsa0JBQUw7QUFDRWtCLFdBQUssQ0FBQzdDLGdCQUFOLEdBQXlCLEtBQXpCO0FBQ0E2QyxXQUFLLENBQUM1QyxhQUFOLEdBQXNCLElBQXRCO0FBQ0E0QyxXQUFLLENBQUNoRCxTQUFOLEdBQWtCUCxNQUFNLENBQUNpRCxJQUFQLENBQVlPLE1BQVosQ0FBbUJELEtBQUssQ0FBQ2hELFNBQXpCLENBQWxCLENBSEYsQ0FHeUQ7O0FBQ3ZEZ0QsV0FBSyxDQUFDOUMsWUFBTixHQUFxQjhDLEtBQUssQ0FBQ2hELFNBQU4sQ0FBZ0JrRCxNQUFoQixHQUF5QixFQUE5QztBQUNBOztBQUNGLFNBQUtuQixrQkFBTDtBQUNFaUIsV0FBSyxDQUFDN0MsZ0JBQU4sR0FBeUIsS0FBekI7QUFDQTZDLFdBQUssQ0FBQzNDLGNBQU4sR0FBdUJaLE1BQU0sQ0FBQzBELEtBQTlCO0FBQ0E7O0FBQ0YsU0FBS25CLGdCQUFMO0FBQ0VnQixXQUFLLENBQUMxQyxjQUFOLEdBQXVCLElBQXZCO0FBQ0EwQyxXQUFLLENBQUN6QyxXQUFOLEdBQW9CLEtBQXBCO0FBQ0F5QyxXQUFLLENBQUN4QyxZQUFOLEdBQXFCLElBQXJCO0FBQ0E7O0FBQ0YsU0FBS3lCLGdCQUFMO0FBQ0VlLFdBQUssQ0FBQzFDLGNBQU4sR0FBdUIsS0FBdkI7QUFDQTBDLFdBQUssQ0FBQ3pDLFdBQU4sR0FBb0IsSUFBcEI7QUFDQXlDLFdBQUssQ0FBQ2hELFNBQU4sQ0FBZ0JvRCxPQUFoQixDQUF3QlIsU0FBUyxDQUFDbkQsTUFBTSxDQUFDaUQsSUFBUixDQUFqQztBQUNBOztBQUNGLFNBQUtSLGdCQUFMO0FBQ0VjLFdBQUssQ0FBQzFDLGNBQU4sR0FBdUIsS0FBdkI7QUFDQTBDLFdBQUssQ0FBQ3hDLFlBQU4sR0FBcUJmLE1BQU0sQ0FBQzBELEtBQTVCO0FBQ0E7O0FBQ0YsU0FBS2IsbUJBQUw7QUFDRVUsV0FBSyxDQUFDdkMsaUJBQU4sR0FBMEIsSUFBMUI7QUFDQXVDLFdBQUssQ0FBQ3RDLGNBQU4sR0FBdUIsS0FBdkI7QUFDQXNDLFdBQUssQ0FBQ3JDLGVBQU4sR0FBd0IsSUFBeEI7QUFDQTs7QUFDRixTQUFLNEIsbUJBQUw7QUFDRVMsV0FBSyxDQUFDdkMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQXVDLFdBQUssQ0FBQ3RDLGNBQU4sR0FBdUIsSUFBdkI7QUFDQXNDLFdBQUssQ0FBQ2hELFNBQU4sR0FBa0JnRCxLQUFLLENBQUNoRCxTQUFOLENBQWdCcUQsTUFBaEIsQ0FBd0JDLENBQUQsSUFBT0EsQ0FBQyxDQUFDbEMsRUFBRixLQUFTM0IsTUFBTSxDQUFDaUQsSUFBOUMsQ0FBbEI7QUFDQTs7QUFDRixTQUFLRixtQkFBTDtBQUNFUSxXQUFLLENBQUN2QyxpQkFBTixHQUEwQixLQUExQjtBQUNBdUMsV0FBSyxDQUFDckMsZUFBTixHQUF3QmxCLE1BQU0sQ0FBQzBELEtBQS9CO0FBQ0E7O0FBQ0YsU0FBS2hCLG1CQUFMO0FBQ0VhLFdBQUssQ0FBQ3BDLGlCQUFOLEdBQTBCLElBQTFCO0FBQ0FvQyxXQUFLLENBQUNuQyxjQUFOLEdBQXVCLEtBQXZCO0FBQ0FtQyxXQUFLLENBQUNsQyxlQUFOLEdBQXdCLElBQXhCO0FBQ0E7O0FBQ0YsU0FBS3NCLG1CQUFMO0FBQTBCO0FBQ3hCLGNBQU10QyxJQUFJLEdBQUdrRCxLQUFLLENBQUNoRCxTQUFOLENBQWdCdUQsSUFBaEIsQ0FBc0JELENBQUQsSUFBT0EsQ0FBQyxDQUFDbEMsRUFBRixLQUFTM0IsTUFBTSxDQUFDaUQsSUFBUCxDQUFZYyxNQUFqRCxDQUFiO0FBQ0ExRCxZQUFJLENBQUM4QixRQUFMLENBQWN3QixPQUFkLENBQXNCUCxZQUFZLENBQUNwRCxNQUFNLENBQUNpRCxJQUFQLENBQVlqQixPQUFiLENBQWxDO0FBQ0F1QixhQUFLLENBQUNwQyxpQkFBTixHQUEwQixLQUExQjtBQUNBb0MsYUFBSyxDQUFDbkMsY0FBTixHQUF1QixJQUF2QjtBQUNBLGNBTHdCLENBT3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOztBQUNELFNBQUt3QixtQkFBTDtBQUNFVyxXQUFLLENBQUNwQyxpQkFBTixHQUEwQixLQUExQjtBQUNBb0MsV0FBSyxDQUFDbEMsZUFBTixHQUF3QnJCLE1BQU0sQ0FBQzBELEtBQS9CO0FBQ0E7O0FBQ0Y7QUFDRTtBQTFFSjtBQTRFRCxDQTdFd0QsQ0FBekQ7O0FBK0VBLCtEQUFlTCxPQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pLQTtBQUVPLE1BQU0vQyxZQUFZLEdBQUc7QUFDMUIwRCxlQUFhLEVBQUUsS0FEVztBQUNKO0FBQ3RCQyxZQUFVLEVBQUUsS0FGYztBQUcxQkMsYUFBVyxFQUFFLElBSGE7QUFJMUJDLGlCQUFlLEVBQUUsS0FKUztBQUlGO0FBQ3hCQyxjQUFZLEVBQUUsS0FMWTtBQU0xQkMsZUFBYSxFQUFFLElBTlc7QUFPMUJDLGNBQVksRUFBRSxLQVBZO0FBT0w7QUFDckJDLFdBQVMsRUFBRSxLQVJlO0FBUzFCQyxZQUFVLEVBQUUsSUFUYztBQVUxQkMsZUFBYSxFQUFFLEtBVlc7QUFVSjtBQUN0QkMsWUFBVSxFQUFFLEtBWGM7QUFZMUJDLGFBQVcsRUFBRSxJQVphO0FBYTFCQyxlQUFhLEVBQUUsS0FiVztBQWFKO0FBQ3RCQyxZQUFVLEVBQUUsS0FkYztBQWUxQkMsYUFBVyxFQUFFLElBZmE7QUFnQjFCQyx1QkFBcUIsRUFBRSxLQWhCRztBQWdCSTtBQUM5QkMsb0JBQWtCLEVBQUUsS0FqQk07QUFrQjFCQyxxQkFBbUIsRUFBRSxJQWxCSztBQW1CMUJDLElBQUUsRUFBRSxJQW5Cc0I7QUFvQjFCQyxZQUFVLEVBQUUsRUFwQmM7QUFxQjFCQyxXQUFTLEVBQUU7QUFyQmUsQ0FBckI7QUF3QkEsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBRUEsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjs7QUFFUCxNQUFNQyxTQUFTLEdBQUl4RCxJQUFELG9DQUNiQSxJQURhO0FBRWhCbkIsVUFBUSxFQUFFLElBRk07QUFHaEJILElBQUUsRUFBRSxDQUhZO0FBSWhCK0UsT0FBSyxFQUFFLENBQUM7QUFBRS9FLE1BQUUsRUFBRTtBQUFOLEdBQUQsQ0FKUztBQUtoQmdGLFlBQVUsRUFBRSxDQUFDO0FBQUU3RSxZQUFRLEVBQUU7QUFBWixHQUFELEVBQW9CO0FBQUVBLFlBQVEsRUFBRTtBQUFaLEdBQXBCLEVBQXdDO0FBQUVBLFlBQVEsRUFBRTtBQUFaLEdBQXhDLENBTEk7QUFNaEI4RSxXQUFTLEVBQUUsQ0FBQztBQUFFOUUsWUFBUSxFQUFFO0FBQVosR0FBRCxFQUFvQjtBQUFFQSxZQUFRLEVBQUU7QUFBWixHQUFwQixFQUF3QztBQUFFQSxZQUFRLEVBQUU7QUFBWixHQUF4QztBQU5LLEVBQWxCOztBQVNPLE1BQU0rRSxrQkFBa0IsR0FBSTVELElBQUQsS0FBVztBQUMzQ2hELE1BQUksRUFBRW9GLGNBRHFDO0FBRTNDcEM7QUFGMkMsQ0FBWCxDQUEzQjtBQUtBLE1BQU02RCxtQkFBbUIsR0FBRyxPQUFPO0FBQ3hDN0csTUFBSSxFQUFFdUY7QUFEa0MsQ0FBUCxDQUE1QixDLENBSVA7O0FBQ0EsTUFBTW5DLE9BQU8sR0FBRyxDQUFDdEQsS0FBSyxHQUFHTyxZQUFULEVBQXVCTixNQUF2QixLQUFrQ3NELDRDQUFPLENBQUN2RCxLQUFELEVBQVN3RCxLQUFELElBQVc7QUFDMUUsVUFBUXZELE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtnRyxjQUFMO0FBQ0UxQyxXQUFLLENBQUNTLGFBQU4sR0FBc0IsSUFBdEI7QUFDQVQsV0FBSyxDQUFDVyxXQUFOLEdBQW9CLElBQXBCO0FBQ0FYLFdBQUssQ0FBQ1UsVUFBTixHQUFtQixLQUFuQjtBQUNBOztBQUNGLFNBQUtpQyxjQUFMO0FBQ0UzQyxXQUFLLENBQUNTLGFBQU4sR0FBc0IsS0FBdEI7QUFDQVQsV0FBSyxDQUFDMkIsRUFBTixDQUFTeUIsVUFBVCxDQUFvQkksSUFBcEIsQ0FBeUI7QUFBRXBGLFVBQUUsRUFBRTNCLE1BQU0sQ0FBQ2lEO0FBQWIsT0FBekI7QUFDQU0sV0FBSyxDQUFDVSxVQUFOLEdBQW1CLElBQW5CO0FBQ0E7O0FBQ0YsU0FBS2tDLGNBQUw7QUFDRTVDLFdBQUssQ0FBQ1MsYUFBTixHQUFzQixLQUF0QjtBQUNBVCxXQUFLLENBQUNXLFdBQU4sR0FBb0JsRSxNQUFNLENBQUMwRCxLQUEzQjtBQUNBOztBQUNGLFNBQUswQyxnQkFBTDtBQUNFN0MsV0FBSyxDQUFDWSxlQUFOLEdBQXdCLElBQXhCO0FBQ0FaLFdBQUssQ0FBQ2MsYUFBTixHQUFzQixJQUF0QjtBQUNBZCxXQUFLLENBQUNhLFlBQU4sR0FBcUIsS0FBckI7QUFDQTs7QUFDRixTQUFLaUMsZ0JBQUw7QUFDRTlDLFdBQUssQ0FBQ1ksZUFBTixHQUF3QixLQUF4QjtBQUNBWixXQUFLLENBQUMyQixFQUFOLENBQVN5QixVQUFULEdBQXNCcEQsS0FBSyxDQUFDMkIsRUFBTixDQUFTeUIsVUFBVCxDQUFvQi9DLE1BQXBCLENBQTRCQyxDQUFELElBQU9BLENBQUMsQ0FBQ2xDLEVBQUYsS0FBUzNCLE1BQU0sQ0FBQ2lELElBQWxELENBQXRCO0FBQ0FNLFdBQUssQ0FBQ2EsWUFBTixHQUFxQixJQUFyQjtBQUNBOztBQUNGLFNBQUtrQyxnQkFBTDtBQUNFL0MsV0FBSyxDQUFDWSxlQUFOLEdBQXdCLEtBQXhCO0FBQ0FaLFdBQUssQ0FBQ2MsYUFBTixHQUFzQnJFLE1BQU0sQ0FBQzBELEtBQTdCO0FBQ0E7O0FBQ0YsU0FBSzJCLGNBQUw7QUFDRTlCLFdBQUssQ0FBQ2UsWUFBTixHQUFxQixJQUFyQjtBQUNBZixXQUFLLENBQUNpQixVQUFOLEdBQW1CLElBQW5CO0FBQ0FqQixXQUFLLENBQUNnQixTQUFOLEdBQWtCLEtBQWxCO0FBQ0E7O0FBQ0YsU0FBS2UsY0FBTDtBQUNFL0IsV0FBSyxDQUFDZSxZQUFOLEdBQXFCLEtBQXJCO0FBQ0FmLFdBQUssQ0FBQzJCLEVBQU4sR0FBV3VCLFNBQVMsQ0FBQ3pHLE1BQU0sQ0FBQ2lELElBQVIsQ0FBcEI7QUFDQU0sV0FBSyxDQUFDZ0IsU0FBTixHQUFrQixJQUFsQjtBQUNBOztBQUNGLFNBQUtnQixjQUFMO0FBQ0VoQyxXQUFLLENBQUNlLFlBQU4sR0FBcUIsS0FBckI7QUFDQWYsV0FBSyxDQUFDaUIsVUFBTixHQUFtQnhFLE1BQU0sQ0FBQzBELEtBQTFCO0FBQ0E7O0FBQ0YsU0FBSzhCLGVBQUw7QUFDRWpDLFdBQUssQ0FBQ2tCLGFBQU4sR0FBc0IsSUFBdEI7QUFDQWxCLFdBQUssQ0FBQ21CLFVBQU4sR0FBbUIsS0FBbkI7QUFDQW5CLFdBQUssQ0FBQ29CLFdBQU4sR0FBb0IsSUFBcEI7QUFDQTs7QUFDRixTQUFLYyxlQUFMO0FBQ0VsQyxXQUFLLENBQUNrQixhQUFOLEdBQXNCLEtBQXRCO0FBQ0FsQixXQUFLLENBQUNtQixVQUFOLEdBQW1CLElBQW5CO0FBQ0FuQixXQUFLLENBQUMyQixFQUFOLEdBQVcsSUFBWDtBQUNBOztBQUNGLFNBQUtRLGVBQUw7QUFDRW5DLFdBQUssQ0FBQ2tCLGFBQU4sR0FBc0IsS0FBdEI7QUFDQWxCLFdBQUssQ0FBQ29CLFdBQU4sR0FBb0IzRSxNQUFNLENBQUMwRCxLQUEzQjtBQUNBOztBQUNGLFNBQUtpQyxlQUFMO0FBQ0VwQyxXQUFLLENBQUNxQixhQUFOLEdBQXNCLElBQXRCO0FBQ0FyQixXQUFLLENBQUNzQixVQUFOLEdBQW1CLEtBQW5CO0FBQ0F0QixXQUFLLENBQUN1QixXQUFOLEdBQW9CLElBQXBCO0FBQ0E7O0FBQ0YsU0FBS2MsZUFBTDtBQUNFckMsV0FBSyxDQUFDcUIsYUFBTixHQUFzQixLQUF0QjtBQUNBckIsV0FBSyxDQUFDc0IsVUFBTixHQUFtQixJQUFuQjtBQUNBOztBQUNGLFNBQUtnQixlQUFMO0FBQ0V0QyxXQUFLLENBQUNxQixhQUFOLEdBQXNCLEtBQXRCO0FBQ0FyQixXQUFLLENBQUN1QixXQUFOLEdBQW9COUUsTUFBTSxDQUFDMEQsS0FBM0I7QUFDQTs7QUFDRixTQUFLb0MsdUJBQUw7QUFDRXZDLFdBQUssQ0FBQ3dCLHFCQUFOLEdBQThCLElBQTlCO0FBQ0F4QixXQUFLLENBQUN5QixrQkFBTixHQUEyQixLQUEzQjtBQUNBekIsV0FBSyxDQUFDMEIsbUJBQU4sR0FBNEIsSUFBNUI7QUFDQTs7QUFDRixTQUFLYyx1QkFBTDtBQUNFeEMsV0FBSyxDQUFDd0IscUJBQU4sR0FBOEIsS0FBOUI7QUFDQXhCLFdBQUssQ0FBQ3lCLGtCQUFOLEdBQTJCLElBQTNCO0FBQ0E7O0FBQ0YsU0FBS2dCLHVCQUFMO0FBQ0V6QyxXQUFLLENBQUN3QixxQkFBTixHQUE4QixLQUE5QjtBQUNBeEIsV0FBSyxDQUFDMEIsbUJBQU4sR0FBNEJqRixNQUFNLENBQUMwRCxLQUFuQztBQUNBOztBQUNGLFNBQUs2QyxjQUFMO0FBQ0VoRCxXQUFLLENBQUMyQixFQUFOLENBQVN3QixLQUFULENBQWUvQyxPQUFmLENBQXVCO0FBQUVoQyxVQUFFLEVBQUUzQixNQUFNLENBQUNpRDtBQUFiLE9BQXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRixTQUFLdUQsaUJBQUw7QUFDRWpELFdBQUssQ0FBQzJCLEVBQU4sQ0FBU3dCLEtBQVQsR0FBaUJuRCxLQUFLLENBQUMyQixFQUFOLENBQVN3QixLQUFULENBQWU5QyxNQUFmLENBQXVCQyxDQUFELElBQU9BLENBQUMsQ0FBQ2xDLEVBQUYsS0FBUzNCLE1BQU0sQ0FBQ2lELElBQTdDLENBQWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRjtBQUNFO0FBeEdKO0FBMEdELENBM0d3RCxDQUF6RDs7QUE2R0EsK0RBQWVJLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JMQTtBQUVBO0FBQ0E7QUFFZSxVQUFVMkQsUUFBVixHQUFxQjtBQUNsQyxRQUFNQyx1REFBRyxDQUFDLENBQ1JDLHdEQUFJLENBQUNDLDBDQUFELENBREksRUFFUkQsd0RBQUksQ0FBQ0UsMENBQUQsQ0FGSSxDQUFELENBQVQ7QUFJRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQnBFLElBQXRCLEVBQTRCO0FBQzFCLFNBQU9xRSxnREFBQSxDQUFVLFlBQVYsRUFBd0JyRSxJQUF4QixDQUFQO0FBQ0Q7O0FBRUQsVUFBVXNFLFNBQVYsQ0FBb0J2SCxNQUFwQixFQUE0QjtBQUMxQixNQUFJO0FBQ0Y7QUFDQSxVQUFNd0gseURBQUssQ0FBQyxJQUFELENBQVg7QUFDQSxVQUFNQyx1REFBRyxDQUFDO0FBQ1J4SCxVQUFJLEVBQUVvQyw4REFERTtBQUVSWSxVQUFJLEVBQUUzQixpRUFBaUIsQ0FBQyxFQUFEO0FBRmYsS0FBRCxDQUFUO0FBSUQsR0FQRCxDQU9FLE9BQU9vRyxHQUFQLEVBQVk7QUFDWixVQUFNRCx1REFBRyxDQUFDO0FBQ1J4SCxVQUFJLEVBQUVxQyw4REFERTtBQUVSVyxVQUFJLEVBQUV5RSxHQUFHLENBQUNDLFFBQUosQ0FBYTFFO0FBRlgsS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFRCxTQUFTMkUsVUFBVCxDQUFvQjNFLElBQXBCLEVBQTBCO0FBQ3hCLFNBQU9xRSxpREFBQSxDQUFXLFdBQVgsRUFBd0JyRSxJQUF4QixDQUFQO0FBQ0Q7O0FBRUQsVUFBVUQsT0FBVixDQUFrQmhELE1BQWxCLEVBQTBCO0FBQ3hCLE1BQUk7QUFDRjtBQUNBLFVBQU13SCx5REFBSyxDQUFDLElBQUQsQ0FBWDtBQUNBLFVBQU03RixFQUFFLEdBQUdDLHVEQUFBLEVBQVg7QUFDQSxVQUFNNkYsdURBQUcsQ0FBQztBQUNSeEgsVUFBSSxFQUFFdUMsNERBREU7QUFFUlMsVUFBSSxFQUFFO0FBQ0p0QixVQURJO0FBRUpLLGVBQU8sRUFBRWhDLE1BQU0sQ0FBQ2lEO0FBRlo7QUFGRSxLQUFELENBQVQ7QUFPQSxVQUFNd0UsdURBQUcsQ0FBQztBQUNSeEgsVUFBSSxFQUFFc0csMERBREU7QUFFUnRELFVBQUksRUFBRXRCO0FBRkUsS0FBRCxDQUFUO0FBSUQsR0FmRCxDQWVFLE9BQU8rRixHQUFQLEVBQVk7QUFDWixVQUFNRCx1REFBRyxDQUFDO0FBQ1J4SCxVQUFJLEVBQUV3Qyw0REFERTtBQUVSUSxVQUFJLEVBQUV5RSxHQUFHLENBQUNDLFFBQUosQ0FBYTFFO0FBRlgsS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFRCxTQUFTNEUsYUFBVCxDQUF1QjVFLElBQXZCLEVBQTZCO0FBQzNCLFNBQU9xRSxtREFBQSxDQUFhLFdBQWIsRUFBMEJyRSxJQUExQixDQUFQO0FBQ0Q7O0FBRUQsVUFBVTZFLFVBQVYsQ0FBcUI5SCxNQUFyQixFQUE2QjtBQUMzQixNQUFJO0FBQ0Y7QUFDQSxVQUFNd0gseURBQUssQ0FBQyxJQUFELENBQVg7QUFDQSxVQUFNQyx1REFBRyxDQUFDO0FBQ1J4SCxVQUFJLEVBQUU2QywrREFERTtBQUVSRyxVQUFJLEVBQUVqRCxNQUFNLENBQUNpRDtBQUZMLEtBQUQsQ0FBVDtBQUlBLFVBQU13RSx1REFBRyxDQUFDO0FBQ1J4SCxVQUFJLEVBQUV1Ryw2REFERTtBQUVSdkQsVUFBSSxFQUFFakQsTUFBTSxDQUFDaUQ7QUFGTCxLQUFELENBQVQ7QUFJRCxHQVhELENBV0UsT0FBT3lFLEdBQVAsRUFBWTtBQUNaLFVBQU1ELHVEQUFHLENBQUM7QUFDUnhILFVBQUksRUFBRThDLCtEQURFO0FBRVJFLFVBQUksRUFBRXlFLEdBQUcsQ0FBQ0MsUUFBSixDQUFhMUU7QUFGWCxLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFNBQVM4RSxhQUFULENBQXVCOUUsSUFBdkIsRUFBNkI7QUFDM0IsU0FBT3FFLGlEQUFBLENBQVksYUFBWXJFLElBQUksQ0FBQ2MsTUFBTyxVQUFwQyxFQUErQ2QsSUFBL0MsQ0FBUDtBQUNEOztBQUVELFVBQVVDLFVBQVYsQ0FBcUJsRCxNQUFyQixFQUE2QjtBQUMzQixNQUFJO0FBQ0Y7QUFDQSxVQUFNd0gseURBQUssQ0FBQyxJQUFELENBQVg7QUFDQSxVQUFNQyx1REFBRyxDQUFDO0FBQ1J4SCxVQUFJLEVBQUUwQywrREFERTtBQUVSTSxVQUFJLEVBQUVqRCxNQUFNLENBQUNpRDtBQUZMLEtBQUQsQ0FBVDtBQUlELEdBUEQsQ0FPRSxPQUFPeUUsR0FBUCxFQUFZO0FBQ1osVUFBTUQsdURBQUcsQ0FBQztBQUNSeEgsVUFBSSxFQUFFMkMsK0RBREU7QUFFUkssVUFBSSxFQUFFeUUsR0FBRyxDQUFDQyxRQUFKLENBQWExRTtBQUZYLEtBQUQsQ0FBVDtBQUlEO0FBQ0Y7O0FBRUQsVUFBVStFLFlBQVYsR0FBeUI7QUFDdkIsUUFBTUMsOERBQVUsQ0FBQzFGLDREQUFELEVBQW1CUyxPQUFuQixDQUFoQjtBQUNEOztBQUVELFVBQVVrRixlQUFWLEdBQTRCO0FBQzFCLFFBQU1ELDhEQUFVLENBQUNwRiwrREFBRCxFQUFzQmlGLFVBQXRCLENBQWhCO0FBQ0Q7O0FBRUQsVUFBVUssY0FBVixHQUEyQjtBQUN6QixRQUFNQyw0REFBUSxDQUFDLElBQUQsRUFBT2hHLDhEQUFQLEVBQTJCbUYsU0FBM0IsQ0FBZDtBQUNEOztBQUVELFVBQVVjLGVBQVYsR0FBNEI7QUFDMUIsUUFBTUosOERBQVUsQ0FBQ3ZGLCtEQUFELEVBQXNCUSxVQUF0QixDQUFoQjtBQUNEOztBQUVjLFVBQVVpRSxRQUFWLEdBQXFCO0FBQ2xDLFFBQU1GLHVEQUFHLENBQUMsQ0FDUkMsd0RBQUksQ0FBQ2MsWUFBRCxDQURJLEVBRVJkLHdEQUFJLENBQUNnQixlQUFELENBRkksRUFHUmhCLHdEQUFJLENBQUNpQixjQUFELENBSEksRUFJUmpCLHdEQUFJLENBQUNtQixlQUFELENBSkksQ0FBRCxDQUFUO0FBTUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SEQ7QUFDQTtBQUVBOztBQU1BLFNBQVNDLFFBQVQsQ0FBa0JyRixJQUFsQixFQUF3QjtBQUN0QixTQUFPcUUsaURBQUEsQ0FBVyxZQUFYLEVBQXlCckUsSUFBekIsQ0FBUDtBQUNEOztBQUVELFVBQVVzRixLQUFWLENBQWdCdkksTUFBaEIsRUFBd0I7QUFBRTtBQUN4QixNQUFJO0FBQ0Y7QUFDQSxVQUFNd0gseURBQUssQ0FBQyxJQUFELENBQVg7QUFDQSxVQUFNQyx1REFBRyxDQUFDO0FBQ1J4SCxVQUFJLEVBQUVxRiwwREFERTtBQUVSckMsVUFBSSxFQUFFakQsTUFBTSxDQUFDaUQ7QUFGTCxLQUFELENBQVQ7QUFJRCxHQVBELENBT0UsT0FBT3lFLEdBQVAsRUFBWTtBQUNaLFVBQU1ELHVEQUFHLENBQUM7QUFDUnhILFVBQUksRUFBRXNGLDBEQURFO0FBRVI3QixXQUFLLEVBQUVnRSxHQUFHLENBQUNDLFFBQUosQ0FBYTFFO0FBRlosS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFRCxTQUFTdUYsU0FBVCxHQUFxQjtBQUNuQixTQUFPbEIsaURBQUEsQ0FBVyxhQUFYLENBQVA7QUFDRDs7QUFFRCxVQUFVbUIsTUFBVixHQUFtQjtBQUNqQixNQUFJO0FBQ0Y7QUFDQSxVQUFNakIseURBQUssQ0FBQyxJQUFELENBQVg7QUFDQSxVQUFNQyx1REFBRyxDQUFDO0FBQ1J4SCxVQUFJLEVBQUV3RiwyREFBZUE7QUFEYixLQUFELENBQVQ7QUFHRCxHQU5ELENBTUUsT0FBT2lDLEdBQVAsRUFBWTtBQUNaLFVBQU1ELHVEQUFHLENBQUM7QUFDUnhILFVBQUksRUFBRXlGLDJEQURFO0FBRVJoQyxXQUFLLEVBQUVnRSxHQUFHLENBQUNDLFFBQUosQ0FBYTFFO0FBRlosS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFRCxTQUFTeUYsU0FBVCxHQUFxQjtBQUNuQixTQUFPcEIsaURBQUEsQ0FBVyxhQUFYLENBQVA7QUFDRDs7QUFFRCxVQUFVcUIsTUFBVixHQUFtQjtBQUNqQixNQUFJO0FBQ0Y7QUFDQSxVQUFNbkIseURBQUssQ0FBQyxJQUFELENBQVg7QUFDQSxVQUFNQyx1REFBRyxDQUFDO0FBQ1J4SCxVQUFJLEVBQUUyRiwyREFBZUE7QUFEYixLQUFELENBQVQ7QUFHRCxHQU5ELENBTUUsT0FBTzhCLEdBQVAsRUFBWTtBQUNaLFVBQU1ELHVEQUFHLENBQUM7QUFDUnhILFVBQUksRUFBRTRGLDJEQURFO0FBRVJuQyxXQUFLLEVBQUVnRSxHQUFHLENBQUNDLFFBQUosQ0FBYTFFO0FBRlosS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFRCxTQUFTMkYsU0FBVCxHQUFxQjtBQUNuQixTQUFPdEIsaURBQUEsQ0FBVyxhQUFYLENBQVA7QUFDRDs7QUFFRCxVQUFVdUIsTUFBVixDQUFpQjdJLE1BQWpCLEVBQXlCO0FBQ3ZCLE1BQUk7QUFDRjtBQUNBLFVBQU13SCx5REFBSyxDQUFDLElBQUQsQ0FBWDtBQUNBLFVBQU1DLHVEQUFHLENBQUM7QUFDUnhILFVBQUksRUFBRWlHLDBEQURFO0FBRVJqRCxVQUFJLEVBQUVqRCxNQUFNLENBQUNpRDtBQUZMLEtBQUQsQ0FBVDtBQUlELEdBUEQsQ0FPRSxPQUFPeUUsR0FBUCxFQUFZO0FBQ1osVUFBTUQsdURBQUcsQ0FBQztBQUNSeEgsVUFBSSxFQUFFa0csMERBREU7QUFFUnpDLFdBQUssRUFBRWdFLEdBQUcsQ0FBQ0MsUUFBSixDQUFhMUU7QUFGWixLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFNBQVM2RixXQUFULEdBQXVCO0FBQ3JCLFNBQU94QixpREFBQSxDQUFXLGVBQVgsQ0FBUDtBQUNEOztBQUVELFVBQVV5QixRQUFWLENBQW1CL0ksTUFBbkIsRUFBMkI7QUFDekIsTUFBSTtBQUNGO0FBQ0EsVUFBTXdILHlEQUFLLENBQUMsSUFBRCxDQUFYO0FBQ0EsVUFBTUMsdURBQUcsQ0FBQztBQUNSeEgsVUFBSSxFQUFFb0csNERBREU7QUFFUnBELFVBQUksRUFBRWpELE1BQU0sQ0FBQ2lEO0FBRkwsS0FBRCxDQUFUO0FBSUQsR0FQRCxDQU9FLE9BQU95RSxHQUFQLEVBQVk7QUFDWixVQUFNRCx1REFBRyxDQUFDO0FBQ1J4SCxVQUFJLEVBQUVxRyw0REFERTtBQUVSNUMsV0FBSyxFQUFFZ0UsR0FBRyxDQUFDQyxRQUFKLENBQWExRTtBQUZaLEtBQUQsQ0FBVDtBQUlEO0FBQ0Y7O0FBRUQsVUFBVStGLFdBQVYsR0FBd0I7QUFDdEIsUUFBTWYsOERBQVUsQ0FBQ2hDLDBEQUFELEVBQWlCNEMsTUFBakIsQ0FBaEI7QUFDRDs7QUFFRCxVQUFVSSxhQUFWLEdBQTBCO0FBQ3hCLFFBQU1oQiw4REFBVSxDQUFDN0IsNERBQUQsRUFBbUIyQyxRQUFuQixDQUFoQjtBQUNEOztBQUVELFVBQVVHLFVBQVYsR0FBdUI7QUFDckIsUUFBTWpCLDhEQUFVLENBQUM1QywwREFBRCxFQUFpQmtELEtBQWpCLENBQWhCO0FBQ0Q7O0FBRUQsVUFBVVksV0FBVixHQUF3QjtBQUN0QixRQUFNbEIsOERBQVUsQ0FBQ3pDLDJEQUFELEVBQWtCaUQsTUFBbEIsQ0FBaEI7QUFDRDs7QUFFRCxVQUFVVyxXQUFWLEdBQXdCO0FBQ3RCLFFBQU1uQiw4REFBVSxDQUFDdEMsMkRBQUQsRUFBa0JnRCxNQUFsQixDQUFoQjtBQUNEOztBQUVjLFVBQVV2QixRQUFWLEdBQXFCO0FBQ2xDLFFBQU1ILHVEQUFHLENBQUMsQ0FBRTtBQUNWQywwREFBSSxDQUFDOEIsV0FBRCxDQURJLEVBRVI5Qix3REFBSSxDQUFDK0IsYUFBRCxDQUZJLEVBR1IvQix3REFBSSxDQUFDZ0MsVUFBRCxDQUhJLEVBR1U7QUFDbEJoQywwREFBSSxDQUFDaUMsV0FBRCxDQUpJLEVBS1JqQyx3REFBSSxDQUFDa0MsV0FBRCxDQUxJLENBQUQsQ0FBVDtBQU9ELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SUQ7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxNQUFNO0FBQUU7QUFDN0IsUUFBTUMsY0FBYyxHQUFHQyxpREFBb0IsRUFBM0M7QUFDQSxRQUFNQyxXQUFXLEdBQUcsQ0FBQ0YsY0FBRCxDQUFwQjtBQUNBLFFBQU1HLFFBQVEsR0FBRyxTQUNiQyxDQURhLENBQzRCO0FBRDVCLElBRWJDLDZFQUFtQixDQUFDQyxzREFBZSxDQUFDLEdBQUdKLFdBQUosQ0FBaEIsQ0FGdkIsQ0FIMkIsQ0FLK0I7O0FBQzFELFFBQU1LLEtBQUssR0FBR0Msa0RBQVcsQ0FBQ3pHLDhDQUFELEVBQVVvRyxRQUFWLENBQXpCO0FBQ0FJLE9BQUssQ0FBQ0UsUUFBTixHQUFpQlQsY0FBYyxDQUFDVSxHQUFmLENBQW1CaEQsMkNBQW5CLENBQWpCO0FBQ0EsU0FBTzZDLEtBQVAsQ0FSMkIsQ0FRYjtBQUNmLENBVEQ7O0FBV0EsTUFBTWxLLE9BQU8sR0FBR3NLLGlFQUFhLENBQUNaLGNBQUQsRUFBaUI7QUFBRWEsT0FBSztBQUFQLENBQWpCLENBQTdCO0FBRUEsK0RBQWV2SyxPQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gX2FwcC5qc+uKlCBwYWdlc+uTpOydmCDqs7XthrUg67aA67aEXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcblxyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4gKFxyXG4gIDw+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPu2MjOuekeyDiDwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8Q29tcG9uZW50IC8+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5BcHAucHJvcFR5cGVzID0ge1xyXG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApO1xyXG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5cclxuLy8gLy8gYWN0aW9uIGNyZWF0b3IgKOyVoeyFmCDsg53shLEg7ZWo7IiYKVxyXG4vLyBjb25zdCBjaGFuZ2VOaWNrbmFtZSA9IChkYXRhKSA9PiB7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHR5cGU6ICdDSEFOR0VfTklDS05BTUUnLFxyXG4vLyAgICAgICAgIGRhdGEsIC8vIOuPmeyggVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBIWURSQVRFOiAvLyBTU1LsnYQg7JyE7ZW07IScIOyCrOyaqVxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHVzZXIsXHJcbiAgcG9zdCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gIH0sXHJcbiAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgSW1hZ2VzOiBbe1xyXG4gICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gIH1dLFxyXG4gIENvbW1lbnRzOiBbe1xyXG4gICAgVXNlcjoge1xyXG4gICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgfV0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogZGF0YS5pZCxcclxuICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogJ+ydtOyViCcsXHJcbiAgfSxcclxuICBJbWFnZXM6IFtdLFxyXG4gIENvbW1lbnRzOiBbXSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIGNvbnRlbnQ6IGRhdGEsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogJ+ydtOyViCcsXHJcbiAgfSxcclxufSk7XHJcblxyXG4vLyByZWR1Y2VyIOydtOyghOyDge2DnOulvCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja064K064qUIO2VqOyImCjrtojrs4DshLHsnYAg7KeA7YKk66m07IScKVxyXG4vLyAo7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG4vLyBpbW1lcuulvCDsgqzsmqntlZjrqbQg67aI67OA7ISx7J2EIOyngO2CrCDsiJgg7J6I64ukIC4uLiDri6Qg7JeG7Ja064+E65CoIGJyZWFrOyDsjajspJjslbzrkKhcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTsgLy8gY29uY2F07J2AIOq4sOyhtOuwsOyXtOyXkCDsg4jrsLDsl7TsnYQg7ZWp7LOQ7IScIOuwmO2ZmFxyXG4gICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSk7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyAvLyBhY3Rpb24uZGF0YS5jb250ZW50LCBwb3N0SWQsIHVzZXJJZFxyXG4gICAgICAvLyBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAvLyBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgIC8vIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAvLyBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgbWFpblBvc3RzLFxyXG4gICAgICAvLyAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgLy8gICBhZGRDb21tZW50RG9uZTogdHJ1ZSxcclxuICAgICAgLy8gfTtcclxuICAgIH1cclxuICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gIHVuZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICBzaWduVXBEb25lOiBmYWxzZSxcclxuICBzaWduVXBFcnJvcjogbnVsbCxcclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuICBtZTogbnVsbCxcclxuICBzaWduVXBEYXRhOiB7fSxcclxuICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gIC4uLmRhdGEsXHJcbiAgbmlja25hbWU6ICfsnbTslYgnLFxyXG4gIGlkOiAxLFxyXG4gIFBvc3RzOiBbeyBpZDogMSB9XSxcclxuICBGb2xsb3dpbmdzOiBbeyBuaWNrbmFtZTogJ2QnIH0sIHsgbmlja25hbWU6ICdkZCcgfSwgeyBuaWNrbmFtZTogJ2RkZCcgfV0sXHJcbiAgRm9sbG93ZXJzOiBbeyBuaWNrbmFtZTogJ2QnIH0sIHsgbmlja25hbWU6ICdkZCcgfSwgeyBuaWNrbmFtZTogJ2RkZCcgfV0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxufSk7XHJcblxyXG4vLyAo7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBtZToge1xyXG4gICAgICAvLyAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgIC8vICAgICBQb3N0czogW3sgaWQ6IGFjdGlvbi5kYXRhfSwgLi4uc3RhdGUubWUuUG9zdHNdLFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vIH07XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBtZToge1xyXG4gICAgICAvLyAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgIC8vICAgICBQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5cclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHBvc3RTYWdhKSxcclxuICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgeyBkZWxheSwgcHV0LCB0YWtlTGF0ZXN0LCBhbGwsIGZvcmssIHRocm90dGxlIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHsgQUREX1BPU1RfUkVRVUVTVCwgQUREX1BPU1RfU1VDQ0VTUywgQUREX1BPU1RfRkFJTFVSRSwgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUywgQUREX0NPTU1FTlRfRkFJTFVSRSwgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgUkVNT1ZFX1BPU1RfU1VDQ0VTUywgUkVNT1ZFX1BPU1RfRkFJTFVSRSwgTE9BRF9QT1NUU19SRVFVRVNULCBMT0FEX1BPU1RTX1NVQ0NFU1MsIExPQURfUE9TVFNfRkFJTFVSRSwgZ2VuZXJhdGVEdW1teVBvc3QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoJy9hcGkvcG9zdHMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogZ2VuZXJhdGVEdW1teVBvc3QoMTApLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgY29uc3QgaWQgPSBzaG9ydElkLmdlbmVyYXRlKCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgY29udGVudDogYWN0aW9uLmRhdGEsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiBpZCxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoJy9hcGkvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL2FwaS9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrLCBwdXQsIGRlbGF5LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgTE9HX0lOX1JFUVVFU1QsIExPR19JTl9TVUNDRVNTLCBMT0dfSU5fRkFJTFVSRSwgTE9HX09VVF9SRVFVRVNULCBMT0dfT1VUX1NVQ0NFU1MsIExPR19PVVRfRkFJTFVSRSxcclxuICBTSUdOX1VQX1JFUVVFU1QsIFNJR05fVVBfU1VDQ0VTUywgU0lHTl9VUF9GQUlMVVJFLCBGT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfUkVRVUVTVCwgRk9MTE9XX1NVQ0NFU1MsXHJcbiAgRk9MTE9XX0ZBSUxVUkUsIFVORk9MTE9XX1NVQ0NFU1MsIFVORk9MTE9XX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikgeyAvLyAq67aZ7J2066m0IGdlbmVyYXRvclxyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3NpZ25VcCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9mb2xsb3cnKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBUEkpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZm9sbG93QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3VuZm9sbG93Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbIC8vIGFsbOydgCDrj5nsi5zsl5Ag7Iuk7ZaJXHJcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcbiAgICBmb3JrKHdhdGNoTG9nSW4pLCAvLyBmb3Jr64qUIO2VqOyImCDsi6TtlolcclxuICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbXBvc2UsIGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHsgLy8gZW5oYW5jZXLripQg66as642V7Iqk7J2YIOq4sOuKpeydhCDtmZXsnqXsi5zsvJzspIDri6RcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpIC8vIOuwsO2PrOyaqeydvCDqsr3smrAgZGV2dG9vbOyXsOqysOyViO2VqFxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpOyAvLyDqsJzrsJzrlYzripQgZGV2dG9vbOyXsOqysFxyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7IC8vIHN0b3Jl64qUIHN0YXRlICsgcmVkdWNlclxyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHsgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2VyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==