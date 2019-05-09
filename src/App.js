import React from 'react';
import Todo from './components/Todo';
import Header from './components/Header';
import Auth from './components/Auth';

export default () => (
  <div className="App">
    <Header />
    <hr />
    <Todo />
    <Auth />
  </div>
);
