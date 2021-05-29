import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import AddItem from './views/addItem/AddItem';
import Notes from './views/notes/Notes';
import NoteDetails from './views/notes/NoteDetails';
import Articles from './views/articles/Articles';
import ArticleDetails from './views/articles/ArticleDetails';
import Songs from './views/songs/Songs';
import SongDetails from './views/songs/SongDetails';
import PageNotFound from './views/pageNotFound/PageNotFound';
import store from './store';
import './App.css';

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Provider store={store}>
               <Switch>
                  <Route exact path="/" render={() => <Redirect to="/notes" />} />
                  <Route path="/notes" component={Notes} />
                  <Route path="/note/:id" component={NoteDetails} />
                  <Route path="/articles" component={Articles} />
                  <Route path="/article/:id" component={ArticleDetails} />
                  <Route path="/songs" component={Songs} />
                  <Route path="/song/:id" component={SongDetails} />
                  <Route path="/add-item" component={AddItem} />
                  <Route path="*" component={PageNotFound} />
               </Switch>
            </Provider>
         </BrowserRouter>
      </div>
   );
}

export default App;
