import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Now the only thing we have to do is bind the method to this; we do that in the constructor method at the top of our component but below the super() call. The reason we have to bind the this keyword when passing a function to another component is that it needs to stay in the same context in which it was declared. Always remember: you must bind this for all methods in class components when passing them to other components.
