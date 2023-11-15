import styles from "./Result.module.scss";
import resultHeroImg from "./imgs/resultHeroImg.svg";
import arrowRightTable from "./imgs/arrowRightTable.svg";
import useCustomHook from "../Logic/useCustomHook";
import { useSelector } from "react-redux";
import DocumentBody from "./Document/DocumentBody";
import { useEffect, useState } from "react";
const ResultScreen = () => {
  const { documentsSearch, loaderPublications } = useCustomHook();

  const [sortedDatesByParts, setSortedDatesByParts] = useState({
    data: [] as unknown,
    count: 0,
  } as any);
  const [width, setWidth] = useState(window.innerWidth);
  const [sumOfValues, setSumOfValues] = useState(0);
  const dataHistograms = useSelector(
    (state: any) => state.publications.dataHistograms
  );
  const sortedDatesForDataHistograms = useSelector(
    (state: any) => state.publications.sortedDatesForDataHistograms
  );

  const documentPublications = useSelector(
    (state: any) => state.publications.documetsPublications
  );

  const IDsOfPublicationsObjectSearch = useSelector(
    (state: any) => state.publications.IDsOfPublicationsObjectSearch
  );

  useEffect(() => {
    const onResizeFunction = () => {
      setWidth(window.innerWidth);
    };
    window.onresize = onResizeFunction;
    if (sortedDatesForDataHistograms) {
      const sumOfValue = sortedDatesForDataHistograms.sortDataHistograms.reduce(
        (acc: any, el: any) => {
          return (acc = acc + el.value);
        },
        0
      );
      setSumOfValues(sumOfValue);
      const sortDataHistograms =
        sortedDatesForDataHistograms.sortDataHistograms;
      if (window.innerWidth < 767) {
        const dataHistogramsForMobile = sortDataHistograms.map((el: any) => {
          return [el];
        });
        setSortedDatesByParts((prev: any) => {
          return { ...prev, data: dataHistogramsForMobile };
        });
      } else {
        if (sortDataHistograms.length > 8) {
          const sortedDatesByParts = [] as any[];

          const arrIds = [...sortDataHistograms];
          let resultIds = [] as any[];
          const countOfFor = arrIds.length / 8;
          for (let i = 0; i < countOfFor; i++) {
            let activeIds = arrIds.reduce((acc, el) => {
              if (!resultIds.includes(el)) acc.push(el);
              return acc;
            }, []);
            resultIds = [...activeIds].splice(0, 8);
            sortedDatesByParts.push(resultIds);
          }

          setSortedDatesByParts((prev: any) => {
            return { ...prev, data: sortedDatesByParts, count: 0 };
          });
        } else {
          setSortedDatesByParts((prev: any) => {
            return {
              ...prev,
              data: [sortDataHistograms],
              count: 0,
            };
          });
        }
      }
    }
  }, [sortedDatesForDataHistograms, width]);

  return (
    <section className={styles.resultSection}>
      <div className={styles.resultHero}>
        <div className={styles.resultHeroLeft}>
          <h1 className={styles.resultHeroTitle}>
            Ищем. Скоро <br></br> будут результаты
          </h1>
          <p className={styles.resultHeroSubtitle}>
            Поиск может занять некоторое время, <br></br> просим сохранять
            терпение.
          </p>
        </div>
        <div className={styles.resultHeroImgContainer}>
          <img className={styles.resultHeroImg} src={resultHeroImg} alt="" />
        </div>
      </div>
      <div className={styles.resultTableContainer}>
        <h2 className={styles.resultTableTitle}>Общая сводка</h2>
        <p className={styles.resultTableSubtitle}>
          Найдено {sumOfValues} вариантов
        </p>
        <div className={styles.resultTableAndArrowContainer}>
          {sortedDatesForDataHistograms && (
            <img
              onClick={() => {
                setSortedDatesByParts((prev: any) => {
                  if (prev.count === 0) {
                    return { ...prev, count: 0 };
                  } else {
                    return { ...prev, count: prev.count - 1 };
                  }
                });
              }}
              className={
                sortedDatesByParts.count !== 0
                  ? styles.tableArrowLeft
                  : styles.tableArrowLeftWithOpacity
              }
              src={arrowRightTable}
              alt=""
            />
          )}
          <div
            className={
              sortedDatesByParts.data.length !== 0
                ? styles.resultTable
                : styles.resultTableMode
            }
          >
            <div className={styles.resultTableInfo}>
              <p>Период</p>
              <p>Всего</p>
              <p>Риски</p>
            </div>
            {sortedDatesByParts.data.length !== 0 ? (
              <>
                {sortedDatesByParts.data[sortedDatesByParts.count].map(
                  (el: any) => {
                    return (
                      <div className={styles.resultTableItem}>
                        <p>{el.date}</p>
                        <p>{el.value}</p>
                        <p>0</p>
                      </div>
                    );
                  }
                )}
              </>
            ) : dataHistograms === false ? (
              <p className={styles.dataIsNotFoundText}>Данные не найдены</p>
            ) : (
              <p className={styles.loaderPublicationsText}>
                Загружаю данные...
              </p>
            )}
          </div>
          {sortedDatesForDataHistograms && (
            <img
              onClick={() => {
                setSortedDatesByParts((prev: any) => {
                  if (prev.count === sortedDatesByParts.data.length - 1) {
                    return {
                      ...prev,
                      count: sortedDatesByParts.data.length - 1,
                    };
                  } else {
                    return { ...prev, count: prev.count + 1 };
                  }
                });
              }}
              className={
                sortedDatesByParts.count !== sortedDatesByParts.data.length - 1
                  ? styles.tableArrowRight
                  : styles.tableArrowRightWithOpacity
              }
              src={arrowRightTable}
              alt=""
            />
          )}
        </div>
      </div>
      <h2 className={styles.documentsTitle}>Список документов</h2>
      {documentPublications.length !== 0 ? (
        <div className={styles.documentContainerItems}>
          {sortedDatesForDataHistograms !== null &&
            documentPublications
              .flat()
              .map((el: any, index: any) => (
                <DocumentBody documentBody={el} index={index} />
              ))}
        </div>
      ) : dataHistograms !== false && documentPublications.length === 0 ? (
        <p className={styles.dataDocumentsIsNotFoundText}>Данные не найдены</p>
      ) : dataHistograms === false ? (
        <p className={styles.dataIsLoadingText}>Данные не найдены</p>
      ) : (
        <p className={styles.dataIsLoadingText}>Загружаю данные...</p>
      )}
      {loaderPublications && (
        <p className={styles.dataIsLoadingText}>Загружаю данные...</p>
      )}
      {!loaderPublications && documentPublications.length !== 0 && (
        <button
          onClick={() => {
            documentsSearch(IDsOfPublicationsObjectSearch.slice(1));
          }}
          className={styles.btnShowMore}
        >
          Показать еще
        </button>
      )}
    </section>
  );
};

export default ResultScreen;
