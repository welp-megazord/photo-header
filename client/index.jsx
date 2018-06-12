import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/app.jsx';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';


ReactDom.render(<Header />, document.getElementById('header'));
{/* <Router history={browserHistory}>
  <Route path="/app" component={App}>
  </Route>
</Router> */}