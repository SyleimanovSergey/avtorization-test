import React from "react";
import ReactDOM from "react-dom";
import Router from "router";
import {Provider} from "react-redux";

import App from "app";

import store from "redux/store";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)