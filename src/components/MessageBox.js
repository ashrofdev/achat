import React from 'react'

const MessageBox =({name, message, time})=> {
    return (
        <div className="message-box">
            <span>{name}</span>
            <p>{message} <span className="time">{time}</span></p>
        </div>
    )
    
}

export default MessageBox