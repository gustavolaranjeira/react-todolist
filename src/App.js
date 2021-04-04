import React from 'react';
import {NewTodoForm} from './NewTodoForm';
import {TodoList} from './TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Todo App</h1>
      <NewTodoForm onClickCreate={} />
      <TodoList 
        todos={}
        onCompleteTodo={}
        onDeleteTodo={} />
    </div>
  );
}

export default App;
