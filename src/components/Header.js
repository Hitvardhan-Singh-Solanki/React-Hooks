import React, { useContext } from 'react';
import authContext from '../auth-context';

export default props => {
  const authState = useContext(authContext);
  return (
    <header>
      {authState.auth && <button onClick={props.onLoadTodos}>Todo List</button>}
      <button onClick={props.onLoadAuth}>Auth</button>
    </header>
  );
};
