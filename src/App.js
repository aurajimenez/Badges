import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import BadgeNew from './pages/BadgeNew';
import Home from './pages/Home';
import Badges from './pages/Badges';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/badges" component={Badges}/>
        <Route exact path="/" component={Home} />
        <Route exact path="/badges/new" component={BadgeNew}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
