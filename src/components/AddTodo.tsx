import * as React from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TodoState } from '../reducers';

const mapStatesToProps = (state: TodoState) => {
  const todos = {
    todoList: state.todos
  }

  return todos;
}

const mapDispatchesToProps = (dispatch: Dispatch) => {
  return {
    addTodo: (name: string) => { dispatch({type: 'ADD_TODO', name: name})}
  };
}

const connector = connect(
  mapStatesToProps,
  mapDispatchesToProps,
)

type IAddTodoProps = ConnectedProps<typeof connector>;

const AddTodo: React.FunctionComponent<IAddTodoProps> = ({ addTodo }) => {
  let inputRef: React.RefObject<any> = React.createRef();

  return (
    <>
      <input type="text" ref={inputRef} />
      <input type="button" value="Add" onClick={
        (e) => {
          e.preventDefault();
          addTodo(inputRef.current.value);
        }
      }/>
    </>
  );
};

export default connector(AddTodo);
