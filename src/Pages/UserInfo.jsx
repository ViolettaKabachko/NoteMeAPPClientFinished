import React, {useState, useEffect} from 'react'
import { getDataByToken, sendData } from '../fetch'
import Navbar from '../Components/UI/Navbar/Navbar'
import classes from './UserInfo.module.css'
import NewInput from '../Components/UI/NewInput/NewInput'



const UserInfo = () => {
  const [nick, setNick] = useState("")
  const [email, setEmail] = useState("")
  const [post, setPost] = useState("")
  const [msg, setMsg] = useState("")

  useEffect(() => {
    getDataByToken("http://127.0.0.1:5000/@me").then(result => {
      if (result.status === 200) {
        setNick(result.data[1])
        setEmail(result.data[3])
      }
    })
   }, [])

    return (
      <div>
        <Navbar/>
        <div>
          <div>
              <img src={require("./p_ritsuko.png")} alt='Avatar'></img>
            </div>
            <div>
              <p className={classes.p}>Nick: {nick}</p>
            </div>
            <div>
              <p className={classes.p}>Email: {email}</p>
            </div>
            <div>
              <NewInput value={post} onChange={(e) => setPost(e.target.value)} placeholder="New post" type='textarea'/>
              <NewInput onClick={async () => {
                let res = await sendData('http://127.0.0.1:5000/upload_post', {text: post}, '')
                if (res.status === 200) {setPost("")} 
                setMsg(res.data.msg)
              }
                } 
                text="Publish" type='button'/>
            </div>
            <div>
              <h3>{msg}</h3>
            </div>
        </div>

        <div>
            
        </div>
      </div>
    )
}

export default UserInfo