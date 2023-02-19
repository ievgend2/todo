import React, { useRef, useEffect } from "react";

export default function InputWithLabel(props, isFocused, className) {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) inputRef.current.focus();
  }, [isFocused]);

  return (
    <>
      <label htmlFor="todoTitle">{props.children}</label>
      <input
        className={props.className}
        value={props.todoTitle}
        onChange={props.handleTitleChange}
        ref={inputRef}
      ></input>
    </>
  );
}
