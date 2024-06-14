import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './app.css';
import Homepage from "./pages/Homepage/Homepage";
import Sustainablepage from "./pages/Sustainablepage/Sustainablepage";

const Layout = () => {
  return (
    <div className="app">
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/sustainable',
        element: <Sustainablepage />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

