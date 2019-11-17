import React, {Component} from 'react';
import './styles/App.css';
import logo from './aah-logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterList from './components/FilterList';
import Table from './components/Table';

import GenerateJsonObject from './components/GenerateJsonObject';

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        greeting: '',
        Consent: false,
        RGB: false,
        PCD: false,
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
      // Once user is authenticated and data files are loaded, look for the JSON files in each child's folder and generate state object for that. The key is the QR code, and the value is an object which has key-value pairs for each of the JSON values we want.
      const testPath = '';
      searchForJson(testPath);
    }
    
    handleChange(event) {
      const filterTitle = event.currentTarget.name;
      let toggleBoolean = true;
      if (this.state[filterTitle]) {
        toggleBoolean = false;
      } else {
        toggleBoolean = true;
      }
      this.setState({ [filterTitle]: toggleBoolean });
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
          <div className="App-header-logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="App-header-title">
            <h1>Action Against Hunger</h1>
            <h2>Data Scan Visualization Dashboard</h2>
          </div> 
        </header>
        <main className="App-main">
          <FilterList handleChange={this.handleChange}></FilterList>
          <Table></Table>
        </main>  
      </div>
    );
    }
  }

function searchForJson(pathToData) {
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

function createObjectFromJson(pathToData) {
  // If any of the folders are missing the JSON file, call GenerateJson with that folder and the data contained in it. We are returned the object from that and then that object can be saved in state.

  // Later we will try to save the actual file into JSON format and push to back end (alternatively save on Data Scientist's computer and upload at later time)
  
  const newJsonObject = {};
}

export default App;
