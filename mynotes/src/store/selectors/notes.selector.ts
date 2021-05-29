import { StoreState } from '../store';
import { createSelector } from 'reselect';

export const notesSelector = {
   getAll: createSelector(
      (state: StoreState) => state.notes,
      (notes) => notes.notesList,
   ),
   getNote: (itemId: string) =>
      createSelector(
         (state: StoreState) => state.notes,
         (notes) => notes.notesList.filter(({ id }) => id === parseInt(itemId))[0],
      ),
};
