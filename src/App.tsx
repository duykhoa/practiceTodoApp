import React from 'react';
import Todolist from './components/TodoList';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import './App.css';

function App() {
  let todoList = [
    { name: "Submit timecard" },
    { name: "Response Karl's about ticketing problem" },
  ];

  return (
    <>
      <AddTodo addTodo={ (e, value) => console.log(value) }></AddTodo>
      <Todolist todoList={ todoList } toggleTodo={ e => console.log('Toggle Todo') }></Todolist>
      <Footer></Footer>
    </>
  );
}

export default App;
