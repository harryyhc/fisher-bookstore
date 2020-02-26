import React, { Component } from "react";
import "./Authors.css";
import { AuthorDisplays } from "./AuthorsDisplay";

export default class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [
                {
                    id: 1,
                    name: "Eric Evans",
                    number: "3"
                },
                {
                    id: 2,
                    name: "Nicole Forsgren",
                    number: "5"
                },
                {
                    id: 3,
                    name: "Peter Frampton",
                    number: "2"
                }
            ]
        };
    }


    render() {
        return (
            <div className="Authors">
                <div className="lander">
                    <AuthorDisplays authors={this.state.authors} />
                </div>
            </div>
        );
    }
}