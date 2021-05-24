import { combineReducers } from 'redux';
import { TodosList, todosListInitialState, todosStoreReducer } from './reducers/todos.reducer';
import { Actions as TodosActions } from './actions/todos.actions';

export type StoreActionTypes = TodosActions;

export interface StoreState {
   todos: TodosList;
}

export const iniatialStoreState: StoreState = { todos: todosListInitialState };

export const reducers = combineReducers<StoreState>({
   todos: todosStoreReducer,
});
