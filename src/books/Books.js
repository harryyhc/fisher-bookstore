import React, { Component } from "react";
import "./Books.css";
import { BookDisplay } from "./BookDisplay";

export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: "Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "978-0321125217"
                },
                {
                    id: 2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331"
                },
                {
                    id: 3,
                    title: "Kobe: Forever",
                    author: "Los Angeles Daily News",
                    isbn: "978-1629378503"
                },
                {
                    id: 4,
                    title: "Do You Feel Like I Do?",
                    author: "Peter Frampton",
                    isbn: "978-0316425315"
                },
                {
                    id: 5,
                    title: "House of Earth and Blood (Signed Book)",
                    author: "Sarah J. Maas",
                    isbn: "978-1635576177"
                },
                {
                    id: 6,
                    title: "Chain of Gold (Last Hours Series #1)",
                    author: "Cassandra Clare",
                    isbn: "978-1481431873"
                },
                {
                    id: 7,
                    title: "Little Fires Everywhere",
                    author: "Celeste Ng",
                    isbn: "978-0735224315"
                },
                {
                    id: 8,
                    title: "American Dirt (Barnes & Noble Book Club Edition)",
                    author: "Jeanine Cummins",
                    isbn: "978-1250772404"
                }
            ]
        };
    }

    render() {
        return (
            <div className="Books">
                <div className="lander">
                    <BookDisplay books={this.state.books} />
                </div>
            </div>
        );
    }
}