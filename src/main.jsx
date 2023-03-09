import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './pages/App'
import Root from './pages/Root';
import PurchasingPage from './pages/PurchasingPage';
import AdjustmentsPage from './pages/AdjustmentsPage';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/root",
        element: <Root />,
      },
      {
        path: "/purchasing",
        element: <PurchasingPage />,
      },
      {
        path: "/adjustments",
        element: <AdjustmentsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
