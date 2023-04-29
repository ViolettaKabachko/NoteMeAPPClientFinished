import React, {useState} from 'react'
import NewInput from '../Components/UI/NewInput/NewInput'
import { sendData } from '../fetch'

const Register = () => {
    const [nick, setNick] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState("")
    const [message, setMessage] = useState("")

    return (
        <div>
            <div>
                <NewInput placeholder="Nick name" type="text" value={nick} onChange={e => {setNick(e.target.value)}}/>
                <NewInput placeholder="Email" type="text" value={email} onChange={e => {setEmail(e.target.value)}}/>
                <NewInput placeholder="Age" type="text" value={age} onChange={e => {setAge(e.target.value)}}/>
                <NewInput placeholder="Password" type="password" value={password} onChange={e => {setPassword(e.target.value)}}/>               
                <NewInput type="button" text="Register" onClick={async () => {
                    let res = await sendData('http://127.0.0.1:5000/register', {
                    nick,
                    email,
                    password,
                    age}, 'register')
                    setAge(""); setEmail(""); setNick(""); setPassword(""); setMessage(res.msg)
                    }}/>
            </div>
            <div>               
                <h3 style={{margin: 10}}>{message}</h3>
            </div>
        </div>
    )
}

export default Register