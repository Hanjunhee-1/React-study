import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300}></Book>
            <Book name="처음 만난 React" numOfPage={400}></Book>
        </div>
    )
}

export default Library;