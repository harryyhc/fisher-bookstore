import React from "react";

export function AuthorsRowComponents(props) {
    //return (
        //let author = this.props.author;
        return(
            <tr>
                <td>{props.author.id}</td>
                <td>{props.author.name}</td>
                <td>{props.author.number}</td>
            </tr>
        );
    //)
}