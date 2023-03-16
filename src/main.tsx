import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import MotionLazyContainer from "./components/animate/MotionLazyContainer";
import { SnackbarProvider } from "./context/SnackbarContext";
import Loading from "./pages/Loading";
import { persistor, store } from "./redux/store";
import { Router } from "./routes";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
      <HelmetProvider>
        <Suspense fallback={<Loading />}>
          <MotionLazyContainer>
            <SnackbarProvider>
              <ReduxProvider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                  <Router />
                </PersistGate>
              </ReduxProvider>
            </SnackbarProvider>
          </MotionLazyContainer>
        </Suspense>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
