import * as React from 'react';

interface IAddTodoProps {
  addTodo: (event: React.MouseEvent<HTMLInputElement, MouseEvent>, value: string) => void
}

const AddTodo: React.FunctionComponent<IAddTodoProps> = ({ addTodo }) => {
  let inputRef: React.RefObject<any> = React.createRef();

  return (
    <>
      <input type="text" ref={inputRef} />
      <input type="button" value="Add" onClick={
        (e) => {
          e.preventDefault();
          addTodo(e, inputRef.current.value);
        }
      }/>
    </>
  );
};

export default AddTodo;
