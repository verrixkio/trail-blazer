import React, { Component } from 'react';

class TopBar extends Component {
  render() {
    return (
      <header className="primary__top-bar">  
        <a href="/"><img src={require("../images/trail-blazer-logo.png")} alt="logo" className="image" ></img></a>
       
      </header>
    );
  }
}
export default TopBar;