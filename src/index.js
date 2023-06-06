import React from 'react';
import ReactDOM from 'react-dom/client';
import { FilterProvider } from "./context";
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <App />
      </FilterProvider>
    </Router>
  </React.StrictMode>
);


