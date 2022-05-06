import React from "react";

function CreateList(props){
    const getAuthorName = props.authorName;
    const listItems = getAuthorName.map((name) => <li>{name}</li>)
    return(
        <>
            <ul>
                {listItems}
            </ul>
        </>
    );
}

export default function Author(){
    const Authors = ["Ram", "Shyam", "Jaddu"];
    return(
        <>
        <div className="App">
            <header className="App-header">
                <p>List of Authors</p>
                    {<CreateList authorName={Authors}/>}
            </header>
        </div>
        </>
    );
    
}