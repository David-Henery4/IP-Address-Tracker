import React from 'react';
import ReactDOM from 'react-dom/client';
import "./sass/styles.scss";
import { store } from './data/store';
import { Provider } from 'react-redux';
import App from './App';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer position="top-center" hideProgressBar={true} />
  </React.StrictMode>
);


