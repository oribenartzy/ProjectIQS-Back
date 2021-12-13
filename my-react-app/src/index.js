import React from 'react';
// import { Modal, Row, Col, Form, InputGroup, Button, Table } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import SearchIQS from './components/SearchIQS'
import { Routes ,Route } from 'react-router-dom';
import'my-react-app/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/RegisterPage';

ReactDOM.render(
  <React.StrictMode>
       <BrowserRouter>

       
    <App />   
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
