import { ActionTypes, Action, PostState } from "./types";

const initialState: PostState = {
    loadingPosts: false,
    errorPosts: false,
    posts: null,
};

export const postsReducer = (
    state: PostState = initialState,
    action: Action
) => {
    switch (action.type) {
        case ActionTypes.REQUEST_POSTS_LOADING:
            return {
                ...state,
                loadingPosts: true,
            };
        case ActionTypes.REQUEST_POSTS_FAILURE:
            return {
                ...state,
                loadingPosts: false,
                errorPosts: true,
            };
        case ActionTypes.REQUEST_POSTS_SUCCESS:
            return {
                ...state,
                loadingPosts: false,
                posts: action.payload,
            };
        default:
            return state;
    }
};