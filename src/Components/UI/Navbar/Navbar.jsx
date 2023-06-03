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
                    <a href="/feed">Feed</a>
                </div>  
                <div>
                    <a href="/users_page">Your page</a>
                </div>
                <div>
                    <a href="/settings">Settings</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
