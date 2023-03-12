import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import MotionLazyContainer from "./components/animate/MotionLazyContainer";
import { SnackbarProvider } from "./context/SnackbarContext";
import Loading from "./pages/Loading";
import { Router } from "./routes";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
      <HelmetProvider>
        <Suspense fallback={<Loading />}>
          <MotionLazyContainer>
            <SnackbarProvider>
              <Router />
            </SnackbarProvider>
          </MotionLazyContainer>
        </Suspense>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
