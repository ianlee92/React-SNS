import { createWrapper } from 'next-redux-wrapper';
import { compose, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => { // enhancer는 리덕스의 기능을 확장시켜준다
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares)) // 배포용일 경우 devtool연결안함
        : composeWithDevTools(applyMiddleware(...middlewares)) // 개발때는 devtool연결
    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store; // store는 state + reducer
};

const wrapper = createWrapper(configureStore, {debug: process.env.NODE_ENV === 'development',});

export default wrapper;