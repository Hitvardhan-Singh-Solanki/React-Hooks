import React, { useState, useEffect } from 'react';
import axios from 'axios';
const FIREBASE_URL = 'https://test-c2f49.firebaseio.com/todos-new.json';

export default props => {
  const [todoName, setTodoName] = useState('');
  const [todoList, setTodoList] = useState([]);

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
        setTodoList(todos);
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

  useEffect(componentDidMount, [todoName]);

  const addTodo = () => {
    setTodoList(todoList.concat(todoName));
    axios
      .post(FIREBASE_URL, {
        name: todoName
      })
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
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
