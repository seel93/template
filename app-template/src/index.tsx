import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
const bunyan = require('bunyan');
export const log = bunyan.createLogger({name: 'app'})


ReactDOM.render(
    <Suspense fallback={<div>Loading...</div>}>
        <Router>
            <App/>
        </Router>
    </Suspense>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
