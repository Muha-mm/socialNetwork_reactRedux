import {combineReducers, createStore} from "redux";
import dialogsPageReducer from "./Reducer/dialogsPageReducer";
import profilePageReducer from "./Reducer/profilePageReducer";
import usersPageReducer from "./Reducer/usersPageReducer";
import newsPageReducer from "./Reducer/newsPageReducer";

let reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage:profilePageReducer,
    usersPage: usersPageReducer,
    newsPage: newsPageReducer
});
let store = createStore(reducers);

window.store = store;
export default store;