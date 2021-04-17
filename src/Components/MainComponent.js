import React, { Component } from 'react';
import Assignment_1 from './assignment_1';
import Assignment_2 from './assignment_2';
import Assignment_3 from './assignment_3';
import Assignment_4 from './assignment_4';
import {Switch, Route, Redirect, withRouter, Router } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {  
      
    }
}

  render() {

    return (
      <div>
                <Switch>
                <Route path="/assignment_1" component={() => <Assignment_1 />}  />
                <Route path="/assignment_2" component={() => <Assignment_2 />}  />
                <Route path="/assignment_3" component={() => <Assignment_3 />}  />
                <Route path="/assignment_4" component={() => <Assignment_4 />}  />
                <Redirect to="/assignment_1" />
                </Switch>
      </div>
    );
  }
}


export default withRouter(Main);