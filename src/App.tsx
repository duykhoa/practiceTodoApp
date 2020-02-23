import React from 'react';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import './App.css';
import TodoListContainer from './components/TodoList';

function App() {
  return (
    <>
      <AddTodo />
      <TodoListContainer />
      <Footer />
    </>
  );
}

export default App;
