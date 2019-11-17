import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardText, CardBody, CardTitle, CardImg, CardSubtitle, Button} from 'reactstrap'


  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        greeting: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Once user is authenticated and data files are loaded, look for the JSON files in each child's folder and generate state object for that. The key is the QR code, and the value is an object which has key-value pairs for each of the JSON values we want, for example:

    // MH_WHH_0123: {
    //   deeplinkPath: 'dir/filename',
    //   consentExists: false,
    //   consentLegible: false,
    //   isTestData: false,
    //   isValidated: false,
    //   pose: {
    //     standing: false,
    //     lying: true,
    //     notAvailable: false
    //   },
    //   angle: {
    //     front: true,
    //     back: true,
    //     '360': false,
    //   }
    // }
    
    // If any of the folders are missing the JSON file, call GenerateJson with that folder and the data contained in it. We are returned the object from that and then that object can be saved in state.

    // Later we will try to save the actual file into JSON format and push to back end (alternatively save on Data Scientist's computer and upload at later time)

    handleChange(event) {
      this.setState({ name: event.target.value });
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
