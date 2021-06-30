export const initialState = {
    isLoggingIn: false, // 로그인 시도중 true면 로딩창을띄움
    isLoggedIn: false,
    isLoggingOut: false, // 로그아웃 시도중
    me: null,
    signUpData: {},
    loginData: {},
}

export const loginRequestAction = (data) => {
    return {
        type: 'LOG_IN_REQUEST',
        data,
    }
}

export const logoutRequestAction = () => {
    return {
        type: 'LOG_OUT_REQUEST',
    }
}

// (이전상태, 액션) => 다음상태
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN_REQUEST':
            return {
                ...state,
                isLoggingIn: true,
            };
        case 'LOG_IN_SUCCESS':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                me: { ...action.data, nickname: 'ianlee' },
            };
        case 'LOG_IN_FAILURE':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
            };
        case 'LOG_OUT_REQUEST':
            return {
                ...state,
                isLoggeingOut: true,
            };
        case 'LOG_OUT_SUCCESS':
        return {
            ...state,
            isLoggeingOut: false,
            isLoggedIn: false,
            me: null,
        };
        case 'LOG_OUT_FAILURE':
        return {
            ...state,
            isLoggeingOut: false,
        };
        default:
            return state;
    }
};

export default reducer;