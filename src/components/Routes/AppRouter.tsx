// @ts-nocheck
import { useSelector } from "react-redux";
import LoginMain from "../7. Login/LoginMain";
import SearchMain from "../8. Search/SearchMain";
import ResultPage from "../9. ResultPage/ResultPage";
import App from "./App";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import { TypeUserInStore } from "../store/userSlice";

function AppRouter() {
  const currentUserInStore: TypeUserInStore = useSelector(
    (state) => state.user
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            currentUserInStore.companyLimit !== 0 ||
            currentUserInStore.usedCompanyCount !== 0 ? (
              <App />
            ) : (
              <Navigate to={"/login"} />
            )
          }
          path="/"
        />
        <Route element={<LoginMain />} path="/login" />
        <Route
          element={
            currentUserInStore.companyLimit !== 0 ||
            currentUserInStore.usedCompanyCount !== 0 ? (
              <SearchMain />
            ) : (
              <Navigate to={"/login"} />
            )
          }
          path="/search"
        />
        <Route
          element={
            currentUserInStore.companyLimit !== 0 ||
            currentUserInStore.usedCompanyCount !== 0 ? (
              <ResultPage />
            ) : (
              <Navigate to={"/login"} />
            )
          }
          path="/results"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
