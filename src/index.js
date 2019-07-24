import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Web from './components/WebComponent';
import './components/styles/index.css';   
import $ from 'jquery';
import Popper from 'popper.js';

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

ReactDOM.render(<Web />, document.getElementById('app'));

