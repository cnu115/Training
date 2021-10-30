import { Provider as ReduxProvider } from "react-redux";
import Nav from "./Navigation/Nav";
import Router from "./Navigation/Router";
import React from "react";
import configureStore from './redux/Store';
const reduxStore = configureStore(undefined);

const Main = () => {
    const container = "container"
    return(
        <ReduxProvider store={reduxStore}>
            <div className={`${container}`}>
                <Nav />
                <Router />
            </div>
        </ReduxProvider>
    )
}

export default Main;