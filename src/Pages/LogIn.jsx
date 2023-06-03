import React, {useState} from 'react'
import { sendData } from '../fetch'
import NewInput from '../Components/UI/NewInput/NewInput'
import { redirect } from '../fetch'

const LogIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

        if (localStorage.getItem("access_token")) {
            redirect('/users_page')
        }

    return (
        <div>
            <NewInput placeholder="email" value={email} type="text" onChange={(e) => setEmail(e.target.value)}/>
            <NewInput placeholder="password" value={password} type="password"  onChange={(e) => setPassword(e.target.value)}/>
            <NewInput text="Log In" type="button" onClick={async () => {
                let res = await sendData("http://127.0.0.1:5000/login", {email, password}, 'login')                   
                if (res.status === 200) {
                    redirect('/users_page')
                }           
                else {
                    setPassword("")
                    setEmail("")
                    setError(res.data.msg)
                }
                }}/>        
        <h3 style={{margin: 10}}>{error}</h3>
        <a style={{marginLeft: "10px", color: "#3dcc91"}} href='/'>Back</a>
        </div>
  )
}

export default LogIn