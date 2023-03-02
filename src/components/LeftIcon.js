import React from "react";
import { Link } from "react-router-dom";
import style from "./TodoListItem.module.css";

export default function LeftIcon() {
  return (
    <Link to={`/home`} className={`${style.Link} ${style.Icon}`}>
      &lsaquo;
    </Link>
  );
}

