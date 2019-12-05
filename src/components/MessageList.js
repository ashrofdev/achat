import React from 'react'
import MessageBox from './MessageBox'

const MessageList =({details})=> {
    const messageBox = details.map((i,e) => {
        return <MessageBox key={details[e].id} name={details[e].name} message={details[e].message} time = { details[e].mtime} />
    });
    return (
        <div>
            {messageBox}
        </div>
    )

    
}

export default MessageList