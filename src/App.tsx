import React, { Component } from 'react';
import { Login } from './Login';
import { Main } from './Main';
import { proxy } from './Proxy';

export default class App extends Component
{
  state = { showLoggedIn: true };

  render()
  {
    return (
      <div className="app">
        { this.state.showLoggedIn? <Login /> : <Main /> }
      </div>
    );
  }
  
  componentDidMount()
  {
    proxy.addEventListener( "login", () => { this.setState( { showLoggedIn: false } ) } );
  }

 

}