import * as React from 'react';
import { TodoEntity } from "../TodoEntity";

interface ITodoProps {
  todo: TodoEntity;
  onClick: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

const Todo: React.FunctionComponent<ITodoProps> = ({ todo, onClick }) => {
  return (
    <>
      <input type="checkbox" checked={todo.completed} onClick={ (e) => {
        e.preventDefault();
        onClick(e);
        }
      } />

      <span>{todo.name}</span>
    </>
  );
};

export default Todo;
