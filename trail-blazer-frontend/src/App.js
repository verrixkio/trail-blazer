    
import './App.css';

import React from 'react'
// import ListsContainer from './components/ListsContainer';


import './css/application.css';
import ListsContainer from './components/ListsContainer';
import MapContainer from './components/mapContainer';
import TopBar from './components/TopBar';
import CommentBar from './components/CommentBar';
import BottomBar from './components/BottomBar';
import MultiStepForm from './components/MultiStepForm';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import TrailFullInfo from './components/TrailFullInfo';
import TrailDonations from './components/TrailDonations';
import TrailFixRequests from './components/TrailFixRequests';
import TrailComments from './components/TrailComments';
import LandingContent from './components/LandingContent';

import { BrowserRouter as Router, Route} from "react-router-dom";

function Index() {
  
  return (

      <div className="primary">
        
        <TopBar />

<main className="primary__main">
  <div className="container-fluid reset">
    <div className="row">

      <div className="col-sm-12">
      
        <div className="iframe-rwd">

          <MapContainer />

        </div>

      </div> 

      </div> 
          
      <div className="col-sm-12">
      
        <div className="trail">
        
          {/* <ListsContainer /> */}

        </div>

      </div>
      
    </div>
  
</main>

<BottomBar />

</div>
);
}

function About() {
  return (
  
    <div className="primary">
        
      <TopBar />

      <main className="primary__main">
        <div className="container-fluid">
          <div className="row">

            <div className="col-sm-12">
              <h1>Donations, Requests to fix, Comments, Full Trail Info</h1>
            </div>
            
          </div>
          <div className="row">

            <div className="col-sm-4">
              <div className="trail__info">
                    
                  <TrailFullInfo />

              </div>
            </div>
              
            <div className="col-sm-4">
              <div className="trail__requests">
                  
                <TrailDonations />

              </div>
            </div>

            <div className="col-sm-4">
              <div className="trail__donations">
                    
                <TrailFixRequests />
                

              </div>
            </div>
            
          </div>
          <CommentBar />
        </div>
      </main>
     
      <BottomBar />

    </div>
  );
}

function Login() {
  return (
  
    <div className="primary">

      <main className="primary__main">
        <div className="container-fluid">
          <div className="row">

            <div className="col-sm-4">
              &nbsp;
            </div> 
              
            <div className="col-sm-4">
              <h1>Login</h1>
              <div className="web-form">
                  
                <LoginForm />

              </div>
            </div>

            <div className="col-sm-4">
              &nbsp;
            </div>
            
          </div>
        </div>
      </main>

    </div>
  );
}
function Register() {
  return (
  
    <div className="primary">

      <main className="primary__main">
        <div className="container-fluid">
          <div className="row">

            <div className="col-sm-4">
              &nbsp;
            </div> 
              
            <div className="col-sm-4">
              <h1>Register</h1>  
              <div className="web-form">
                  
                <SignUpForm />

              </div>
            </div>

            <div className="col-sm-4">
              &nbsp;
            </div>
            
          </div>
        </div>
      </main>

    </div>
  );
}

function FormExample() {
  return (
  
    <div className="primary">

      <TopBar />

      <main className="primary__main">
        <div className="container-fluid">
          <div className="row">

            <div className="col-sm-4">
              &nbsp;
            </div>
              
            <div className="col-sm-4">
              <h1>Multi-Step Form</h1>
              <div className="web-form">
                  
                <MultiStepForm />

              </div>
            </div>

            <div className="col-sm-4">
              &nbsp;
            </div>
            
          </div>
        </div>
      </main>

      <BottomBar />

    </div>
  );
}

function AppRouter() {
  return (
    <Router>
      <div>
      {/*
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
      */}

        <Route path="/" exact component={Index} />
        <Route path="/trail/" component={About} />
        <Route path="/login/" component={Login} />
        <Route path="/register/" component={Register} />
        <Route path="/form-example/" component={FormExample} />
      </div>
    </Router>
  );
}

export default AppRouter;
