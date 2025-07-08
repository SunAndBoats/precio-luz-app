import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/*
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <h1 style={{ color: 'red' }}>Hola desde React</h1>
  </React.StrictMode>
);
*/