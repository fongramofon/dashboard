import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from './components/AsyncComponent';
import './App.css';

import Layout from './containers/Layout/Layout';
import EmployeeList from './containers/EmployeeList/EmployeeList';
const AsyncAbout = asyncComponent(() => import('./containers/About/About'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/about" component={AsyncAbout}></Route>
            <Route path="/" exact component={EmployeeList}></Route>
            <Redirect to="/"/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
