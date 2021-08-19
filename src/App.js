import React, { useState } from "react";
import { AddUser } from "./components/Users/AddUser";
import { UsersList } from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { username: uName, age: uAge }];
    });
  };
  return (
    <div>
      <AddUser onAddUserHandler={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
