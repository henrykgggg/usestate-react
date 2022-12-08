import React,{useState} from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
function App() {

  const [userHandler,setUserHandler]=useState([])  
  const addUserHandler = (uName,uAge) =>{
    setUserHandler((prevlist) =>{
return [...prevlist, {name:uName , age: uAge , id: Math.random().toString()}]
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userHandler}/> 
        </div>
  );
}

export default App;
