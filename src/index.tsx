import React from 'react';
import store from "./Redux/Redux-store"
import ReactDOM from 'react-dom';
import './index.css';
import App, {StateType} from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                    /*state={store.getState()}
                    dispatch={store.dispatch.bind(store)}*/
                />
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})
