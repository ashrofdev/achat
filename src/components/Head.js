import React from 'react'
import './head.css'
import Particles from 'react-particles-js';


const particlesOptions = {
    particles: {
      number: {
        value: 5
      }
    }
}

const Head = () => {
    return (
        <header className="header">
            <Particles className='particles'
            params={particlesOptions} />
            <div className="left">
                <h1 className="head"><span>A</span>-chat</h1>
                <p>The best chatting experience ever.</p>
            </div>
        </header>
    )
}
export default Head