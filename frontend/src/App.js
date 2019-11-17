import React, {Component} from 'react';
import './styles/App.css';
import logo from './aah-logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterList from './components/FilterList';
import Table from './components/Table';

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
          <div className="App-header-logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div class="App-header-title">
            <h1>Action Against Hunger</h1>
            <h2>Data Scan Visualization Dashboard</h2>
          </div> 
        </header>
        <main className="App-main">
          <FilterList></FilterList>
          <Table></Table>
        </main>  
      </div>
    );
    }
  }

export default App;