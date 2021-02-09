import {combineReducers, createStore} from "redux";
import dialogsPageReducer from "./Reducer/dialogsPageReducer";
import profilePageReducer from "./Reducer/profilePageReducer";
import UsersPageReducer from "./Reducer/UsersPageReducer";

let reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage:profilePageReducer,
    UsersPage: UsersPageReducer
});
let store = createStore(reducers);

window.store = store;
export default store;