import React from 'react';
import './App.css';
import {Link, BrowserRouter as Router} from 'react-router-dom'
import AppFrame from './components/AppFrame';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/customers">Customers</Link>
        <Link to="/customers/30000">Customers 30000</Link>
      </div>
    </Router>
  );
}

export default App;
