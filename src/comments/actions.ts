import { Dispatch } from "redux";
import { Action, ActionTypes } from "./types";

export const getCommentsById = (id: number) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionTypes.REQUEST_COMMENTS_LOADING, payload: id });
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
            const res = await fetch(url);
            if (res.status === 200) {
                const response = await res.json();
                console.log(response)
                setTimeout(() => {
                    dispatch({ type: ActionTypes.REQUEST_COMMENTS_SUCCESS, payload: response });
                }, 1000)
            } else {
                dispatch({ type: ActionTypes.REQUEST_COMMENTS_FAILURE });
            }
        } catch (error) {
            dispatch({ type: ActionTypes.REQUEST_COMMENTS_FAILURE });
        }
    };
};

export const closeComments = () => ({
    type: ActionTypes.CLOSE_COMMENTS
})

export const addComment = (data: any) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: data
})