import React from 'react';

export default props => {
  return (
    <header>
      <button onClick={props.onLoadTodos}>Todo List</button>
      <button onClick={props.onLoadAuth}>Auth</button>
    </header>
  );
};
