import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider
} from 'react-router-dom';

import Login from './components/pages/login/login';
import Home from './components/pages/Home/Home.js';
import About from './components/pages/about/About';
import Contacts from './components/pages/contacts/Contacts';
import Vidoes from './components/pages/videos/Vidoes';
import Proj from './components/pages/Projects/Proj';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },

  {
    path: "/Home",
    element: <App/>
  },
 
  {
    path : '/login' ,
    element : <Login/>
  },
  {
    path : '/contacts' ,
    element : <Contacts/>
  },
  {
    path : '/about' ,
    element : <About/>

  },
  {
    path : '/projects' ,
    element : <Proj/>

  },
  {
    path : '/videos' ,
    element : <Vidoes/>

  }
  

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
