import React, { Component } from 'react';
import './App.css';
import ListsContainer from './components/ListsContainer';
import GoogleApiWrapper from './Map';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello Hiplyst!</h1>
        </header>
        <GoogleApiWrapper />
        <ListsContainer />
      </div>
    );
  }
}

 
export default App;
