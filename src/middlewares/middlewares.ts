import { MiddlewareAPI, Dispatch, AnyAction, Middleware } from 'redux';

export interface MiddlewareParams {
    store: MiddlewareAPI;
    next: Dispatch;
    action: AnyAction;
}

export const customMiddleware: any =
    (store: MiddlewareAPI) =>
        (next: Dispatch) => (action: AnyAction) => {
            const { getState } = store;
            const state = getState();
            if (action.type === "REQUEST_COMMENTS_LOADING") {
                const { comments, selectedPost } = state.comment
                const element = comments.find((x: any) => x.postId == selectedPost)
                if (element) {
                    return next({ type: "REQUEST_COMMENTS_SUCCESS", payload: comments })
                } else {
                    return next(action)
                }
            }
            return next(action)

        }
