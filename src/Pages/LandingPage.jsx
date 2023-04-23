import React from 'react'
import Navbar from '../Components/UI/Navbar/Navbar'
import NewInput from '../Components/UI/NewInput/NewInput'
import { redirect } from '../fetch'

const LandingPage = () => {
    
    
    if (localStorage.getItem("access_key")) {
      redirect('/users_page')
    }
    else {
      return (
        <div>
          <Navbar/>
          <div>
            
          </div>
  
          <div>
            <NewInput type="button" onClick={() => redirect('/login')} text="Login"/>
            <NewInput type="button" onClick={() => redirect('/register')} text="Register"/>
          </div>
            
        </div>
      )
    }
    
}

export default LandingPage

