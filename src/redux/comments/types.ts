export type TComment = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export type TCommentStructure = {
    post: number,
    comments: TComment[]
}

export interface CommentState {
    loadingComments: boolean,
    errorComments: boolean,
    comments: null | TComment[] | any,
    selectedPost: null | number
}

export enum ActionTypes {
    REQUEST_COMMENTS_LOADING = "REQUEST_COMMENTS_LOADING",
    REQUEST_COMMENTS_FAILURE = "REQUEST_COMMENTS_FAILURE",
    REQUEST_COMMENTS_SUCCESS = "REQUEST_COMMENTS_SUCCESS",
    SET_COMMENTS_BY_SELECTEDID = "SET_COMMENTS_BY_SELECTEDID",
    CLOSE_COMMENTS = "CLOSE_COMMENTS",
    ADD_COMMENT = "ADD_COMMENT"
};

interface REQUEST_COMMENTS_LOADING {
    type: ActionTypes.REQUEST_COMMENTS_LOADING,
    payload: number
}

interface REQUEST_COMMENTS_FAILURE {
    type: ActionTypes.REQUEST_COMMENTS_FAILURE
}

interface REQUEST_COMMENTS_SUCCESS {
    type: ActionTypes.REQUEST_COMMENTS_SUCCESS,
    payload: any
}

interface CLOSE_COMMENTS {
    type: ActionTypes.CLOSE_COMMENTS,
}

interface ADD_COMMENT {
    type: ActionTypes.ADD_COMMENT,
    payload: any
}

interface SET_COMMENTS_BY_SELECTEDID {
    type: ActionTypes.SET_COMMENTS_BY_SELECTEDID,
    payload: number
}

export type Action =
    REQUEST_COMMENTS_LOADING |
    REQUEST_COMMENTS_FAILURE |
    REQUEST_COMMENTS_SUCCESS |
    SET_COMMENTS_BY_SELECTEDID |
    CLOSE_COMMENTS |
    ADD_COMMENT