import React from 'react'
import classes from './NewInput.module.css'

const NewInput = ({onClick, onChange, text, value, type, placeholder}) => {
  if (type === "button") {
    return (
      <div>
          <input value={text} type={type} className={classes.button} onClick={onClick}></input>
      </div>
    )
  }
  else if (type === 'textarea') {
    return (
      <div>
        <textarea value={value} onChange={onChange} className={classes.input} placeholder={placeholder}></textarea>
      </div>
    )
  }
  return (
    <div>
        <input placeholder={placeholder} value={value} type={type} className={classes.input} onChange={onChange}></input>
    </div>
  )
}

export default NewInput