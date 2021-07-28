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
                const posts = response.reverse();
                setTimeout(() => {

                    dispatch({ type: ActionTypes.REQUEST_POSTS_SUCCESS, payload: posts });
                }, 2000)
            } else {
                dispatch({ type: ActionTypes.REQUEST_POSTS_FAILURE });
            }
        } catch (error) {
            dispatch({ type: ActionTypes.REQUEST_POSTS_FAILURE });
        }
    };
};