import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./CONTEXTS/Providers/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./ROUTES/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
