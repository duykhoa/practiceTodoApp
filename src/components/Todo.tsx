import * as React from 'react';
import { ChangeEvent } from 'react';
import { TodoEntity } from '../types';

interface ITodoProps {
  todo: TodoEntity;
  onClick: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Todo: React.FunctionComponent<ITodoProps> = ({ todo, onClick }) => {
  return (
    <span style={{ textDecoration: todo.completed ?  "line-through" : "none" }}>
      <input type="checkbox" checked={todo.completed} onChange={ (e) => onClick(e) } />
      <span>{todo.name}</span>
    </span>
  );
};

export default Todo;
