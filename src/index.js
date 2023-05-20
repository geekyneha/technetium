import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import QuizQues from './components/section/Question/QuizQues';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/Quiz',
    element:<QuizQues/>
  },
  

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


reportWebVitals();
