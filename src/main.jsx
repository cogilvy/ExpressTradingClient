import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './Pages/App'
import Root from './Pages/Root';
import PurchasingPage from './Pages/PurchasingPage';
import AdjustmentsPage from './Pages/AdjustmentsPage';
import HomePage from './Pages/HomePage';

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
