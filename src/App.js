import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import AlbumsListContainer from './components/AlbumsList/AlbumsListContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main className="app-main">
          <AlbumsListContainer />
        </main>
      </div>
    </Provider>
  );
}

export default App;
