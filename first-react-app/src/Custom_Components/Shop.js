import React, { useState }  from "react";
// import { Button } from "react-bootstrap";

export default function Shop(){

    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`);
    }
 
    return(
        <>
        <div className="App">
            <header className="App-header">
                <p>Register Yourself First</p><br/>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label className="lable-for-form">Enter your name:</label><br/>
                        <input type="text" className="form-input-field" value={name} onChange={(e) => setName(e.target.value)}/><br/>
                        <input type="submit" />
                        {/* <Button variant="primary" onClick={handleSubmit}>Submit</Button> */}
                    </form>
                </div>
            </header>
        </div>
        </>
    );
    
}

// ReactDOM.render(<MyForm />, document.getElementById('root'));