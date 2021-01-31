import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
let reducer1={dialogsPage:dialogsReducer}
let reducer2={profilePage:profileReducer}
let reducers=combineReducers(
    {
        dialogsPage:dialogsReducer,
        profilePage:profileReducer
    }
)
let store=createStore(reducers)

export default store