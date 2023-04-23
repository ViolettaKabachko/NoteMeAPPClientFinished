import React from 'react'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div>
            <div className={classes.navbar}>
                <div>
                    <a href="/">NoteMe</a>
                </div>
                <div>
                    <a href="/login">Login</a>
                </div>  
                <div>
                    <a href="/users_page">Info</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
