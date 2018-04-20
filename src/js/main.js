import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import {LoginForm} from './loginForm.js';
import {MainDiv} from './mainDiv.js';

export const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LoginForm} />
        <Route path='/home' component={MainDiv} />
      </Switch>
    </div>
  )
}