import { combineReducers } from 'redux';
import { TodoEntity } from '../TodoEntity';

export interface TodoState {
  todos: TodoEntity[];
}

interface VisibilityState {
  visibilityFilter: string;
}

export type StoreState = TodoState & VisibilityState;

const initialState: Array<TodoEntity> = [];

interface TodoAction {
  type: string;
  name: string;
  id?: number;
}

interface FilterAction {
  type: string;
  filter: string;
}

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