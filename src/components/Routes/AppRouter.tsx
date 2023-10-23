import LoginMain from "../7. Login/LoginMain";
import SearchMain from "../8. Search/SearchMain";
import ResultPage from "../9. ResultPage/ResultPage";
import App from "./App";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<LoginMain />} path="/login" />
        <Route element={<SearchMain />} path="/search" />
        <Route element={<ResultPage />} path="/result" />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
