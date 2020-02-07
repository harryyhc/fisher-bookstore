import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home.js";
import Books from "./books/Books.js";
import Authors from "./authors/Authors.js";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/books" component={Books} />
            <Route path="/authors" component={Authors} />
        </Switch>
    );
}