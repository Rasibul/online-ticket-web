
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import router from "./app/router";
import AppProviders from "./app/providers";

import "./index.css";


ReactDOM.createRoot(
  document.getElementById("root")
).render(


    <AppProviders>
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
    </AppProviders>



);