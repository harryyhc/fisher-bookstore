import React, {useState, useEffect } from "react";
import "./Authors.css";
import { AuthorDisplays } from "./AuthorsDisplay";

export default function Authors(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://localhost:5001/api/authors/")
        .then(response => response.json())
        .then(data => setData(data));
}, []);


return (
    <div className="Authors">
        <div className="lander">
            <AuthorDisplays authors={data} />
        </div>
    </div>
);
}