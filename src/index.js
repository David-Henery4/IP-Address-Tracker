import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './data/store';
import { Provider } from 'react-redux';
import { ToastContainer } from "react-toastify";
import App from './App';
import "./sass/styles.scss"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer hideProgressBar={true} position="center" />
    </Provider>
  </React.StrictMode>
);


