import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
const FIREBASE_URL = 'https://test-c2f49.firebaseio.com/todos-new.json';

const TodoListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return state.concat(action.todoItem);
    case 'SET':
      return action.todos;
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.todoItemId);
    default:
      return state;
  }
};

export default props => {
  const [todoName, setTodoName] = useState('');
  const [submittedTodo, setSubmittedTodo] = useState(null);
  const [todoList, dispatchTodo] = useReducer(TodoListReducer, []);

  const inputChangeHandler = event => {
    setTodoName(event.target.value);
  };

  const componentDidMount = () => {
    const fetchData = async () => {
      try {
        const result = await axios.get(FIREBASE_URL);
        const todosObject = result.data;
        const todos = [];
        for (const key in todosObject) {
          todos.push({ id: key, name: todosObject[key].name });
        }
        dispatchTodo({ type: 'SET', todos });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
    return componentDidUnMount;
  };

  const componentDidUnMount = () => {
    console.log(
      'This is called in lieu of Component did un-mount to do some cleanup tasks'
    );
  };

  useEffect(componentDidMount, []);
  useEffect(() => {
    if (submittedTodo)
      dispatchTodo({
        type: 'ADD',
        todoItem: submittedTodo
      });
  }, [submittedTodo]);

  const addTodo = async () => {
    const result = await axios.post(FIREBASE_URL, {
      name: todoName
    });

    const todoItem = { id: result.data.name, name: todoName };
    setSubmittedTodo(todoItem);
  };

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Todo"
        value={todoName}
        onChange={inputChangeHandler}
      />
      <button type="button" onClick={addTodo}>
        Add Todo
      </button>
      <ul>
        {todoList.map(todo => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};
