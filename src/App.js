import React from 'react';

import './App.css';


import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


import Navigation from './components/navigation/Navigation';
import SearchForm from './components/navigation/SearchForm';
import Cats from './components/navigation/Cats';
import Dogs from './components/navigation/Dogs';
import Computers from './components/navigation/Computers';
import NotFound from './components/Photos/NotFound'


const App = () => (
    <BrowserRouter>
     <div>
     <Navigation />
      <div className="container">
        <Switch>
          <Route exact path="/" component={ () => (<SearchForm />)} />
          <Route exact path="/cats" component={ () => (<Cats query={"cats"} />) } />
          <Route exact path="/dogs" component={ () => (<Dogs query={"dogs"} />)} />
          <Route exact path="/computers" component={ () => (<Computers query={"computers"} />)} />
          <Route component={NotFound} />
        </Switch>
      </div>
      </div>

    </BrowserRouter>
);

export default App;