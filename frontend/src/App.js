import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardText, CardBody, CardTitle, CardImg, CardSubtitle, Button} from 'reactstrap'

import listReactFiles from 'list-react-files'
import * as fs from 'fs';

import GenerateJsonObject from GenerateJsonObject;

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        greeting: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.searchForJson = this.searchForJson.bind(this);
      this.createObjectFromJson = this.createObjectFromJson.bind(this);
    }

    searchForJson(pathToData) {
      // If any of the folders are missing the JSON file, call GenerateJson with that folder and the data contained in it. We are returned the object from that and then that object can be saved in state.

      // Scan through the top level of data and get all the QR codes. For each one, check if the JSON file is there.
      // TODO: Use list-react-files or fs to scan through the files and get QR codes?

      const jsonPath = 'data/pathToData/.json';
      const qrCode = 'MH_WHH_0123';

      if (jsonPath) {
        createObjectFromJson(pathToData)
      } else {
        GenerateJsonObject(qrCode)
      }
    }

    createObjectFromJson(pathToData) {
      // If any of the folders are missing the JSON file, call GenerateJson with that folder and the data contained in it. We are returned the object from that and then that object can be saved in state.

      // Later we will try to save the actual file into JSON format and push to back end (alternatively save on Data Scientist's computer and upload at later time)
    }
    
    componentDidMount() {
      // Once user is authenticated and data files are loaded, look for the JSON files in each child's folder and generate state object for that. The key is the QR code, and the value is an object which has key-value pairs for each of the JSON values we want.
      const testPath = '';
      searchForJson(testPath);
    }
    
    handleChange(event) {
      const tryRequire = (path) => {
        this.setState({ name: event.target.value });
      };
    }
  
    handleSubmit(event) {
      event.preventDefault();
      
      fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
        .then(response => response.json())
        .then(state => this.setState(state));
    }
  render() {  
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Enter your name: </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.greeting}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
    }
  }


export default App;
