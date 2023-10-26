import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./components/Routes/AppRouter.tsx";
import { Provider } from "react-redux";
import { store } from "./components/store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
