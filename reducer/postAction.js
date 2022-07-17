import {GET_POSTS} from "../actions/postAction";

const initialState = {
    posts: [],
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        default:
            return state;
    }
};
