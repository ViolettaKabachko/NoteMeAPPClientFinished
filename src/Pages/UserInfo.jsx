import React, {useState, useEffect} from 'react'
import { getDataByToken, sendData } from '../fetch'
import Navbar from '../Components/UI/Navbar/Navbar'
import classes from './UserInfo.module.css'
import NewInput from '../Components/UI/NewInput/NewInput'
import PostView from '../Components/UI/PostView/PostView'


const UserInfo = () => {
    const [nick, setNick] = useState("")
    const [email, setEmail] = useState("")
    const [post, setPost] = useState("")
    const [msg, setMsg] = useState("")
    const [posts, setPosts] = useState([])
    const [ava, setAva] = useState("")

    useEffect(() => {
      getDataByToken("http://127.0.0.1:5000/@me").then(result => {
        if (result.status === 200) {
          setNick(result.data[1])
          setEmail(result.data[3])
          localStorage.setItem("current_nick", result.data[1])
          if (result.data[4]) {
            setAva(result.data[4])
          }
        }
      })
    }, [])

    const getPosts = () => {
      getDataByToken("http://127.0.0.1:5000/get_posts").then(result => {
        if (result.status === 200) {
          setPosts(result.data)
        }
      })
    }
    useEffect(() => {
      getPosts()
    }, [])

    return (
      <div>
        <Navbar/>
        <div className={classes.main}>
          <div className={classes.user_info}>
              <div className={classes.ava}>
                {ava ? (<img src={ava} alt='Avatar'></img>): (<img src={require('./a1jvy5NO0-8 (1).jpg')} alt='Avatar'></img>)}                  
              </div>

                <div>
                  <p className={classes.p}>Nick: {nick}</p>
                </div>

                <div>
                  <p className={classes.p}>Email: {email}</p>
                </div>

                <div>
                  <NewInput value={post} onChange={(e) => setPost(e.target.value)} placeholder="New post" type='textarea'/>
                  <NewInput onClick={async (e) => {
                    if (post.trim().length < 10) {
                      alert('Zbyt krótki post, napisz coś jeszcze...')
                    }
                    else {
                      let res = await sendData('http://127.0.0.1:5000/upload_post', {text: post}, '')
                      if (res.status === 200) {setPost(""); getPosts()} 
                      setMsg(res.data.msg)
                    }
                  }
                    } 
                    text="Publish" type='button'/>
                </div>
              <div>
                <h3>{msg}</h3>
              </div>
          </div>
        <div className={classes.posts}>
          {posts ? posts.map(post => <PostView content={post[1]} date={post[3]} key={posts.indexOf(post)} idKey={post[0]}/>): []}
        </div>
        </div>
        
      </div>
    )
}

export default UserInfo