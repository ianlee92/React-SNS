export const initialState = {
    mainPosts: [],
}

// (이전상태, 액션) => 다음상태
const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;