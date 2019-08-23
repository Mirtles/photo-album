import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main className="app-main">
          hiya
        </main>
      </div>
    </Provider>
  );
}

export default App;
