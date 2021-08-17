import { Dispatch } from "redux";
import { Action, ActionTypes } from "./types";

export const getPosts = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionTypes.REQUEST_POSTS_LOADING });
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const res = await fetch(url);
            if (res.status === 200) {
                const response = await res.json();
                setTimeout(() => {
                    dispatch({ type: ActionTypes.REQUEST_POSTS_SUCCESS, payload: response });
                }, 2000)
            } else {
                setTimeout(() => {
                    dispatch({ type: ActionTypes.REQUEST_POSTS_FAILURE });
                }, 2000);
            }
        } catch (error) {
            setTimeout(() => {
                dispatch({ type: ActionTypes.REQUEST_POSTS_FAILURE });
            }, 2000);
        }
    };
};