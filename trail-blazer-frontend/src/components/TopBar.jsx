import React, { Component } from 'react';

class TopBar extends Component {
  render() {
    return (
      <header className="primary__top-bar">  
        
        <div className="tagline">
          <a href="/" className="logo">Trail Blazers</a>
          <p><span>Do you know of a mountain bike trail you would like to see fixed in your community?</span> Invest in your community and donate to help maintain a bike trail.</p>
        </div>
      </header>
    );
  }
}
export default TopBar;