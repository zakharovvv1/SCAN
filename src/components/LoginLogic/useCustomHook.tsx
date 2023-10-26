import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { userSlice } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

type userInfo = {
  login: string;
  password: string;
};

const useCustomHook = () => {
  const [loaderUserAccount, setLoaderUserAccount] = useState(false);
  const [isICanSignIn, setSsICanSignIn] = useState(true);
  const tokenInLocalStorage = localStorage.getItem("token");
  const currentUserInStore = useSelector((state) => state.user);
  console.log(
    "🚀 ~ file: useCustomHook.tsx:15 ~ useCustomHook ~ currentUserInStore:",
    currentUserInStore
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logInWithToken = async (token: string) => {
    setLoaderUserAccount(true);
    try {
      const res = await fetch(
        "https://gateway.scan-interfax.ru/api/v1/account/info",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const accountInfo = await res.json();
      // Сохранил пользователя в сторе
      dispatch(userSlice.actions.setUser(accountInfo));
      setLoaderUserAccount(false);
      navigate("/search");
      console.log(accountInfo);
    } catch (err) {
      console.log(err);
    }
  };
  if (tokenInLocalStorage && isICanSignIn) {
    try {
      logInWithToken(tokenInLocalStorage);
      setSsICanSignIn(false);
    } catch (err) {
      console.log(err);
    }
  }
  const logInAccountHandleClick = async (user: userInfo): Promise<any> => {
    setLoaderUserAccount(true);
    try {
      const res = await fetch(
        "https://gateway.scan-interfax.ru/api/v1/account/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const token = (await res.json()).accessToken;
      localStorage.setItem("token", token);
      try {
        const res = await fetch(
          "https://gateway.scan-interfax.ru/api/v1/account/info",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const accountInfo = await res.json();
        // Сохранил пользователя в сторе
        dispatch(userSlice.actions.setUser(accountInfo));
        setLoaderUserAccount(false);
        navigate("/search");
        console.log(accountInfo);
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { loaderUserAccount, logInAccountHandleClick };
};
export default useCustomHook;
