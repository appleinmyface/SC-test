/* src/index.js */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { TestProvider } from './context/TestContext';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TestProvider>
        <App />
      </TestProvider>
    </BrowserRouter>
  </React.StrictMode>
);