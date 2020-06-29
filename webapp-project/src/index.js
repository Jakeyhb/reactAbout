import React from 'react'
import ReactDOM from 'react-dom'
import ErrorBoundary from './components/ErrorBoundary'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './containers/App'
import './style/style.css'
// import Routers from './pages/router.js';

import 'whatwg-fetch'//补丁

ReactDOM.render(
  (
    <ErrorBoundary>
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  ),
  document.querySelector('#root')
)