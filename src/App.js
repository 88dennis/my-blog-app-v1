import React from 'react';
// import { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NavBar from './components/NavBar';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <Router>

    <div className="App">
      <NavBar />
      <div className="ui container">
        <Switch>
        <Route  path="/" component={HomePage} exact/>
        <Route  path="/about" component={AboutPage} exact/>
        <Route  path="/article-page/:name" component={ArticlePage} exact/>
        <Route  path="/articles-list" component={ArticlesListPage} exact/>
        {/* IF THE ROUTE HAS NO PATH THIS WILL RENDER EVERY TIME; THE SWITCH WILL RENDER THE FIRST URL MATCH */}
        <Route component={NotFoundPage} />
        </Switch>
        </div>
    </div>

    </Router>

  );
}

export default App;
