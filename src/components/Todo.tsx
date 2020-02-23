import * as React from 'react';
import { TodoEntity } from "../TodoEntity";
import { ChangeEvent } from 'react';

interface ITodoProps {
  todo: TodoEntity;
  onClick: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Todo: React.FunctionComponent<ITodoProps> = ({ todo, onClick }) => {
  return (
    <>
      <input type="checkbox" checked={todo.completed} onChange={ (e) => {
        onClick(e);
        }
      } />

      <span>{todo.id}-{todo.name}----{todo.completed ? "Completed": "Active"}</span>
    </>
  );
};

export default Todo;
