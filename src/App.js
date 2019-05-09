import React, { useState } from 'react';
import Todo from './components/Todo';
import Header from './components/Header';
import Auth from './components/Auth';
import AuthContext from './auth-context';

export default () => {
  const [page, setPage] = useState('auth');
  const [auth, setAuth] = useState(false);
  const switchPage = pageName => {
    setPage(pageName);
  };

  const login = () => {
    setAuth(true);
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ auth, login }}>
        <Header
          onLoadTodos={() => switchPage('todos')}
          onLoadAuth={() => switchPage('auth')}
        />
        <hr />
        {page === 'auth' ? <Auth /> : <Todo />}
      </AuthContext.Provider>
    </div>
  );
};
