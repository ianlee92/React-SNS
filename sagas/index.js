import { all, fork } from 'redux-sage/effects';

import postSaga from './post';
import userSaga from './user';

export default function* rootSaga() {
    yield all([ 
        fork(postSaga), 
        fork(userSaga),
    ]);
}