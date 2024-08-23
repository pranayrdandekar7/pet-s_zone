import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './views/Home/Home';
import Blog from './views/Blogs/Blog'
import PetDatails from "./views/PetDatails/PetDatails"
import 'bootstrap/dist/css/bootstrap.min.css';


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
    path:"/petdetails",
    element:<PetDatails/>
  },
  {
    path:"*",
    element:`404 Not Found`
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

