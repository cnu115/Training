import React from "react";
import {Switch, Route} from "react-router-dom";
import Faq from "../Pages/Faq";
import Home from "../Pages/Home";
import Help from "../Pages/Help";

const Router = () => {
    return (
        <Switch>

            <Route path="/Faq">
                <Faq/>
            </Route>

            <Route path="/Help" component={ Help} />

            <Route path="/">
                <Home/>
            </Route>


        </Switch>
    )
}

export default Router;