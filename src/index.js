import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
// to include a react router  npm install react-router-dom
// and then wrap the app component with   <BrowserRouter>

ReactDOM.render(
  <BrowserRouter>
    <App />{' '}
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
