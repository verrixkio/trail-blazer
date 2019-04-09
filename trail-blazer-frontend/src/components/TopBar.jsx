import React, { Component } from 'react';

class TopBar extends Component {
  render() {
    return (
      <header className="primary__top-bar">  
        <ul className="nav navbar-nav">
            <li>
              <a href="/"><i className="fa fa-map"></i>View Trails</a>
            </li>
            <li>
              <a href="/trail/"><i className="fa fa-map-marker"></i>My Trails</a>
            </li>
            <li>
              <a href="/form-example/"><i className="fa fa-user"></i>My Account</a>
            </li>
        </ul>
        <div className="tagline">
          <a href="/" className="logo">Trail Blazers</a>
          <p><span>Assisting communities in repairing and maintaining mountain biking trail systems.</span></p>
        </div>
      </header>
    );
  }
}
export default TopBar;