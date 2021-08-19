import React from "react";
import { Card } from "../UI/Card";
import classes from "./UserList.module.css";
export const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.username} ({user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
};
