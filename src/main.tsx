import { AnimatePresence } from "framer-motion";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter } from "react-router-dom";
import Loading from "./pages/Loading";
import { Router } from "./routes";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter basename={import.meta.env.PUBLIC_URL}>
      <HelmetProvider>
        <Suspense fallback={<Loading />}>
          <AnimatePresence>
            <Router />
          </AnimatePresence>
        </Suspense>
      </HelmetProvider>
    </HashRouter>
  </React.StrictMode>
);
