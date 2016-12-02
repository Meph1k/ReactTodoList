import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import Equipment from "./components/Equipment";
import Layout from "./components/Layout";
import store from "./store";


const app = document.getElementById('app');
ReactDOM.render(<Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <Route path="equipment" name="equipment" component={Equipment} />
    </Route>
  </Router>
</Provider>, app);
