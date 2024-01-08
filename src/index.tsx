import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Word from './container/Word';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Word />
  </React.StrictMode>
);

