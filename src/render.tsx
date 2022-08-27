import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {DialogsArrayType, MessagesArrayType, PostsArrayType, StateType} from './App';
import {addPost} from "./Redux/State";



export const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}
