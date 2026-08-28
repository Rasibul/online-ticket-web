
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import router from "./app/router";
import AppProviders from "./app/providers";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";


ReactDOM.createRoot(
  document.getElementById("root")
).render(


  <AppProviders>
    <AuthProvider>
        <RouterProvider router={router} />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#0b171e",
              color: "#fff",
            },
          }}
        />
      </AuthProvider>
  </AppProviders>



);