import React, { useState } from "react";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import { ErrorModal } from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

export const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState()
  const addUserHandler = (e) => {
    e.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ){
      setError({
        title:"Geçersiz giriş",
        message: "Lütfen geçerli bir kullanıcı adı veya yaş giriniz (kullanıcı adı veya yaş boş olamaz)"
      })
      return;
    };
    if(+enteredAge < 1 ){
      setError({
        title:"Geçersiz giriş",
        message: "Lütfen geçerli bir yaş giriniz (yaş 1 den büyük olmalıdır)"
      })
      return;
    }
   props.onAddUserHandler(enteredUsername, enteredAge)
    
  };

  const usernameChangedHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangedHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler = ()=>{
    setError(null);
  }

  return (
    <div>

  {error && <ErrorModal title={error.title} message={error.message}  onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler} action="">
        <label htmlFor="username">Kullanıcı Adı</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangedHandler} />
        <label htmlFor="age">Yaş (Yıl)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangedHandler} />
        <Button type="submit">Ekle</Button>
      </form>
      
    </Card>
    </div>
  );
};
