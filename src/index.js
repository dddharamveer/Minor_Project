import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvide } from './store/auth-context';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AuthContextProvide>
    <App />
  </AuthContextProvide>
  </BrowserRouter>
);


