import { Song } from '../reducers/songs.reducer';

export enum SongsStoreActions {
   SET_NEW_SONG = 'SET_NEW_SONG',
   SET_UPDATE_SONG = 'SET_UPDATE_SONG',
   SET_DELETE_SONG = 'SET_DELETE_SONG',
}

export interface SetNewSongAction {
   type: SongsStoreActions.SET_NEW_SONG;
   payload: {
      song: Song;
   };
}

export interface SetUpdateSongAction {
   type: SongsStoreActions.SET_UPDATE_SONG;
   payload: {
      song: Song;
   };
}

export interface SetDeleteSongAction {
   type: SongsStoreActions.SET_DELETE_SONG;
   payload: {
      song: Song;
   };
}

export type Actions = SetNewSongAction | SetUpdateSongAction | SetDeleteSongAction;

export const songsActions = {
   setNewSong: (song: Song): SetNewSongAction => ({
      type: SongsStoreActions.SET_NEW_SONG,
      payload: {
         song,
      },
   }),

   setUpdateSong: (song: Song): SetUpdateSongAction => ({
      type: SongsStoreActions.SET_UPDATE_SONG,
      payload: {
         song,
      },
   }),

   setDeleteSong: (song: Song): SetDeleteSongAction => ({
      type: SongsStoreActions.SET_DELETE_SONG,
      payload: {
         song,
      },
   }),
};
