import React from 'react'
import './landing.css'
import Signin from './Signin'
import Register from './Register';

const LandingPage = ({onrouteChange, onSubmitRegister}) => {
    return (
        <div className="home-page">
            <Signin onrouteChange={onrouteChange}/>
            <Register onSubmitRegister={onSubmitRegister}/>
        </div>
    )
}
export default LandingPage