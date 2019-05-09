import React, { useEffect, useReducer, useRef } from 'react';
import axios from 'axios';
import Axios from 'axios';

const FIREBASE_URL = `https://test-c2f49.firebaseio.com/todos-new.json`;

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
  const [todoList, dispatchTodo] = useReducer(TodoListReducer, []);
  const todoInputRef = useRef();

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

  const addTodo = async () => {
    const todoName = todoInputRef.current.value;

    const result = await axios.post(FIREBASE_URL, {
      name: todoName
    });

    const todoItem = { id: result.data.name, name: todoName };
    dispatchTodo({ type: 'ADD', todoItem });
  };

  const removeTodoHandler = async todoItemId => {
    const URL = `https://test-c2f49.firebaseio.com/todos-new/${todoItemId}.json`;
    try {
      await Axios.delete(URL);
      dispatchTodo({
        type: 'REMOVE',
        todoItemId
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <input type="text" placeholder="Todo" ref={todoInputRef} />
      <button type="button" onClick={addTodo}>
        Add Todo
      </button>
      <ul>
        {todoList.map(todo => (
          <li key={todo.id} onClick={() => removeTodoHandler(todo.id)}>
            {todo.name}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
