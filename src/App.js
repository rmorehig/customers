import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomeContainer from './components/HomeContainer';

class App extends Component {

  renderHome = () => <h1>Home</h1>;

  renderCustomerContainer = () => <h1>Customer Container</h1>;

  renderCustomerListContainer = () => <h1>Customer List Container</h1>;

  renderCustomerNewContainer = () => <h1>Customer New Container</h1>;

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/customers/new" component={this.renderCustomerNewContainer}/>
            <Route exact path="/customers/:dni" component={this.renderCustomerContainer}/>
            <Route exact path="/customers" component={this.renderCustomerListContainer}/>  
            <Route exact path="/" component={HomeContainer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
