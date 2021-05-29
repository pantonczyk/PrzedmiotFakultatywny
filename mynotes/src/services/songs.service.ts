import store from '../store';
import { songsActions } from '../store/actions/songs.action';
import { Song } from '../store/reducers/songs.reducer';

export class SongsService {
   setNewSong(song: Song) {
      store.dispatch(songsActions.setNewSong(song));
   }

   updateSong(song: Song) {
      store.dispatch(songsActions.setUpdateSong(song));
   }

   deleteSong(song: Song) {
      store.dispatch(songsActions.setDeleteSong(song));
   }
}
