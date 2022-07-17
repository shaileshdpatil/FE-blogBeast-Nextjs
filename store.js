import { createStore } from "redux";
import rootReducer from "./reducer/index";
const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
);

export default store;
