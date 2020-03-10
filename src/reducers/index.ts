import { combineReducers } from 'redux';
import { TodoEntity, TodoAction, FilterAction } from '../types';

const initialState: Array<TodoEntity> = [];

let currentId: number = 0;

const todoReducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { name: action.name, completed: false, id: currentId++ }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? {...todo, completed: !todo.completed } : todo
      )
    default:
      return state;
  }
}

const visibilityFilterReducer = (state = 'Active', { type, filter }: FilterAction) => {
  switch (type) {
    case 'SET_VISIBILITY_FILTER':
      return filter;

    default:
      return state;
  }
}

export default combineReducers({
    todos: todoReducer,
    visibilityFilter: visibilityFilterReducer
  }
)