import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './data/store';
import { Provider } from 'react-redux';
import App from './App';
import "./sass/styles.scss"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


