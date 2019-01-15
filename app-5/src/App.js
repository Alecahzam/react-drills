import React, { Component } from 'react';
import './App.css';
import Image from "./Img";

class App extends Component {
  render() {
    return (
      <div className= "App">
        <Image myImage = {"https://static1.fjcdn.com/comments/Gtmarios+fw+he+sees+luigi+in+mario+kart+8+_6394788a5bf7139122bc58ff4d8a521c.png"}/>
      </div>
    );
  }
}

export default App;
