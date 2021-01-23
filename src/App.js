import React, { Component } from 'react';
import MovieList from './MovieList/MovieList';

import classes from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <MovieList />
      </div>
    );
  }
}

export default App;