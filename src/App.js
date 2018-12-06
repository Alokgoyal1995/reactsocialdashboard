import React, { Component } from 'react';
import './App.css';
import Facebook from './components/Facebook';
import Signout from './components/Signout';
import Google from './components/Google';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home";

class App extends Component {
  render() {
    console.log("this0", this.props)
    return (

      <BrowserRouter>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/dashboard" component={Dashboard} />

        </Switch>

      </BrowserRouter>

    );
  }
}

export default App;
