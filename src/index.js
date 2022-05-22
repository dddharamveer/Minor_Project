import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvide } from './store/auth-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvide>
    <App />
  </AuthContextProvide>
);


