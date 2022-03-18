import React, {useState} from "react";
import { Button } from "react-bootstrap";

const Games = (props) => {

    //useState to Update State of Components and element
    const [rawText, convertedText] = useState('');
    const [oldWord, replacedWord] = useState('');
    const [newWord, replacedWith] = useState('');
    const [oldTime, UpdateTime] = useState({
        min : '00',
        sec: '00',
        umin: 0,
        usec: 0
    });
    const [Timer, pauseUpdateClock] = useState({
        pIntervalId: '',
        tStartId: 0,
        tPauseId: 0
    });

    //To edit your text up to date
    const textOnChange = (event) => {
        convertedText(event.target.value);
    }

    //Timer function Accending Order
    function setTimer(tmin, tsec){
        let minutes  = tmin;
        let seconds = tsec;
        function updateClock(){
            seconds++;
            if(seconds === 60){
                minutes++;
                seconds = 0;
            }
            let secondDiv = (('0' + seconds).slice(-2));
            let minuteDiv = (('0' + minutes).slice(-2));
            UpdateTime({
                min : minuteDiv,
                sec : secondDiv,
                umin : minuteDiv,
                usec : secondDiv
            });
        }
        updateClock();
        const clockInterval = setInterval(updateClock, 1000);
        pauseUpdateClock({
            pIntervalId: clockInterval,
            tStartId: 1
        });
    }


    //Function to Stop Your Timer
    function stopClockTimer(){
        clearInterval(Timer.pIntervalId);
        pauseUpdateClock({
            tStartId: 0
        });
        UpdateTime({
            min : '00',
            sec : '00',
            umin: 0,
            usec: 0
        });
    }

    //Pause Timer
    function pauseClockTimer(){
        clearInterval(Timer.pIntervalId);
    }
    
    //Call Timer Function on clicking Typing Start Button
    const initializeClock = () => {
    if(Timer.tStartId === 0){
        setTimer(oldTime.umin, oldTime.usec);
        }
    }
    //Call stopClockTimer() function
    const  stopTimer = () =>{
        stopClockTimer();
    }

    //Call Pause Timer Function
    const  pauseTimer = () =>{
        pauseClockTimer();
        pauseUpdateClock({
            tPauseId: 1
        });
    }

    //Resume Timer again
    const resumeTimer = () =>{
        if(Timer.tPauseId === 1 && Timer.tStartId !== 0){
            setTimer(oldTime.min, oldTime.sec);
        }
    }

    const replaceOnChange = (event) => {
        replacedWord(event.target.value);
    }
    const replaceWithOnChange = (event) => {
        replacedWith(event.target.value);
    }
    //To Upper Case
    const UpperCase = () =>{
        let newText = rawText.toUpperCase();
        convertedText(newText);
    }
    //To Lower Case
    const LowerCase = () =>{
        let newText = rawText.toLowerCase();
        convertedText(newText);
    }
    //To Replace WOrds
    const replaceWord = () =>{
        const getText = rawText.toString();
        var regEx = new RegExp(oldWord, "ig");
        var NewText = getText.replaceAll(regEx, newWord);
        convertedText(NewText);
    }
    //To Reset all Functionalities
    const resetTextarea = () =>{
        let textValue='';
        convertedText(textValue);
        replacedWord(textValue);
        replacedWith(textValue);
        stopClockTimer();
    }
    //UpperCase first Charecter of each Sentence
    const titleCase = () => {
        var splitStr = rawText.toLowerCase().split('. ');
        for (var i = 0; i < splitStr.length; i++) {

            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        // Directly return the joined string
        const joinedString = splitStr.join('. '); 
        convertedText(joinedString);
    }

    //Uppercase first Charecter of all word
    const titleCaseAll = () => {
        var splitStr = rawText.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {

            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        // Directly return the joined string
        const joinedString = splitStr.join(' '); 
        convertedText(joinedString);
    }

    return(
        <>
        <div className="App">
            <header className="App-header Game-app-header">
                <p>Welcome to React Games<br/>
                   {props.gname}
                </p><br/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            {/* <label for="exampleFormControlTextarea1" className="form-label">Textarea</label> */}
                            <textarea className="form-control" value={rawText} id="exampleFormControlTextarea1" rows="6" onChange={textOnChange}></textarea>
                        </div>
                        <br/>
                        <div className="col-sm-12 my-3">
                            <Button variant="primary" onClick={UpperCase}>Upper Case</Button>
                            <Button variant="secondary" onClick={LowerCase} className="mx-3">Lower Case</Button>
                            <Button variant="info" onClick={titleCase}>Title Case</Button>
                            <Button variant="danger" onClick={titleCaseAll} className="mx-3">Title Case All</Button>
                            <Button variant="light" onClick={initializeClock}>Typing Test</Button>
                            <Button variant="warning" onClick={resetTextarea} className="mx-3">Reset All Fields</Button>
                        </div>
                        <br/>
                        <span>
                            <p value={rawText}>Total {rawText === ''? '0': rawText.split(' ').length} Words and {rawText.length} Charecters</p>
                            <p className="my-1">
                                <span>Click <mark className="mark-text">Typing Test</mark> To Test Your Typing Speed</span><br/>
                                <span>{oldTime.min}</span><span> : </span><span>{oldTime.sec} minutes</span>
                            </p>
                            <p className="my-2">
                                <Button variant="outline-warning" onClick={pauseTimer} className="mx-3">Pause Timer</Button>
                                <Button variant="outline-info" onClick={resumeTimer} className="mx-3">Resume Timer</Button>
                                <Button variant="outline-danger" onClick={stopTimer} className="mx-3">Stop Timer</Button>
                            </p>
                        </span>
                        <br/>
                        <div className="col-sm-12 my-1">
                            <h5 className="my-3">Replace All Together !!</h5>
                            <div className="row">
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" value={oldWord} onChange={replaceOnChange} placeholder="Old Word..."/>
                                </div>
                                <div className="col-sm-4">
                                    <Button variant="success" onClick={replaceWord}>Replace With</Button>
                                </div>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" value={newWord} onChange={replaceWithOnChange} placeholder="New Word..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        </>
    );
    
}
export default Games;