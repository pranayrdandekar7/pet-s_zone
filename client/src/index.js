import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './views/Home/Home';
import PetSellForm from './views/PetSellform/PetSellForm';



const router= createBrowserRouter ([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/pet_selling_form",
    element:<PetSellForm/>
  },
  {
    path:"*",
    element:`404 Not Found`
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

