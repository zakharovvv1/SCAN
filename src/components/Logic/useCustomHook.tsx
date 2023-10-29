import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
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
    } catch (err) {
      setLoaderUserAccount(false);
      navigate("/login");
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
      } catch (err) {}
    } catch (err) {}
  };
  const searchHandleClick = async () => {
    try {
      const res = await fetch(
        "https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${tokenInLocalStorage}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            issueDateInterval: {
              startDate: "2019-01-01T00:00:00+03:00",
              endDate: "2022-08-31T23:59:59+03:00",
            },
            searchContext: {
              targetSearchEntitiesContext: {
                targetSearchEntities: [
                  {
                    type: "company",
                    sparkId: null,
                    entityId: null,
                    inn: 7710137066,
                    maxFullness: true,
                    inBusinessNews: null,
                  },
                ],
                onlyMainRole: true,
                tonality: "any",
                onlyWithRiskFactors: false,
                riskFactors: {
                  and: [],
                  or: [],
                  not: [],
                },
                themes: {
                  and: [],
                  or: [],
                  not: [],
                },
              },
              themesFilter: {
                and: [],
                or: [],
                not: [],
              },
            },
            searchArea: {
              includedSources: [],
              excludedSources: [],
              includedSourceGroups: [],
              excludedSourceGroups: [],
            },
            attributeFilters: {
              excludeTechNews: true,
              excludeAnnouncements: true,
              excludeDigests: true,
            },
            similarMode: "duplicates",
            limit: 1000,
            sortType: "sourceInfluence",
            sortDirectionType: "desc",
            intervalType: "month",
            histogramTypes: ["totalDocuments", "riskFactors"],
          }),
        }
      );
      const result = await res.json();
      console.log(result, "Ответ от сервера");
    } catch (err) {
      console.log(err);
    }
  };

  return { loaderUserAccount, logInAccountHandleClick, searchHandleClick };
};
export default useCustomHook;
