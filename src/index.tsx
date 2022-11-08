import React from 'react';
import store from "./Redux/Redux-store"
import ReactDOM from 'react-dom';
import './index.css';
import App, {StateType} from './App';

import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}
            />,
        </BrowserRouter>, document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})
