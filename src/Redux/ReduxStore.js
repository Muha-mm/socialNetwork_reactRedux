import {combineReducers, createStore} from "redux";
import dialogsPageReducer from "./Reducer/dialogsPageReducer";
import profilePageReducer from "./Reducer/profilePageReducer";
// import {profilePageReducer} from "./Reducer/profilePageReducer";

let reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage:profilePageReducer
});
let store = createStore(reducers);

window.store = store;
export default store;