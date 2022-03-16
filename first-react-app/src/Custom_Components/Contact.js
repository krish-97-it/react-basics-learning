import React from "react";
import { Col } from "react-bootstrap";

class Sample extends React.Component {
    render(){
        return (
            <>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only.
                </p>
            </> 
        );
    }
}
class Contact extends React.Component {
    render(){
        let {phno, emailid} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <Sample/>
                    <div class="row">
                    <Col sm="12">
                        <h5>Phone No.</h5>
                        <p>{phno}</p>
                    </Col>
                    <div class="col-sm-12">
                        <h5>Email us:</h5>
                        <p>{emailid}</p>
                    </div>
                </div>
                </header>
            </div>
        );
    }
}
export default Contact;