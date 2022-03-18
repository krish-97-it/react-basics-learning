import React, {useState} from "react";
import {Accordion, Button} from "react-bootstrap";

function About(){
    const [defaultTheme, setDarkTheme] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [defaultbtnTheme, setbtnDarkTheme] = useState({
        backgroundColor: 'white'
    })
    const toggleDefaultTheme = () =>{
        setDarkTheme({
            color: 'black',
            backgroundColor: 'white'
        })
        setbtnDarkTheme({
            color: 'black',
            backgroundColor: 'white',
            border: '1px solid grey'
        })
    }
    const toggleDarkTheme = () =>{
        setDarkTheme({
            color: 'white',
            backgroundColor: 'black'
        })
        setbtnDarkTheme({
            color: 'white',
            backgroundColor: 'black',
            border: '1px solid white'
        })
    }

    return(
        <>
            <div className="About-Us-Section" style={defaultTheme}>
                <Button variant="light" onClick={toggleDefaultTheme}>Light</Button> 
                <Button variant="dark" onClick={toggleDarkTheme}>Dark</Button>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" style={defaultbtnTheme}>
                        <Accordion.Header style={defaultTheme}>What is Lorem Lipsum</Accordion.Header>
                        <Accordion.Body style={defaultTheme}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" style={defaultbtnTheme}>
                        <Accordion.Header style={defaultTheme}>How we use it?</Accordion.Header>
                        <Accordion.Body style={defaultTheme}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" style={defaultbtnTheme}>
                        <Accordion.Header style={defaultTheme}>History of Lorem ipsum</Accordion.Header>
                        <Accordion.Body style={defaultTheme}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" style={defaultbtnTheme}>
                        <Accordion.Header style={defaultTheme}>Our Other Branch</Accordion.Header>
                        <Accordion.Body style={defaultTheme}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" style={defaultbtnTheme}>
                        <Accordion.Header style={defaultTheme}>Achivements</Accordion.Header>
                        <Accordion.Body style={defaultTheme}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    );
}
export default About;