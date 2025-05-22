import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import AppRouters from "./routes/AppRouters.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
        <BrowserRouter>
          <AppRouters />
        </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);