import React from 'react';

export default props => {
  console.log('RENDER LIST');
  return (
    <ul>
      {props.todoList.map(todo => (
        <li key={todo.id} onClick={() => props.removeTodoHandler(todo.id)}>
          {todo.name}
        </li>
      ))}
    </ul>
  );
};
