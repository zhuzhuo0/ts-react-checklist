import React from 'react';
import { Route, Router } from 'react-router'
import App from "./App";
import Edit from "./Edit"
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { store, persistor } from "./store";
import history from './store/history';
import { PersistGate } from 'redux-persist/integration/react'

export default () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {/* <ConnectedRouter history={history}> */}
            <Router history={history}>
                <Route exact path="/" component={App} />
                <Route path="/edit" component={Edit} />
            </Router>
            {/* </ConnectedRouter> */}
        </PersistGate>
    </Provider>
)

