import { combineReducers } from 'redux';
import { NotesList, notesListInitialState, notesStoreReducer } from './reducers/notes.reducers';
import { Actions as TodosActions } from './actions/notes.actions';

export type StoreActionTypes = TodosActions;

export interface StoreState {
   notes: NotesList;
}

export const iniatialStoreState: StoreState = { notes: notesListInitialState };

export const reducers = combineReducers<StoreState>({
   notes: notesStoreReducer,
});
