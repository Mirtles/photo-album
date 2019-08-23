import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import AlbumsListContainer from './components/AlbumsList/AlbumsListContainer';
import { Route } from 'react-router-dom'
import PhotoPageContainer from './components/PhotoPage/PhotoPageContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main className="app-main">
          <Route exact path="/" component={AlbumsListContainer} />
          <Route exact path="/albums/:id" component={PhotoPageContainer} />
        </main>
      </div>
    </Provider>
  );
}

export default App;
