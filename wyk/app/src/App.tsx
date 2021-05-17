import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/home/Home';
import Movie from './views/movie/Movie';
import Page404 from './views/page404/Page404';
import store from './store';
import './App.css';

const App = () => {
   return (
      <div className="App">
         <BrowserRouter>
            <Provider store={store}>
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/movie/:id" component={Movie} />
                  <Route path="*" component={Page404} />
               </Switch>
            </Provider>
         </BrowserRouter>
      </div>
   );
};

export default App;
