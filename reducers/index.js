import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';

// // action creator (액션 생성 함수)
// const changeNickname = (data) => {
//     return {
//         type: 'CHANGE_NICKNAME',
//         data, // 동적
//     }
// }

const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE: // SSR을 위해서 사용
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;