import React from 'react'
import classes from './PostView.module.css'
import NewInput from '../NewInput/NewInput'
import { getDataByToken } from '../../../fetch'

const PostView = ({content, date, advancedInfo, idKey}) => {
  return (
    <div className={classes.post_view}>
        <div>
            <p>{content}</p>
        </div>
        <div>
            <p>{date}</p>
        </div>
        <div>
          {advancedInfo ? <p>By {advancedInfo}</p>: <div></div>}
        </div>
        
        {!advancedInfo ? <NewInput type="delete_button" text="Delete" onClick={async (e) => 
          {let res = await getDataByToken(`http://127.0.0.1:5000/delete_post/${idKey}`)
            alert(res.data.msg)
          }
        }
          />: <div></div>}
    </div>
  )
}

export default PostView