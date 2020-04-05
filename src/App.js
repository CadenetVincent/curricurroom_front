import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Tool from './page/Tool.js';
import NavbarWebuild from './page/NavbarWebuild.js';
import Page from './page/Page.js';


class App extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (

          <div>

          <NavbarWebuild/>

          <div className="main">

          <Router>
      
          <Switch>
      
          <Route  path="/tool" component={ Tool } />
          <Route  path="/page" component={ Page } />        
          <Route component={NoMatch} />
      
          </Switch>

          </Router>
      
          </div>

          </div>

        );
    }
}

function NoMatch({ location }) {
  return (
    <div>
      <h3>
       <p> <i class="fas fa-bug"></i> No match for <code>{location.pathname}</code></p>
      </h3>
    </div>
  );
  }

export default App;
