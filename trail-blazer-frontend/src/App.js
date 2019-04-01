import React, { Component } from 'react';
import logo from './logo.svg';
import map from './images/trail-demo-image.jpg';
import './css/application.css';

class App extends Component {
  render() {
    return (
      <div className="primary primary--full-width">
        
      <header className="primary__top-bar">
      
        <a href="/" className="logo">Trail Blazers</a>
    
      </header>

      <main className="primary__main">

        <div className="container-fluid">
          
          <div className="row">

            <div className="col-sm-8 col-sm-push-4 right">
            
              <div className="iframe-rwd">
                <img src={map} className="App-logo" alt="logo" />
              </div>
  
            </div> 
              
            <div className="col-sm-4 col-sm-pull-8 left">
            
              <div className="trail">

                <button type="button" className="btn btn-primary cd-btn js-msg-panel-trigger" data-panel="main">Submit Request to Fix Trail</button>

              </div>

            </div>
            
          </div>

        </div>
        
      </main>

      <footer className="primary__btm-bar">

        <ul className="nav navbar-nav">
          <li>
            <a href="#">
              <i className="fa fa-map"></i>
              Search Trails
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-map-marker"></i>
              My Trails
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-user"></i>
              My Account
            </a>
          </li>
        </ul>

      </footer>

      </div>
    );
  }
}

export default App;
