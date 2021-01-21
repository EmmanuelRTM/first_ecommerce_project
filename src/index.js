import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';
//esto si ocupas sass
//import 'bootstrap/dist/css/bootstrap.min.css'
//esto si no ocupas saass

//import App from './App';
import Routes from './Routes'
import reportWebVitals from './reportWebVitals';
import {ProductProvider} from './hooks/ShoppingContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <Routes />
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();