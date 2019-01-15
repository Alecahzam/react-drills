import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      smashMains: ["Palutena",
      "Lucina",
      "ZSS",
      "Corrin",
      "Ike"
      ]
    }
  }
  render() {
    let mainsToShow = this.state.smashMains.map((e,i) => {
      return (
      <h2 key = { i} > {e} </h2>
    )
  })
 
return (
  <div className = "App">
  {mainsToShow}
  </div>
)
}
}
    

export default App;
