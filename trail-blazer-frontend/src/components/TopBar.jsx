import React, { Component } from 'react';

class TopBar extends Component {
  render() {
    return (
      <header className="primary__top-bar">  
        <a href="/"><img src={require("../images/trail-blazer-logo.png")} alt="logo" className="image" ></img></a>
        <ul className="nav navbar-nav">
            <li>
              <a href="/"><i className="fa fa-map"></i><span>View Trails</span></a>
            </li>
            <li>
              <a href="/trail/"><i className="fa fa-map-marker"></i><span>My Trails</span></a>
            </li>
            <li>
              <a href="/form-example/"><i className="fa fa-user"></i><span>My Account</span></a>
            </li>
        </ul>
      </header>
    );
  }
}
export default TopBar;