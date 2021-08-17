import { ActionTypes, Action, AuthState } from "./types";

const initialState: AuthState = {
    loadingAuth: false,
    errorAuth: false,
    auth: false,
};

export const authReducer = (
    state: AuthState = initialState,
    action: Action
) => {
    switch (action.type) {
        case ActionTypes.REQUEST_AUTH_LOADING:
            return {
                ...state,
                loadingAuth: true,
            };
        case ActionTypes.REQUEST_AUTH_FAILURE:
            return {
                ...state,
                loadingAuth: false,
                errorAuth: true,
            };
        case ActionTypes.REQUEST_AUTH_SUCCESS:
            return {
                ...state,
                loadingAuth: false,
                auth: true,
            };
        default:
            return state;
    }
};