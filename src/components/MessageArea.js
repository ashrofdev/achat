import React, { Component } from 'react'
import './message.css'
import MessageList from './MessageList'


class MessageArea extends Component {
    constructor(props){
        super(props)
        this.state ={
            messages: [],
            length: 0
        }
    }
    componentDidMount(){
        setInterval(async() => {
            await fetch('https://cryptic-cliffs-40445.herokuapp.com/messages').then((response)=>{
                return response.json()
            }).then((data)=>{
                this.setState({messages: data})
                setTimeout(() => {
                    this.setState({length: data.length})
                }, 1000);
                if(data.length > this.state.length) {
                    document.querySelector('audio').play()
                    document.querySelector('.message-list').scrollBy(0,10000)
                }
            })
        }, 1000);
        document.querySelector('input').addEventListener('keypress', (e)=>{
            if (e.key==='Enter') {
                this.onclick()
            }
        })
    }
     onclick= async ()=>{
        const loader = document.createElement('p')
        loader.classList.add('loader', 'loaderm')
        document.querySelector('.message-list').appendChild(loader)
        console.log(document.querySelector('input').value)
        await fetch('https://cryptic-cliffs-40445.herokuapp.com/send-message', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            name: this.props.name,
            message: document.querySelector('input').value
          })
        }).catch((err)=>{
            loader.remove()
        })
        loader.remove()
        await fetch('https://cryptic-cliffs-40445.herokuapp.com/messages').then((response)=>{
            return response.json()
        }).then((data)=>{
            this.setState({messages: data})
        })
        document.querySelector('input').value = ''
        document.querySelector('.message-list').scrollBy(0,10000)
    }

    render(){
        return (
            <div className="message">
                <div className="message-list">
                    <MessageList details = {this.state.messages}/>
                </div>
                <div className="form">
                    <input placeholder="Enter message"/>
                    <button onClick={this.onclick}>Send</button>
                </div>
                <audio>
                    <source src={require('./alert.m4a')}/>
                </audio>
            </div>
        )
    }
}
export default MessageArea