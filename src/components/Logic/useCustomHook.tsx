import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userSlice } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { searcPublicationsSlice } from "../store/searcPublicationsSlice";
import dateformat from "dateformat";
type userInfo = {
  login: string;
  password: string;
};

type TypeSearchParams = {
  reason: boolean;
  mentions: boolean;
  mainRole: boolean;
  publicWithRisk: boolean;
  turnOnNews: boolean;
  turnOnCalendars: boolean;
  turnOnReports: boolean;
  INNOfCompany: string;
  tonal: string;
  tonalSelectVision: boolean;
  countOfDocumentsInOut: string;
  searchRange: {
    start: string;
    end: string;
  };
};

const useCustomHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.user);
  const documentsPublications = useSelector(
    (state) => state.publications.documetsPublications
  );
  const dataHistograms = useSelector(
    (state) => state.publications.dataHistograms
  );

  if (documentsPublications !== null && dataHistograms !== null) {
    const dataHistogramsDate = dataHistograms.data[0].data;
    console.log(
      "🚀 ~ file: useCustomHook.tsx:45 ~ useCustomHook ~ dataHistogramsDate:",
      dataHistogramsDate
    );
    const sortDataHistogramsByDate = [...dataHistogramsDate].sort((a, b) =>
      a.date > b.date ? 1 : -1
    );
    const sortDataHistogramsOnlyDatesToLocalFormat =
      sortDataHistogramsByDate.map((el) => {
        return {
          date: dateformat(new Date(el.date), "dd/mm/yyyy"),
          value: el.value,
        };
      });
    console.log(
      "🚀 ~ file: useCustomHook.tsx:50 ~ sortDataHistogramsOnlyDatesToLocalFormat ~ sortDataHistogramsOnlyDatesToLocalFormat:",
      sortDataHistogramsOnlyDatesToLocalFormat
    );
    const sortDocumentsbyDate = [...documentsPublications].sort((a, b) =>
      a.ok.issueDate > b.ok.issueDate ? 1 : -1
    );
    dispatch(
      searcPublicationsSlice.actions.setSortedDatesForDataHistograms(
        sortDataHistogramsOnlyDatesToLocalFormat
      )
    );
    console.log(sortDataHistogramsByDate, "Остортированные даты");
    console.log(sortDocumentsbyDate, "Остортированные документы");
  }

  console.log(
    "🚀 ~ file: useCustomHook.tsx:33 ~ useCustomHook ~ documentsPublications:",
    documentsPublications
  );

  const [loaderUserAccount, setLoaderUserAccount] = useState(false);
  const [loaderPublications, setLoaderPublications] = useState(false);

  const [isICanSignIn, setSsICanSignIn] = useState(true);
  console.log(
    "🚀 ~ file: useCustomHook.tsx:35 ~ useCustomHook ~ isICanSignIn:",
    isICanSignIn
  );
  const tokenInLocalStorage = localStorage.getItem("token");

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/login") {
      navigate("/");
    }
    console.log(
      "🚀 ~ file: useCustomHook.tsx:45 ~ useEffect ~ currentPath:",
      currentPath
    );
    if (
      tokenInLocalStorage &&
      isICanSignIn &&
      !userInfo.companyLimit &&
      !userInfo.usedCompanyCount
    ) {
      try {
        logInWithToken(tokenInLocalStorage);
        setSsICanSignIn(false);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  const logInWithToken = async (token: string) => {
    try {
      setLoaderUserAccount(true);
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
    } catch (err) {
      setLoaderUserAccount(false);
      navigate("/login");
    }
  };

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
  const searchHandleClick = async (searchParams: TypeSearchParams) => {
    setLoaderPublications(true);
    navigate("/results");
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
              startDate: `${searchParams.searchRange.start}T00:00:00+03:00`,
              endDate: `${searchParams.searchRange.end}T23:59:59+03:00`,
            },
            searchContext: {
              targetSearchEntitiesContext: {
                targetSearchEntities: [
                  {
                    type: "company",
                    sparkId: null,
                    entityId: null,
                    inn: searchParams.INNOfCompany,
                    maxFullness: searchParams.reason,
                    inBusinessNews: searchParams.mentions,
                  },
                ],
                onlyMainRole: searchParams.mainRole,
                tonality: "any",
                onlyWithRiskFactors: searchParams.publicWithRisk,
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
              excludeTechNews: searchParams.turnOnNews,
              excludeAnnouncements: searchParams.turnOnCalendars,
              excludeDigests: searchParams.turnOnReports,
            },
            similarMode: "duplicates",
            limit: Number(searchParams.countOfDocumentsInOut),
            sortType: "sourceInfluence",
            sortDirectionType: "desc",
            intervalType: "month",
            histogramTypes: ["totalDocuments", "riskFactors"],
          }),
        }
      );
      const result = await res.json();
      objectSearch(searchParams);
      dispatch(searcPublicationsSlice.actions.setDataHistograms(result));
      console.log(result, "Ответ от сервера");
    } catch (err) {
      console.log(err);
    }
  };
  const objectSearch = async (searchParams: TypeSearchParams) => {
    try {
      const res = await fetch(
        "https://gateway.scan-interfax.ru/api/v1/objectsearch",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${tokenInLocalStorage}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            issueDateInterval: {
              startDate: `${searchParams.searchRange.start}T00:00:00+03:00`,
              endDate: `${searchParams.searchRange.end}T23:59:59+03:00`,
            },
            searchContext: {
              targetSearchEntitiesContext: {
                targetSearchEntities: [
                  {
                    type: "company",
                    sparkId: null,
                    entityId: null,
                    inn: searchParams.INNOfCompany,
                    maxFullness: searchParams.reason,
                    inBusinessNews: searchParams.mentions,
                  },
                ],
                onlyMainRole: searchParams.mainRole,
                tonality: "any",
                onlyWithRiskFactors: searchParams.publicWithRisk,
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
              excludeTechNews: searchParams.turnOnNews,
              excludeAnnouncements: searchParams.turnOnCalendars,
              excludeDigests: searchParams.turnOnReports,
            },
            similarMode: "duplicates",
            limit: Number(searchParams.countOfDocumentsInOut),
            sortType: "sourceInfluence",
            sortDirectionType: "desc",
            intervalType: "month",
            histogramTypes: ["totalDocuments", "riskFactors"],
          }),
        }
      );
      const result = await res.json();
      const arrIdsOfPublications = result.items.map((el) => {
        return el.encodedId;
      });
      dispatch(
        searcPublicationsSlice.actions.setIDsOfPublicationsObjectSearch(
          arrIdsOfPublications
        )
      );

      console.log(arrIdsOfPublications, "Массив публикаций");
      console.log(result, "Cписок найденных публикаций");
      documentsSearch(arrIdsOfPublications);
    } catch (err) {
      console.log(err);
    }
  };
  const documentsSearch = async (arrIdsOfPublications) => {
    try {
      console.log(arrIdsOfPublications, "Входящий массив публикаций");
      const res = await fetch(
        "https://gateway.scan-interfax.ru/api/v1/documents",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${tokenInLocalStorage}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ids: arrIdsOfPublications,
          }),
        }
      );
      console.log(res, "Запрос...");
      const result = await res.json();
      dispatch(searcPublicationsSlice.actions.setDocumetsPublications(result));

      // dispatch()
      setLoaderPublications(false);
      console.log("Публикации", result);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    loaderUserAccount,
    logInAccountHandleClick,
    searchHandleClick,
    loaderPublications,
  };
};
export default useCustomHook;
