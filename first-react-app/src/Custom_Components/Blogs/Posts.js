import React, { useState } from "react";
import AddUser from "../Users/AddUser";
import UsersList from "../Users/UsersList";

const Posts = () =>{
    const [usersList, setUsersList] = useState([]);
  
    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUserList) => {
        return [...prevUserList, {userName: uName, age:uAge, id:Math.random().toString()}]
        })
    }
 
    return(
        <>
        <div className="App">
            <header className="App-header user-section">
                <div className="user-section">
                    <AddUser onAddUser={addUserHandler} />
                    <UsersList users={usersList}/>
                </div>
            </header>
        </div>
        </>
    );
    
}
export default Posts;