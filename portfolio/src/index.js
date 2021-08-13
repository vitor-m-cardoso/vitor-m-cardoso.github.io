import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter basename="https://vitor-m-cardoso.github.io/">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
