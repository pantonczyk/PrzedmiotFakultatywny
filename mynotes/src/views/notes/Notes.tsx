import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useAction } from '../../hooks/useAction';
import { NotesService } from '../../services/notes.service';
import { notesSelector } from '../../store/selectors/notes.selector';
import MainTemplate from '../../templates/MainTemplate';
import ListItem, { itemTypes } from '../../components/ListItem';

const useStyles = makeStyles({
   wrapper: {
      paddingTop: ' 30px',
      width: '80%',
      margin: 'auto',
   },

   empty__state: {
      color: 'gray',
      fontSize: '1.1rem',
   },
});

const Notes = () => {
   const classes = useStyles();
   const notesActions = useAction(NotesService);
   const notes = useSelector(notesSelector.getAll);

   const deleteNote = (item: itemTypes) => {
      const noteToDelete = notes.find((note) => note.id === item.id);
      if (noteToDelete) {
         notesActions.deleteNote(noteToDelete);
      }
   };
   return (
      <MainTemplate>
         <div className={classes.wrapper}>
            <h1>Notes</h1>
            <hr />
            {notes.length !== 0 ? (
               <>
                  {notes.map((item) => (
                     <ListItem key={item.id} item={item} onDelete={deleteNote} />
                  ))}
               </>
            ) : (
               <p className={classes.empty__state}>There's nothing here yet, please add some items! </p>
            )}
         </div>
      </MainTemplate>
   );
};

export default Notes;
