import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Component/Pages/Root';
import Home from './Component/Pages/Home';
import AddProduct from './Component/Pages/AddProduct';
import Login from './Component/Pages/Login & Register/Login';
import Register from './Component/Pages/Login & Register/Register';
import AuthProvider from './Component/Pages/AuthProvider/AuthProvider';
import Categories from './Component/Pages/Categories';
import Details from './Component/Pages/Details';
import UpdateProduct from './Component/Pages/UpdateProduct';
import Error from './Component/Pages/Error';
import Cart from './Component/Pages/Cart';
import PrivateRoute from './Component/Pages/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <Error></Error>,
    children:[
     {
       path:'/',
       element:<Home></Home>
    },
    {
      path: '/addProduct',
      element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
    },
    {
     path:'/login',
     element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    },
    {
      path:'/type/:brand',
      element: <PrivateRoute><Categories></Categories> </PrivateRoute>,
      loader: ()=>fetch('http://localhost:5000/beauties')
    },
    {
      path:'/details/:id',
      element: <PrivateRoute><Details></Details></PrivateRoute>,
      loader: ()=>fetch('http://localhost:5000/beauties')
    },
    {
      path:'/update/:id',
      element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
      loader: ({params})=>fetch(`http://localhost:5000/beauties/${params.id}`)
    },
    {
      path:'/cart',
      element: <PrivateRoute><Cart></Cart></PrivateRoute>,
      loader: ()=>fetch('http://localhost:5000/beauties')
    }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
