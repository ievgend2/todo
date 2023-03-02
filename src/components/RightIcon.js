import React from "react";
import { Link } from "react-router-dom";
import style from "./TodoListItem.module.css";

export default function RightIcon() {
  return (
    <Link to={`/work`} className={`${style.Link} ${style.Icon}`}>
      &rsaquo;
    </Link>
  );
}
