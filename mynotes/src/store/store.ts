import { combineReducers } from 'redux';
import { NotesList, notesListInitialState, notesStoreReducer } from './reducers/notes.reducer';
import { Actions as NotesActions } from './actions/notes.action';
import { ArticlesList, articlesListInitialState, articlesStoreReducer } from './reducers/articles.reducer';
import { Actions as ArticleActions } from './actions/articles.action';
import { SongsList, songsListInitialState, songsStoreReducer } from './reducers/songs.reducer';
import { Actions as SongsActions } from './actions/songs.action';

export type StoreActionTypes = NotesActions | ArticleActions | SongsActions;

export interface StoreState {
   notes: NotesList;
   articles: ArticlesList;
   songs: SongsList;
}

export const iniatialStoreState: StoreState = {
   notes: notesListInitialState,
   articles: articlesListInitialState,
   songs: songsListInitialState,
};

export const reducers = combineReducers<StoreState>({
   notes: notesStoreReducer,
   articles: articlesStoreReducer,
   songs: songsStoreReducer,
});
