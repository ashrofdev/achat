import React from 'react'
import MessageArea from './MessageArea'
import Friends from './Friends'
import './body.css'

const Body = ({name, users}) => {
    return (
        <div className="content">
            <Friends users={users}/>
            <MessageArea name={name}/>
        </div>
    )
}
export default Body