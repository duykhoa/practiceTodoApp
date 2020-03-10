import * as React from 'react';
import Todo from './Todo';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { TodoEntity, StoreState } from '../types';

const filterVisibilityTodos = (todos: TodoEntity[], visibilityFilter: string) => {
  switch (visibilityFilter) {
    case 'All':
      return todos;
    case 'Completed':
      return todos.filter(todo => todo.completed);
    case 'Active':
      return todos.filter(todo => !todo.completed);
    default:
      return [];
  }
}

const mapStatesToProps = (state: StoreState) => {
  const todos = {
    todoList: filterVisibilityTodos(state.todos, state.visibilityFilter)
  }

  return todos;
}

const mapDispatchesToProps = (dispatch: Dispatch) => {
  return {
    toggleTodo: (todo: TodoEntity) => { dispatch({ type: 'TOGGLE_TODO', id: todo.id }) },
    addTodo: (name: string) => { dispatch({ type: 'ADD_TODO', name: name }) }
  };
}

const connector = connect(
  mapStatesToProps,
  mapDispatchesToProps,
)

type PropsFromRedux = ConnectedProps<typeof connector>;

type ITodoListProps = PropsFromRedux & {
  toggleTodo: (todo: TodoEntity) => void;
}

const TodoList: React.FunctionComponent<ITodoListProps> = ({ todoList, toggleTodo }) => {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {
        todoList.map((t, idx) => {
          return (
            <li key={idx}>
              <Todo todo={t} onClick={() => toggleTodo(t)} />
            </li>
          )
        })
      }
    </ul>
  );
};

export default connector(TodoList);