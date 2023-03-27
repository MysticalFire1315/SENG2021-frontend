import { React, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'

import Home from './pages/InvoiceCreate'
import NeedHelp from './pages/NeedHelp'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "need-help",
        element: <NeedHelp />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>
);
