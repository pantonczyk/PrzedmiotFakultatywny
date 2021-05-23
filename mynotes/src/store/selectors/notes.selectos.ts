import { StoreState } from '../../store/store';
import { createSelector } from 'reselect';

export const todosSelector = createSelector(
   (state: StoreState) => state.notes,
   (notes) => notes.notes,
);
