import React, { Component } from 'react';
import {Route,withRouter} from 'react-router-dom';
import router from './routes';
import Home from './pages/Home/Home'
import routes from './routes';



class App extends Component {

  componentDidMount() {
    if (this.props.location.pathname==='/') {
      this.props.history.replace(routes.home);
    }
  }
  render() {
    return (
      <div className="App">
       <Route
       exact
       path={"/"}
       component={Home}
       />
       <Route
       path={router.home}
       component={Home}
       />
       
      </div>
    );
  }
}

export default withRouter(App);
