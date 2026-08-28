
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import router from "./app/router";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";


ReactDOM.createRoot(
  document.getElementById("root")
).render(


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



);