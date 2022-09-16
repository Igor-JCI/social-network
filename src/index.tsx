import React from 'react';
import store from "./Redux/State"
import ReactDOM from 'react-dom';
import './index.css';
import App, {StateType} from './App';

import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                /*addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)} */
                 dispatch={store.dispatch.bind(store)}
            />,
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
