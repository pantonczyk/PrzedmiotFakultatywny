import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Notes from './views/notes/Notes';
import Articles from './views/articles/Articles';
import Songs from './views/songs/Songs';
import PageNotFound from './views/pageNotFound/PageNotFound';

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Switch>
               <Route exact path="/" component={Notes} />
               <Route path="/articles" component={Articles} />
               <Route path="/songs" component={Songs} />
               <Route path="*" component={PageNotFound} />
            </Switch>
         </BrowserRouter>
      </div>
   );
}

export default App;
