import React from "react";
import AppLayout from './layout/app-layout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/login/Login'



export default function App() {
  

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" component={AppLayout}/>
      </Switch>
    </Router>
  );
}



