import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {StateType} from './App';
import {addPost, updateNewPostText} from "./Redux/State";



export const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText = {updateNewPostText}/>,
        document.getElementById('root')
    );
}
