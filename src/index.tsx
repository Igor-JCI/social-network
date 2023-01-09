import React from 'react';
import store from "./Redux/Redux-store"
import ReactDOM from 'react-dom';
import './index.css';
import {AppContainer} from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer
            />
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);
