import React, { Component } from 'react'
import './friends.css'



const Friends = ({users}) => {
    const List = users.map((i,e)=>{
            return (
                <div className="fri">
                    <div> {users[e].name} </div>
                    <span> {users[e].joined} </span>
                </div>
                
            )
    })

    return (
        <div className="friends">
            <h1 className="f-head">Users of Group chat</h1>
            <ol className="ol">
                    {List}
            </ol>
        </div>
    )
}
    
    
    
        
    


export default Friends