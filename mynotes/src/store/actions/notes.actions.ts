import { Notes } from '../reducers/notes.reducers';

export enum NotesStoreActions {
   SET_NEW_NOTES = 'SET_NEW_NOTE',
   SET_DELETE_NOTES = 'SET_DELETE_NOTE',
}

export interface SetNewTodoAction {
   type: NotesStoreActions.SET_NEW_NOTES;
   payload: {
      notes: Notes;
   };
}

export interface SetDeleteTodoAction {
   type: NotesStoreActions.SET_DELETE_NOTES;
   payload: {
      notes: Notes;
   };
}

export type Actions = SetNewTodoAction | SetDeleteTodoAction;

export const notesActions = {
   setNewTodo: (notes: Notes): SetNewTodoAction => ({
      type: NotesStoreActions.SET_NEW_NOTES,
      payload: {
         notes,
      },
   }),

   setDeleteTodo: (notes: Notes): SetDeleteTodoAction => ({
      type: NotesStoreActions.SET_DELETE_NOTES,
      payload: {
         notes,
      },
   }),
};
