import { Dispatch } from "redux";
import { Action, ActionTypes } from "./types";

export const initLogin = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionTypes.REQUEST_AUTH_LOADING });
        try {
            setTimeout(() => {
                dispatch({ type: ActionTypes.REQUEST_AUTH_SUCCESS });
            }, 2000)
        } catch (error) {
            setTimeout(() => {
                dispatch({ type: ActionTypes.REQUEST_AUTH_FAILURE });
            }, 2000);
        }
    };
};