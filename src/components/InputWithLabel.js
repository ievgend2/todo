import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

export default function InputWithLabel(props, isFocused, className) {
  InputWithLabel.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
    todoTitle: PropTypes.string,
    className: PropTypes.string,
    handleTitleChange: PropTypes.func,
  };

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
        placeholder="What is on your mind?"
        ref={inputRef}
      ></input>
    </>
  );
}
