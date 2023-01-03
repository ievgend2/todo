import React, { useRef, useEffect } from 'react'

export default function InputWithLabel(props, isFocused) {


    const inputRef = useRef()

    useEffect(() => {
        if(isFocused && inputRef.current)
      inputRef.current.focus()

    }, [isFocused])
    
  return (
    <>
    <label htmlFor="todoTitle">{props.children}</label>
    <input value={props.todoTitle} onChange={props.handleTitleChange} ref={inputRef}></input>
    </>
  )
}
