import Nav from "./Navigation/Nav";
import Router from "./Navigation/Router";
import React from "react";

const Main = () => {
    const container = "container"
    return(
        <div className={`${container}`}>
            <Nav />
            <Router />
            {/*<h1>body</h1>*/}
            {/*<h1>Footer</h1>*/}
        </div>
    )
}

export default Main;