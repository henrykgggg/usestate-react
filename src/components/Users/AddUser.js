import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [userNameHandler, setUserNameHamdler] = useState("");
  const [ageHandler, setAgeHamdler] = useState("");
  const [Error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();
    if (userNameHandler.trim().length === 0 || ageHandler.trim().length === 0) {
      setError({
        tittle:"Invalid input",
        message:"please enter a valid name and age"
      })
      return;
    }
    if (+ageHandler < 1) {
      setError({
        tittle:"Invalid Age",
        message:"please enter a age (> 0)"
      })
      return;
    }
    // console.log(userNameHandler, ageHandler);
    props.onAddUser(userNameHandler,ageHandler);
    setUserNameHamdler("");
    setAgeHamdler("");
  };

  const usernameChangeHandler = (event) => {
    setUserNameHamdler(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAgeHamdler(event.target.value);
  };

  const ErrorHandler =()=>{ 
    setError(null)
  }

  return (
    <div>
   {Error && <ErrorModal tittle={Error.tittle} message={Error.message} onConfirm={ErrorHandler}/> }
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">username</label>
        <input
          id="username"
          type="text"
          value={userNameHandler}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (years)</label>
        <input
          id="age"
          type="number"
          value={ageHandler}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User </Button>
      </form>
    </Card>
    </div>
  );
};
export default AddUser;
