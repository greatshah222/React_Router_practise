import React, { Component } from 'react';
import NavBar from './components/navbar';
import Products from './components/products';
import Posts from './components/posts';
import Home from './components/home';
import Dashboard from './components/admin/dashboard';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className='content'>
          {/* // register one or more BrowserRouter */}
          it will go to that specific component like (Products or posts ) if it
          matches that url. for example if we are in http://localhost:3000/ it
          will go to the home component and render everything from there
          <Route path='/products' component={Products} />
          <Route path='/posts' component={Posts} />
          <Route path='/admin' component={Dashboard} />
          <Route path='/' component={Home} />
        </div>
      </div>
    );
  }
}

export default App;
