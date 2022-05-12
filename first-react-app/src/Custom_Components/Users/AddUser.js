import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css"
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(userName.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Enter a valid name and age (not empty values)"
            });
            return;
        }
        if(age < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (>1)"
            });
            return;
        }
        props.onAddUser(userName, age);
        setUserName('');
        setAge('');
    }

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const onErrorHandler = () => {
        setError(null);
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={onErrorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label>Username</label>
                    <input type="text" value={userName} onChange={userNameChangeHandler}/>
                    <label>Age</label>
                    <input type="number" value={age} onChange={ageChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser