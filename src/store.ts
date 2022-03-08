import { createStore, combineReducers, compose } from "redux";
import { carReducer } from "./redux-state/carReducer";

export const rootReducer = combineReducers({
  cars: carReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());

export type RootState = ReturnType<typeof rootReducer>;
