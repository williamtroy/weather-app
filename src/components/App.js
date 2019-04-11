import React, { Component } from 'react';
import Layout from './Layout/Layout';
import Search from './Search/Search';
import WeatherForecast from './WeatherForecast/WeatherForecast';
import { Route, Switch, Redirect } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/city/:queryString" exact component={WeatherForecast} />
          <Redirect from="*" to="/" />
        </Switch>
      </Layout>      
    );
  }
}

export default App;
