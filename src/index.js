import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Favrt from './components/pages/Favrt';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="/home" element={<Home />} />
      <Route path="/favourite" element={<Favrt />} />
    </Route>
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
