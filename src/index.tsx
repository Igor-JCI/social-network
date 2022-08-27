import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost} from "./Redux/State";
import {rerenderEntireTree} from "./render";


rerenderEntireTree(state)