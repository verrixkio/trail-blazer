import React, { Component } from 'react';
import './App.css';
import ListsContainer from './components/ListsContainer';
import map from './images/trail-demo-image.jpg';
import './css/application.css';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
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
                    <img src={map} alt="logo" />
                  </div>
      
                </div> 
                  
                <div className="col-sm-4 col-sm-pull-8 left">
                
                  <div className="trail">
                  
                    <ListsContainer />
                      
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
  
          <div className="msg-panel msg-panel--from-right js-msg-panel-main">
            <div className="msg-panel__container">
              <div className="msg-panel__content">
                
                <a href="#0" className="msg-panel__close js-cd-close">Close</a>
                
                <h2>Header Level 2</h2>
  
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        
              </div>
            </div> 
          </div>
  
        </div>
      );
    }

function About() {
  return <h2>Donations, Requests to fix, Comments, Full Trail info </h2>;
}

function Login() {
  return <h2>Login</h2>;
}

function Register() {
  return <h2>Register</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/trail/">Trail</Link>
            </li>
            <li>
              <Link to="/login/">Login</Link>
            </li>
            <li>
              <Link to="/register/">Register</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/trail/" component={About} />
        <Route path="/login/" component={Login} />
        <Route path="/register/" component={Register} />
      </div>
    </Router>
  );
}

export default AppRouter;

