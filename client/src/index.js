import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './views/Home/Home';

import Blog from './views/Blog/Blog';
import SignUp from './views/SignUp/SignUp';
import Login from './views/Login/Login';



const router= createBrowserRouter ([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/blog",
    element:<Blog/>
  },
  {
    path: '/signup',
    element : <SignUp/>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:"*",
    element:`404 Not Found`
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

