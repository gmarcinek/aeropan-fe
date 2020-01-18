

import 'core-js/features/array/find-index'
import 'core-js/features/array/find'
import 'core-js/es/object/keys'
import 'react-app-polyfill/ie11'

import React from 'react'
import ReactDOM from 'react-dom'

import { AppComponent } from './features/app/app.component'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, } from 'react-router-dom'

import { setConfiguration } from 'react-grid-system'
import './index.css'

setConfiguration({
  breakpoints: [479, 767, 991],
  containerWidths: [0, 728, 940],
  gridColumns: 24,
  gutterWidth: 0,
})

ReactDOM.render(
  <>
    <Router>
      <div id='fullpage'>
        <div className='section'>Some section</div>
        <div className='section'>Some section</div>
        <div className='section'>Some section</div>
        <div className='section'>Some section</div>
      </div>
      <AppComponent />
    </Router>
  </>,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
