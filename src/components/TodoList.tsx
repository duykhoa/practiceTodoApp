import * as React from 'react';
import Todo from './Todo';
import { TodoEntity } from '../TodoEntity';

interface ITodoListProps {
  todoList: Array<TodoEntity>;
  toggleTodo: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

const TodoList: React.FunctionComponent<ITodoListProps> = ({ todoList, toggleTodo }) => {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {
        todoList.map((t, idx) => {
          return (
            <li key={idx}>
              <Todo todo={t} onClick={toggleTodo}/>
            </li>
          )
        })
      }
    </ul>
  );
};

export default TodoList;
