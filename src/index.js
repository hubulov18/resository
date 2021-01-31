import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import store from '../src/Redux/redux-store'
import storeContext from "./StoreContext";
export let  rerenderEntireTree = (store) => {
    ReactDOM.render(
        <BrowserRouter>
            <storeContext.Provider value={store}>
            <App />
            </storeContext.Provider>
        </BrowserRouter>, document.getElementById('root'))
}

rerenderEntireTree(store)
store.subscribe(rerenderEntireTree)