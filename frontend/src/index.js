import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { DataProveder } from './Context/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProveder>

    <BrowserRouter>

    <App />

    </BrowserRouter>
    
  </DataProveder>
);


