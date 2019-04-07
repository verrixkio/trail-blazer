    
import React from 'react'
import './css/application.css';
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

import TrailFixRequestDisplay from './components/TrailFixRequestDisplay'


import TrailComments from './components/TrailComments';
import LandingContent from './components/LandingContent';
import IndividualTrailFull from './components/IndividualTrailFull';
import TrailPopup from './components/TrailPopup';


import { BrowserRouter as Router, Route} from "react-router-dom";

class Index extends React.Component {
  
    render() {
      
      return (
        <div className="primary">
            
          <TopBar />
    
          <main className="primary__main reset">

            <div className="iframe-rwd">
    
              <MapContainer />
    
            </div>
          
          </main>
          
          <BottomBar />
          
        </div>
    );  
  }
}

function Trail() {
  return (
    
    <div className="primary">
        
      <TopBar />

      <main className="primary__main">
        <div className="container-fluid">
          
          <div className="row">

            <div className="col-sm-12 col-md-6">
              <div className="trail">
                    
                <TrailFullInfo />
                
                <div className="lists-container trail__comments">
                  
                  <CommentBar />
                  <TrailComments />

                </div>

              </div>
            </div>
              
            <div className="col-sm-12 col-md-6">
              <div className="trail">
                  
                <TrailFixRequests />
                <TrailFixRequestDisplay />

              </div>
            </div>
            
          </div>

        </div>
      </main>
     
      <BottomBar />

    </div>
  );
}

function Landing() {
  return (
  
    <div className="primary">

      <main className="primary__main">
        <div className="container-fluid">
          <div className="row">

            <div className="col-sm-3">
              &nbsp;
            </div> 
              
            <div className="col-sm-6">
              
              <LandingContent />

            </div>

            <div className="col-sm-3">
              &nbsp;
            </div>
            
          </div>
        </div>
      </main>

    </div>
  );
}

function Login() {
  return (
  
    <div className="primary">

      <main className="primary__main">
        <div className="container-fluid">
          <div className="row">
          
            <div className="col-sm-12">
              <h3 className="logo-sml">Trail Blazers</h3>
              <div className="push-menu reverse">
                <a href="/register" className="left">Register</a>
                <a href="/login" className="right">Login</a>
              </div>
            </div>
          
          </div>  
        
          <div className="row form-row">

            <div className="col-sm-3">
              &nbsp;
            </div> 
              
            <div className="col-sm-6">
              
              <div className="web-form">
                  
                <LoginForm />

              </div>
            </div>

            <div className="col-sm-3">
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
          
        <div className="col-sm-12">
          <h3 className="logo-sml">Trail Blazers</h3>
          <div className="push-menu">
            <a href="/register" className="left">Register</a>
            <a href="/login" className="right">Login</a>
          </div>
        </div>
      
      </div>  
    
      <div className="row form-row">

            <div className="col-sm-3">
              &nbsp;
            </div> 
              
            <div className="col-sm-6">
              <div className="web-form">
                  
                <SignUpForm />

              </div>
            </div>

            <div className="col-sm-3">
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

function FullInfo() {
  return (
  
    <div className="primary">
        
      <TopBar />

      <main className="primary__main">
        <div className="container-fluid">
          
          <div className="row">

            <div className="col-sm-12 col-md-6">
              <div className="trail">
                    
                <TrailFullInfo />

                <div className="lists-container trail__comments">
                  <CommentBar />
                  <TrailComments />
                </div>

              </div>
            </div>
              
            <div className="col-sm-12 col-md-6">
              <div className="trail">
                        
                <TrailFixRequests />
                <TrailFixRequestDisplay />
                <IndividualTrailFull />

              </div>
            </div>
            
          </div>
          {/*  <CommentBar />
          <TrailComments /> */} 

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
        <Route path="/" exact component={Index} />
        <Route path="/trail/" component={Trail} title="Trail Page" />
        <Route path="/:id" component={FullInfo} />
        <Route path="/landing" exact component={Landing} />
        <Route path="/login/" component={Login} />
        <Route path="/register/" component={Register} />
        <Route path="/form-example/" component={FormExample} />
      </div>
    </Router>
  );
}

export default AppRouter;
