import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './views/Home/Home';


const router= createBrowserRouter ([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"*",
    element:`404 Not Found`
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

