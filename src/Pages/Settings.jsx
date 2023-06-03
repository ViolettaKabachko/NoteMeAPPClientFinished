import React, { useState } from 'react'
import NewInput from '../Components/UI/NewInput/NewInput'
import { sendData, updateAvatar, getDataByToken } from '../fetch'
import Navbar from '../Components/UI/Navbar/Navbar'
import { redirect } from '../fetch'

const Settings = () => {
    const [nickname, setNickname] = useState("")
    const [nicknameRes, setNicknameRes] = useState("")
    const [avatar, setAvatar] = useState("")
    const [avatarRes, setAvatarRes] = useState("")
    return (
        <div>
            <Navbar/>
            <div>
                <p>Change nickname</p>
                <NewInput placeholder="New nickname" type='input' value={nickname} onChange={(e) => setNickname(e.target.value)}/>
                <NewInput text='Submit' type='button' onClick={async() => 
                    {   if (nickname === localStorage.getItem("current_nick")) {
                        alert("New nick should be different")
                    }
                    else {
                        let res = await sendData('http://127.0.0.1:5000/update_nickname', {nickname}, 'update')
                        setNicknameRes(res.data.msg)
                    }
                    }}/>
            </div>
            <div>
                {nicknameRes === 'Uploaded' ? <p style={{color: "#34eb8c"}}>{nicknameRes}</p> : <p style={{color: "#eb3458"}}>{nicknameRes}</p>}
            </div>
            <div>
                <br></br>
            </div>
            <div>
                <p>Change avatar</p>
                <NewInput type='file' accept="image/*" onChange={(e) => setAvatar(e.target.files[0])}/>
                <NewInput type='button' text='Upload avatar' onClick={async () => {
                    const data = new FormData()
                    data.append('avatar', avatar);
                    let res = await updateAvatar('http://127.0.0.1:5000/update_avatar', data)
                    setAvatarRes(res.data.msg)
                }}/>
            </div>      
            <div>
                {avatarRes === 'Uploaded' ? <p style={{color: "#34eb8c"}}>{avatarRes}</p> : <p style={{color: "#eb3458"}}>{avatarRes}</p>}
            </div>
            <div>
                <NewInput type="delete_button" text="Logout" onClick={async() => {
                    await getDataByToken('http://127.0.0.1:5000/logout');
                    localStorage.clear();
                    redirect('/')
                }}/>
            </div>
        </div>
    )
}

export default Settings