import { Note } from '../reducers/notes.reducer';

export enum NotesStoreActions {
   SET_NEW_NOTES = 'SET_NEW_NOTE',
   SET_UPDATE_NOTES = 'SET_UPDATE_NOTES',
   SET_DELETE_NOTES = 'SET_DELETE_NOTE',
}

export interface SetNewNoteAction {
   type: NotesStoreActions.SET_NEW_NOTES;
   payload: {
      note: Note;
   };
}

export interface SetUpdateNoteAction {
   type: NotesStoreActions.SET_UPDATE_NOTES;
   payload: {
      note: Note;
   };
}

export interface SetDeleteNoteAction {
   type: NotesStoreActions.SET_DELETE_NOTES;
   payload: {
      note: Note;
   };
}

export type Actions = SetNewNoteAction | SetUpdateNoteAction | SetDeleteNoteAction;

export const notesActions = {
   setNewNote: (note: Note): SetNewNoteAction => ({
      type: NotesStoreActions.SET_NEW_NOTES,
      payload: {
         note,
      },
   }),

   setUpdateNote: (note: Note): SetUpdateNoteAction => ({
      type: NotesStoreActions.SET_UPDATE_NOTES,
      payload: {
         note,
      },
   }),

   setDeleteNote: (note: Note): SetDeleteNoteAction => ({
      type: NotesStoreActions.SET_DELETE_NOTES,
      payload: {
         note,
      },
   }),
};
