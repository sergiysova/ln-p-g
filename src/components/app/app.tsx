import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header/';
import PostGenerator from '../post-generator/';
import './app.scss';

const App:React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Router>
          <Switch>
            <Route path="/" component={PostGenerator} />
            <Route render={() => {
                  return (
                    <Redirect to="/" /> 
                  )
                }} />
          </Switch> 
        </Router>
        
      </main>
    </div>
  );
}

export default App; 
