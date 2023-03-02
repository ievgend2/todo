import React from "react";
import { Link } from "react-router-dom";
import style from "./TodoListItem.module.css";

export default function NotFoundPage() {
  return (
    <div className={style.Background}>
      <h1>Page not Found </h1>
      <Link to={`/home`} className={style.Link}>
        Click here to go Back
      </Link>
    </div>
  );
}
