import thunk from "redux-thunk";
import { postsReducer } from "../posts/reducer";
import { commentsReducer } from "../comments/reducer";
import { customMiddleware } from "../middlewares/middlewares";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    post: postsReducer,
    comment: commentsReducer,
});

export type RootState = ReturnType<typeof reducers>

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(
        customMiddleware,
        thunk,
    )),
);