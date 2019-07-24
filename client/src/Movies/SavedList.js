import React from 'react';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div onClick={() => props.history.push('/')} className="home-button">Home</div>
  </div>
);

export default SavedList;
