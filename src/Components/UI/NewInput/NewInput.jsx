import React from 'react'
import classes from './NewInput.module.css'

const NewInput = ({onClick, onChange, text, value, type, placeholder, accept}) => {
  if (type === "button") {
    return (
      <div>
          <input value={text} type="button" className={classes.button} onClick={onClick}></input>
      </div>
    )
  }
  else if (type === "delete_button") {
    return (
      <div>
          <input value={text} type="button" className={classes.delete_button} onClick={onClick}></input>
      </div>
    )
  }
  else if (type === 'textarea') {
    return (
      <div>
        <textarea rows="8" cols="40" value={value} onChange={onChange} className={classes.area} placeholder={placeholder}></textarea>
      </div>
    )
  }
  
  return (
    <div>
        <input placeholder={placeholder} value={value} type={type} className={classes.input} accept={accept} onChange={onChange}></input>
    </div>
  )
}

export default NewInput