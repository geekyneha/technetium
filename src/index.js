import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  

  RouterProvider
} from 'react-router-dom';

import Home from './components/Home/Home';
import SignIn from './components/pages/SignIn/SignIn';
import Quiz from './components/pages/Quiz/Quiz';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />
  },

  {
    path: "/Home",
    element: <Home />
  },


  
  {
    path: '/Quiz',
    element: <Quiz />

  },
 


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
