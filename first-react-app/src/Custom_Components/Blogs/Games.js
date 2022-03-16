import React from "react";

const Games = (props) => {
 
    return(
        <>
        <div className="App">
            <header className="App-header">
                <p>Welcome to React Games<br/>
                   {props.gname}
                </p>
            </header>
        </div>
        </>
    );
    
}
export default Games;