import { Reducer } from 'redux';
import { Actions, SongsStoreActions } from '../actions/songs.action';

export interface Song {
   id: number;
   type: string;
   title: string;
   author: string;
   description: string;
   link: string;
   imageLink: string;
}

export interface SongsList {
   songsList: Song[];
}

export const songsListInitialState: SongsList = {
   songsList: [
      {
         id: 1,
         type: 'song',
         title: 'Despacito ft. Daddy Yankee',
         author: 'Luis Fonsi',
         description: 'Lorem ipsum 1',
         link: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk&list=PLirAqAtl_h2pRAtj2DgTa3uWIZ3-0LKTA',
         imageLink:
            'https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLDw18RMkXY-_6eZ3D9tYhtxhB_HGg',
      },
      {
         id: 2,
         type: 'song',
         title: 'Sugar ',
         author: 'Maroon 5',
         description: 'Lorem ipsum 2',
         link: 'https://www.youtube.com/watch?v=09R8_2nJtjg&list=PLirAqAtl_h2pRAtj2DgTa3uWIZ3-0LKTA&index=3',
         imageLink:
            'https://i.ytimg.com/vi/09R8_2nJtjg/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBssbj03O_iW5pn254tb4FGDxYV6w',
      },
      {
         id: 3,
         type: 'song',
         title: 'Counting Stars',
         author: 'OneRepublic ',
         description: 'Lorem ipsum 3',
         link: 'https://www.youtube.com/watch?v=hT_nvWreIhg&list=PLirAqAtl_h2pRAtj2DgTa3uWIZ3-0LKTA&index=6',
         imageLink:
            'https://i.ytimg.com/vi/hT_nvWreIhg/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAzkXV7XRm6J7Nf8dvwhwLikA5XmA',
      },
      {
         id: 4,
         type: 'song',
         title: 'Hello',
         author: 'Adele',
         description: 'Lorem ipsum 4',
         link: 'https://www.youtube.com/watch?v=YQHsXMglC9A&list=PLirAqAtl_h2pRAtj2DgTa3uWIZ3-0LKTA&index=11',
         imageLink:
            'https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCpZ9CjkP84JVyh9Ttcwm1vs_sAEQ',
      },
      {
         id: 5,
         type: 'song',
         title: 'Wake Me Up',
         author: 'Avicii',
         description: 'Lorem ipsum 5',
         link: 'https://www.youtube.com/watch?v=IcrbM1l_BoI&list=PLirAqAtl_h2pRAtj2DgTa3uWIZ3-0LKTA&index=27',
         imageLink:
            'https://i.ytimg.com/vi/IcrbM1l_BoI/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBzCrJZ53aqfXODB6OzPSSj9rujAA',
      },
   ],
};

export const songsStoreReducer: Reducer<SongsList, Actions> = (
   state: SongsList = songsListInitialState,
   actions: Actions,
) => {
   switch (actions.type) {
      case SongsStoreActions.SET_NEW_SONG:
         const id = state.songsList.reverse()[0].id + 1;
         const toAdd = actions.payload.song;
         toAdd.id = id;
         return {
            ...state,
            songsList: [...state.songsList, toAdd],
         };

      case SongsStoreActions.SET_UPDATE_SONG:
         return {
            ...state,
            songsList: state.songsList.map((item) =>
               item.id === actions.payload.song.id
                  ? {
                       ...item,
                       id: actions.payload.song.id,
                       type: actions.payload.song.type,
                       title: actions.payload.song.title,
                       author: actions.payload.song.author,
                       description: actions.payload.song.description,
                       link: actions.payload.song.link,
                       imageLink: actions.payload.song.imageLink,
                    }
                  : item,
            ),
         };

      case SongsStoreActions.SET_DELETE_SONG:
         return {
            ...state,
            songsList: state.songsList.filter((el) => el.id !== actions.payload.song.id),
         };

      default:
         return state;
   }
};
