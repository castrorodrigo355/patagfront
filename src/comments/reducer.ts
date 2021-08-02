import { ActionTypes, Action, CommentState } from "./types";

const initialState: CommentState = {
    loadingComments: false,
    errorComments: false,
    comments: {},
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
            };
        case ActionTypes.REQUEST_COMMENTS_SUCCESS:
            const { payload } = action;
            const { id, response } = payload;
            return {
                ...state,
                loadingComments: false,
                comments: { ...state.comments, [id]: response },
            };
        case ActionTypes.CLOSE_COMMENTS:
            return {
                ...state,
                loadingComments: false,
                errorComments: false,
                selectedPost: null,
            };
        case ActionTypes.ADD_COMMENT: {
            const { postId } = action.payload;
            return {
                ...state,
                comments: {
                    ...state.comments,
                    [postId]: [...state.comments[postId], action.payload],
                },
            };
        }
        case ActionTypes.SET_COMMENTS_BY_SELECTEDID: {
            return {
                ...state,
                loadingComments: false,
                errorComments: false,
                selectedPost: action.payload,
            };
        }
        default:
            return state;
    }
};