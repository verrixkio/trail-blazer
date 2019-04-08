    
import React from 'react'
import './css/application.css';
import MapContainer from './components/mapContainer';
import TopBar from './components/TopBar';
import CommentBar from './components/CommentBar';
import BottomBar from './components/BottomBar';
import MultiStepForm from './components/MultiStepForm';
import TrailFullInfo from './components/TrailFullInfo';
import TrailFixRequests from './components/TrailFixRequests';
import TrailFixRequestDisplay from './components/TrailFixRequestDisplay'
import TrailComments from './components/TrailComments';
import IndividualTrailFull from './components/IndividualTrailFull';

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

            <div className="col-sm-12 col-md-6 left">
              <div className="trail">

                <TrailFullInfo />
                    
                <div className="lists-container trail__comments">
                    
                  <CommentBar />
                  <hr />
                  <TrailComments />

                </div>


              </div>
            </div>
              
            <div className="col-sm-12 col-md-6 right">
              <div className="trail">

                <IndividualTrailFull />

              </div>
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
        <Route path="/" exact component={Index} />
        <Route path="/form-example/" component={FormExample} />
        <Route path="/:id" component={FullInfo} />
      </div>
    </Router>
  );
}

export default AppRouter;