import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));

const getBaseName = () => {
  if (process.env.NODE_ENV === 'production') {
    return '/extensions/nebula-lib/index.html';
  }
  return '';
};

root.render(
  <BrowserRouter basename={getBaseName()}>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
