export type TPost = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export type PostState = {
    loadingPosts: boolean,
    errorPosts: boolean,
    posts: null | TPost[],
}

export enum ActionTypes {
    REQUEST_POSTS_LOADING = "REQUEST_POSTS_LOADING",
    REQUEST_POSTS_FAILURE = "REQUEST_POSTS_FAILURE",
    REQUEST_POSTS_SUCCESS = "REQUEST_POSTS_SUCCESS"
};

interface REQUEST_POSTS_LOADING {
    type: ActionTypes.REQUEST_POSTS_LOADING
}

interface REQUEST_POSTS_FAILURE {
    type: ActionTypes.REQUEST_POSTS_FAILURE
}

interface REQUEST_POSTS_SUCCESS {
    type: ActionTypes.REQUEST_POSTS_SUCCESS,
    payload: TPost[]
}

export type Action =
    REQUEST_POSTS_LOADING |
    REQUEST_POSTS_FAILURE |
    REQUEST_POSTS_SUCCESS