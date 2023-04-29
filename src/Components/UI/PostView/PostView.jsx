import React from 'react'
import classes from './PostView.module.css'
import NewInput from '../NewInput/NewInput'

const PostView = ({content, date}) => {
  return (
    <div className={classes.post_view}>
        <div>
            {content}
        </div>
        <div>
            {date}
        </div>
        <NewInput type="button" value="Delete" onClick={() => {}}/>
    </div>
  )
}

export default PostView