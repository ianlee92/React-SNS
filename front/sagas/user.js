import { all, fork, put, delay, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, FOLLOW_REQUEST, UNFOLLOW_REQUEST,
  FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS,
  CHANGE_NICKNAME_FAILURE,
} from '../reducers/user';

function changeNicknameAPI(data) {
  return axios.patch('/user/nickname', { nickname: data });
}

function* changeNickname(action) {
  try {
    const result = yield call(changeNicknameAPI, action.data);
    yield put({
      type: CHANGE_NICKNAME_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: CHANGE_NICKNAME_FAILURE,
      error: err.response.data,
    });
  }
}

function loadMyInfoAPI() {
  return axios.get('/user'); // get, delete는 데이터가 없기때문에 withCredentials만 옴(saga index에서 공통으로 설정해둠)
}

function* loadMyInfo(action) { // *붙이면 generator
  try {
    const result = yield call(loadMyInfoAPI, action.data); // back에 보낼때 req.body가 됨
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

function logInAPI(data) {
  return axios.post('/user/login', data);
}

function* logIn(action) { // *붙이면 generator
  try {
    const result = yield call(logInAPI, action.data); // back에 보낼때 req.body가 됨
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post('/user/logout');
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function signUpAPI(data) {
  return axios.post('/user', data); // post는 데이터를 넘김 action으로 받아온 action.data
}

function* signUp(action) { // singup페이지에 dispatch로 보낸 email, password, nickname
  try {
    const result = yield call(signUpAPI, action.data);
    console.log(result);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function followAPI() {
  return axios.post('/api/follow');
}

function* follow(action) {
  try {
    // const result = yield call(followAPI);
    yield delay(1000);
    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: FOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

function unfollowAPI() {
  return axios.post('/api/unfollow');
}

function* unfollow(action) {
  try {
    // const result = yield call(unfollowAPI);
    yield delay(1000);
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: UNFOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchChangeNickname() {
  yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}

function* watchloadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}

function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([ // all은 동시에 실행
    fork(watchChangeNickname),
    fork(watchloadMyInfo),
    fork(watchFollow),
    fork(watchUnfollow),
    fork(watchLogIn), // fork는 함수 실행
    fork(watchLogOut),
    fork(watchSignUp),
  ]);
}
