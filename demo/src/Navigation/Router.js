import React from "react";
import {Switch, Route} from "react-router-dom";
import Faq from "../Pages/Faq";
import Home from "../Pages/Home";
import Help from "../Pages/Help";
import Demo from "../Pages/Demo";
import User from "../Pages/User";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Faq" component={Faq} />
            <Route path="/demo" component={Demo} />
            <Route path="/Help" component={ Help} />
            <Route exact path="/user/:id" component={ User} />
        </Switch>
    )
}

export default Router;