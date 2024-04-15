import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import CardDetails from './components/CardDetails/CardDetails.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import UpdateProfile from './components/UpadteProfile/UpdateProfile.jsx';
import Top from './components/Top/Top.jsx';
import Contact from './components/Conteact/Contact.jsx';
import ErrorPage from './components/Error/ErrorPage.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:"/register",
        element: <Register></Register>
      },
      {
        path: '/details/:id',
        element:<PrivateRoute><CardDetails></CardDetails></PrivateRoute>
      },
      {
        path:"/upProfile",
        element:<UpdateProfile></UpdateProfile>
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      }
     
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
