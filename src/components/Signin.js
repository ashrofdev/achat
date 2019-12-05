import React from 'react'
import './signin.css'

const showRegister = ()=>{
    document.querySelector('.register').classList.add('show')
    document.querySelector('.signin').classList.add('go')
    setTimeout(() => {
        document.querySelector('.signin').classList.add('ani')
    }, 300);
}

const Signin = ({onrouteChange}) => {
    return (
        <div className="signin">
            <h1>Sign In</h1>
            <input className="name" placeholder="Username or Email"/>
            <input className="pin" type="password" placeholder="Password"/>
            <button onClick={onrouteChange}>Sign in</button>
            <span onClick={showRegister}>Register</span>
        </div>
    )
}
export default Signin