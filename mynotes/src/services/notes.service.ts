import store from '../store';
import { notesActions } from '../store/actions/notes.action';
import { Note } from '../store/reducers/notes.reducer';

export class NotesService {
   setNewNote(note: Note) {
      store.dispatch(notesActions.setNewNote(note));
   }

   updateNote(note: Note) {
      store.dispatch(notesActions.setUpdateNote(note));
   }

   deleteNote(note: Note) {
      store.dispatch(notesActions.setDeleteNote(note));
   }
}
