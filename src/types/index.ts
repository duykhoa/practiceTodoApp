export type TodoEntity = {
  name: String;
  completed: boolean;
  id: number;
}

export interface TodoAction {
  type: string;
  name: string;
  id?: number;
}

export interface FilterAction {
  type: string;
  filter: string;
}

export interface TodoState {
  todos: TodoEntity[];
}

export interface VisibilityState {
  visibilityFilter: string;
}

export type StoreState = TodoState & VisibilityState;