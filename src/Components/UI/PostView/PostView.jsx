import React from 'react'
import classes from './PostView.module.css'
import NewInput from '../NewInput/NewInput'

const PostView = ({content, date}) => {
  return (
    <div className={classes.post_view}>
        <div>
            <p>{content}</p>
        </div>
        <div>
            <p>{date}</p>
        </div>
        <NewInput type="button" text="Delete" onClick={() => {}}/>
    </div>
  )
}

export default PostView