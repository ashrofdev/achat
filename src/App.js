import React from 'react';
import Head from './components/Head';
import Body from './components/Body';
import './App.css';
import LandingPage from './components/LandingPage';
import LandingPageAnime from './components/LandingPageAnime';



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      name: '',
      route: 'signin',
      users: []
    }
  }
  componentDidMount(){
    setTimeout(() => {
      fetch('https://cryptic-cliffs-40445.herokuapp.com/users').then((response)=>{
          return response.json()
      }).then((data)=>{
        this.setState({users: data})
      })
    }, 10000);
    
  }
  
  onrouteChange = async () =>{
    let details = {
      name: document.querySelector('.name').value,
      password: document.querySelector('.pin').value
    }
    const loader = document.createElement('p')
    loader.classList.add('loader')
    document.querySelector('.signin').appendChild(loader)
    await fetch('https://cryptic-cliffs-40445.herokuapp.com/users').then(response=>{
      return response.json()
    }).then(data=>{
      console.log(data, '........')
      const isValid = function() {
        for (var i = 0; i < data.length; i++) {
          if (details.name === data[i].name && details.password === data[i].password) {
            return true
          } 
        }
      }
      if (isValid()) {
        loader.remove()
        console.log(55555555555)
        this.setState({route: 'home'})
        this.setState({name: details.name})
      } else {
        loader.remove()
          const err = document.createElement('p')
          err.classList.add('err')
          err.textContent = 'Authentication failed'
          document.querySelector('.signin').appendChild(err)
      }
    }).catch((error)=>{
      const err = document.createElement('p')
      err.classList.add('err')
      err.textContent = '(Network error)'
      document.querySelector('.signin').appendChild(err)
      loader.remove()
    })
    
  }
  onSubmitRegister = () => {
        const domEl = {
          email: document.querySelector('.register .email').value,
          password: document.querySelector('.register .rpassword').value,
          name: document.querySelector('.register .rname').value
        }
    if(domEl.email !== '' && domEl.password !== '') {
        fetch('https://cryptic-cliffs-40445.herokuapp.com/register', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            email: document.querySelector('.register .email').value,
            password: document.querySelector('.register .rpassword').value,
            name: document.querySelector('.register .rname').value
          })
        })
        this.setState({route: 'home'})
        this.setState({name: document.querySelector('.register .rname').value})
    }else {
      const err = document.createElement('p')
      err.classList.add('err')
      err.textContent = 'Please fill out the forms'
      document.querySelector('.register').appendChild(err)
    }

    
    
  }
  render(){
    return (
      <div className="App">
        <Head />
        <LandingPageAnime/>
        {
          this.state.route === 'signin'?
              <div>
                <LandingPage onrouteChange={this.onrouteChange} 
                state={this.state} onSubmitRegister={this.onSubmitRegister}/>
              </div>
          :
            <div>
              <Body name={this.state.name} users={this.state.users}/>
            </div>
        }
      </div>
    );
  }
}

export default App;
