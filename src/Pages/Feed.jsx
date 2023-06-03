import React, {useState, useEffect} from 'react'
import { getDataByToken } from '../fetch'
import PostView from '../Components/UI/PostView/PostView'
import Navbar from '../Components/UI/Navbar/Navbar'

const Feed = () => {
  const [posts, setPosts] = useState([])

  const getPosts = () => {
    getDataByToken("http://127.0.0.1:5000/get_all_posts").then(result => {
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
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        {posts ? posts.map(post => <PostView content={post[1]} date={post[3]} key={post[0]} advancedInfo={post[2]}/>): []}
      </div>
    </div>
  )
}

export default Feed