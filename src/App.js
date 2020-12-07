import React from 'react';
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import MyCart from './components/MyCart';

function App() {
  return(
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/cart' component={MyCart} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
