import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import {HashRouter as Router} from 'react-router-dom'
import './todos-api' // configures axios globally to ensure CORS works

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('app')
)
