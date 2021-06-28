export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '이안',
        },
        content: '첫 게시글',
        Images: [{
          src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        }, {
          src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        }, {
          src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        }],
        Comments: [{
            User: {
                nickname: 'ian',
            },
            content: '우와 신기',
        }, {
            User: {
                nickname: 'yoono',
            },
            content: '퍼가요~',
        }]
    }],
    imagePaths: [],
    postAdded: false,
};

const ADD_POST = 'ADD_POST';

export const addPost = {
    type: ADD_POST,
};

const dummyPost = {
    id: 2,
    content: '더미데이터',
    User: {
        id: 1,
        nickname: 'hyeok',
    },
    Images: [],
    Comments: [],
};

// (이전상태, 액션) => 다음상태
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default reducer;