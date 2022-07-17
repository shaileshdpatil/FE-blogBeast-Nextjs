import { combineReducers } from "redux";
import { postReducer } from "./postAction";

export default combineReducers({
    post: postReducer,
});
