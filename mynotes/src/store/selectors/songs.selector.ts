import { StoreState } from '../store';
import { createSelector } from 'reselect';

export const songsSelector = {
   getAll: createSelector(
      (state: StoreState) => state.songs,
      (songs) => songs.songsList,
   ),
   getSong: (itemId: string) =>
      createSelector(
         (state: StoreState) => state.songs,
         (songs) => songs.songsList.filter(({ id }) => id === parseInt(itemId))[0],
      ),
};
