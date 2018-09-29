import React, { Component } from 'react';
import {Route,withRouter,NavLink} from 'react-router-dom';
import { Collapse, 
  Navbar, 
  NavbarToggler, 
  Nav, 
  NavItem } from 'reactstrap'
import router from './routes';
import Home from './pages/Home/Home'
import routes from './routes';
import Authors from './pages/Authors/Authors'
import PropTypes from 'prop-types';
import Post from './pages/Post/Post'
import Author from './pages/Author/Author'
import NewPost from './pages/NewPost/NewPost';



class App extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  }

  componentDidMount() {
    if (this.props.location.pathname==='/') {
      this.props.history.replace(routes.home);
      
    }
  }
  constructor() {
    super();
    this.state = {
      isToggleOpen : false,
    }
  }
  toggle = () => {
    this.setState({
      isToggleOpen : !this.state.isToggleOpen,
    });
  }
  render() {
    return (
      <div className="App">
      <Navbar color="faded" light toggleable>
      <NavbarToggler right onClick={this.toggle} />
        <NavLink className="navbar-brand" to={routes.home}>Blog</NavLink>
        <Collapse isOpen={this.state.isToggleOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink 
                className="nav-link" 
                activeClassName="active" 
                to={routes.home}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" activeClassName="active" to={routes.authors}>Authors</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" activeClassName="active" to={routes.newPost}>New Post</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      
      <Route 
        exact
        path={routes.home} 
        component={Home} 
      />
      <Route 
        exact
        path={routes.authors} 
        component={Authors} 
      />
        <Route 
        exact
        path={routes.post} 
        component={Post} 
      />
         <Route 
        exact
        path={routes.author} 
        component={Author} 
      />

      <Route 
          exact
          path={routes.newPost} 
          component={NewPost} 
        />
    </div>
    );
  }
}

export default withRouter(App);
