import { all, fork, put, delay, takeLatest } from "@redux-saga/effects"
import axios from "axios";

function logInAPI(data) {
    return axios.post('/api/login', data)
}

function* logIn(action) { // *붙이면 generator
    try {
        // const result = yield call(logInAPI);
        yield delay(1000);
        yield put({
            type: 'LOG_IN_SUCCESS',
        });
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data,
        });
    }
}

function logOutAPI() {
    return axios.post('/api/logout')
}

function* logOut() {
    try {
        // const result = yield call(logOutAPI);
        yield delay(1000);
        yield put({
            type: 'LOG_OUT_SUCCESS',
        });
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data,
        })
    }
}

function* watchLogIn() {
    yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
    yield takeLatest('LOG_IN_REQUEST', logOut);
}

export default function* userSaga() {
    yield all([ // all은 동시에 실행
        fork(watchLogIn), // fork는 함수 실행
        fork(watchLogOut),
    ])
}