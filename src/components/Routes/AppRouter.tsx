import LoginMain from "../7. Login/LoginMain";
import App from "./App";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<LoginMain />} path="/login" />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
