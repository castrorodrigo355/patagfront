import thunk from "redux-thunk";
// import { createLogger } from "redux-logger";
import { authReducer } from "../redux/auth/reducer";
import { postsReducer } from "../redux/posts/reducer";
import { commentsReducer } from "../redux/comments/reducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// const logger = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    auth: authReducer,
    post: postsReducer,
    comment: commentsReducer,
});

export type RootState = ReturnType<typeof reducers>

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(
        // logger,
        thunk)),
);
