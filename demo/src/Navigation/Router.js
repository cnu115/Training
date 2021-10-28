import React from "react";
import {Switch, Route} from "react-router-dom";
import Faq from "../Pages/Faq";
import Home from "../Pages/Home";
import Help from "../Pages/Help";
import Demo from "../Pages/Demo";
import User from "../Pages/User";
import Registration from "../Components/Registration";
import Login from "../Components/Login";
import NotFound from "../Pages/NotFound";
import Todo from "../Pages/Todo";

const Router = () => (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/todo" component={Todo} />
            <Route path="/Faq" component={Faq} />
            <Route path="/demo" component={Demo} />
            <Route path="/Help" component={ Help} />
            <Route exact path="/user/:id" component={ User} />
            <Route exact path="/registration" component={ Registration} />
            <Route exact path="/login" component={ Login} />
            <Route path="/" component={NotFound} />
        </Switch>
    )


export default Router;