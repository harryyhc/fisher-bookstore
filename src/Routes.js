import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home.js";
import Books from "./books/Books.js";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/books" component={Books} />
        </Switch>
    );
}