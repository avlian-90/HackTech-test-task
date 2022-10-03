import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './features/home/Home';
import Login from './features/login/Login';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route index element={<App />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
          </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


