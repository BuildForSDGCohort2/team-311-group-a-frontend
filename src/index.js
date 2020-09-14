import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'
import Popper from 'popper.js'
import './components/app.css'
ReactDom.render(<App/>, document.getElementById("App"))