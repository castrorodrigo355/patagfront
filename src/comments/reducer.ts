import { ActionTypes, Action, CommentState } from "./types";

const initialState: CommentState = {
    loadingComments: false,
    errorComments: false,
    comments: [],
    selectedPost: null
};

export const commentsReducer = (
    state: CommentState = initialState,
    action: Action
) => {
    switch (action.type) {
        case ActionTypes.REQUEST_COMMENTS_LOADING:
            return {
                ...state,
                loadingComments: true,
                selectedPost: action.payload
            };
        case ActionTypes.REQUEST_COMMENTS_FAILURE:
            return {
                ...state,
                loadingComments: false,
                errorComments: true,
                selectedPost: null
            };
        case ActionTypes.REQUEST_COMMENTS_SUCCESS:
            return {
                ...state,
                loadingComments: false,
                comments: action.payload
            };
        case ActionTypes.CLOSE_COMMENTS:
            return {
                ...state,
                loadingComments: false,
                selectedPost: null,
                comments: []
            };
        case ActionTypes.ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            };
        default:
            return state;
    }
};