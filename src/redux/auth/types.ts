export type AuthState = {
    loadingAuth: boolean,
    errorAuth: boolean,
    auth: boolean,
}

export type TPost = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export enum ActionTypes {
    REQUEST_AUTH_LOADING = "REQUEST_AUTH_LOADING",
    REQUEST_AUTH_FAILURE = "REQUEST_AUTH_FAILURE",
    REQUEST_AUTH_SUCCESS = "REQUEST_AUTH_SUCCESS"
};

interface REQUEST_AUTH_LOADING {
    type: ActionTypes.REQUEST_AUTH_LOADING
}

interface REQUEST_AUTH_FAILURE {
    type: ActionTypes.REQUEST_AUTH_FAILURE
}

interface REQUEST_AUTH_SUCCESS {
    type: ActionTypes.REQUEST_AUTH_SUCCESS,
    // payload: TPost[]
}

export type Action =
    REQUEST_AUTH_LOADING |
    REQUEST_AUTH_FAILURE |
    REQUEST_AUTH_SUCCESS