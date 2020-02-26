import React from "react";
import {AuthorsRowComponents} from "./AuthorsRowComponent";

export function AuthorDisplays(props) {
    return (
        <table className="table table-sm table-striped table-bordered">
            <thead>
                <tr>
                    <th colSpan="3" className="bg-dark text-white text-center h4 p-2">
                        Authors
                    </th>
                </tr>
                <tr>
                    <th>Author ID</th>
                    <th>Name</th>
                    <th>Number of Books</th>
                </tr>
            </thead>
            <tbody>
                {props.authors.map(a => (
                <AuthorsRowComponents
                author={a}
                key={a.id}
            />
            ))}
            </tbody>
         </table>
    );
};