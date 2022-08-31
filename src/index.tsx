import React from 'react';
import state, {subscribe} from "./Redux/State"
import ReactDOM from 'react-dom';
import './index.css';
import App, {StateType} from './App';
import {addPost, updateNewPostText} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        </BrowserRouter>, document.getElementById('root')

    );
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)
