import { Dispatch } from "redux";
import { Action, ActionTypes } from "./types";

export const getCommentsById = (id: number) => {
    return async (dispatch: Dispatch<Action>, getState: any) => {
        const generalState = getState();
        const { comments } = generalState.comment;
        const groupId = comments[id];
        if (!groupId) {
            dispatch({ type: ActionTypes.REQUEST_COMMENTS_LOADING, payload: id });
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                if (res.status === 200) {
                    const response = await res.json()
                    setTimeout(() => {
                        dispatch({ type: ActionTypes.REQUEST_COMMENTS_SUCCESS, payload: { id, response } });
                    }, 1000);
                } else {
                    setTimeout(() => {
                        dispatch({ type: ActionTypes.REQUEST_COMMENTS_FAILURE });
                    }, 1000);
                }
            } catch (error) {
                setTimeout(() => {
                    dispatch({ type: ActionTypes.REQUEST_COMMENTS_FAILURE });
                }, 1000);
            }
        } else {
            dispatch({
                type: ActionTypes.SET_COMMENTS_BY_SELECTEDID,
                payload: id,
            });
        }
    };
};

export const closeComments = () => ({
    type: ActionTypes.CLOSE_COMMENTS
})

export const addComment = (data: any) => {
    return (dispatch: Dispatch<Action>) => {
        const { selectedPost, name, email, body } = data;
        const newComment = {
            postId: selectedPost,
            id: Math.random(),
            name,
            email,
            body,
        };
        dispatch({
            type: ActionTypes.ADD_COMMENT,
            payload: newComment
        });
    };
}