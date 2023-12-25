import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './nav/nav.tsx'
import Weather from './Weather/weather.tsx'
import Spotify from './spotify/spotify.tsx'
import Login from './login/login.tsx'
import Pc from './pc_stats/pc.tsx'
import Register from './register/register.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: [<Nav />, <Pc />], 
  },
  {
    path: "login",
    element: [<Nav />, <Login />,] ,
  },
  {
    path: "register",
    element: [<Nav />, <Register />,] ,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
