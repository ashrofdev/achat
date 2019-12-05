import React from 'react'
import './register.css'



const Register = ({onSubmitRegister}) =>{
    return (
        <div className="signin register">
            <h1>Register</h1>
            <input className="rname" placeholder="Username"/>
            <input className="email" placeholder="Email"/>
            <input className="rpassword" type="password" placeholder="Password"/>
            <button onClick={onSubmitRegister}>Register</button>
        </div>
    )
}
export default Register