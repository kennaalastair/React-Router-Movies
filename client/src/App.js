import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" 
          // component={Movie}
          render={props => <Movie
                              addToSavedList={addToSavedList}
                              {...props}
                              // history={props.history}
                              // location={props.location}
                              // match={props.match}
                              />}
        />
      </Switch>
    </div>
  );
};

export default App;
