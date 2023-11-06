import styles from "./Result.module.scss";
import resultHeroImg from "./imgs/resultHeroImg.svg";
import arrowLeftTable from "./imgs/arrowLeftTable.svg";
import arrowRightTable from "./imgs/arrowRightTable.svg";
import useCustomHook from "../Logic/useCustomHook";
import { useSelector } from "react-redux";
import DocumentBody from "./Document/DocumentBody";
import { useEffect, useState } from "react";
const ResultScreen = () => {
  const { loaderPublications, setLoaderPublications } = useCustomHook();
  console.log(
    "🚀 ~ file: ResultScreen.tsx:11 ~ ResultScreen ~ loaderPublicationsInResultScreen:",
    loaderPublications
  );
  const [sortedDatesByParts, setSortedDatesByParts] = useState({
    data: [] as unknown,
    count: 0,
  });

  const sortedDatesForDataHistograms = useSelector(
    (state) => state.publications.sortedDatesForDataHistograms
  );
  const documentPublications = useSelector(
    (state) => state.publications.documetsPublications
  );

  useEffect(() => {
    if (sortedDatesForDataHistograms) {
      const sortDataHistograms =
        sortedDatesForDataHistograms.sortDataHistograms;
      if (sortDataHistograms.length > 8) {
        const sortedDatesByParts = [];

        const arrIds = [...sortDataHistograms];
        let resultIds = [];
        const countOfFor = arrIds.length / 8;
        for (let i = 0; i < countOfFor; i++) {
          let activeIds = arrIds.reduce((acc, el) => {
            if (!resultIds.includes(el)) acc.push(el);
            return acc;
          }, []);
          resultIds = [...activeIds].splice(0, 8);
          sortedDatesByParts.push(resultIds);
        }

        setSortedDatesByParts((prev) => {
          return { ...prev, data: sortedDatesByParts };
        });
      }
    }
  }, [sortedDatesForDataHistograms]);

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
        <p className={styles.resultTableSubtitle}>Найдено 4 221 вариантов</p>
        <div className={styles.resultTableAndArrowContainer}>
          {sortedDatesForDataHistograms &&
            sortedDatesForDataHistograms.sortDataHistograms.length > 8 && (
              <img
                onClick={() => {
                  setSortedDatesByParts((prev) => {
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
          <div className={styles.resultTable}>
            <div className={styles.resultTableInfo}>
              <p>Период</p>
              <p>Всего</p>
              <p>Риски</p>
            </div>
            {!loaderPublications && sortedDatesByParts.data.length !== 0 ? (
              <>
                {sortedDatesByParts.data[sortedDatesByParts.count].map((el) => {
                  return (
                    <div className={styles.resultTableItem}>
                      <p>{el.date}</p>
                      <p>{el.value}</p>
                      <p>0</p>
                    </div>
                  );
                })}
              </>
            ) : !loaderPublications && sortedDatesByParts.data.length === 0 ? (
              <p style={{ color: "black" }}>Данные не найдены</p>
            ) : (
              <p className={styles.loaderPublicationsText}>
                Загружаю данные...
              </p>
            )}
          </div>
          {sortedDatesForDataHistograms &&
            sortedDatesForDataHistograms.sortDataHistograms.length > 8 && (
              <img
                onClick={() => {
                  setSortedDatesByParts((prev) => {
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
                  sortedDatesByParts.count !==
                  sortedDatesByParts.data.length - 1
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
      <div className={styles.documentContainerItems}>
        {sortedDatesForDataHistograms !== null &&
          documentPublications
            .flat()
            .map((el, index) => (
              <DocumentBody documentBody={el} index={index} />
            ))}
      </div>
    </section>
  );
};

export default ResultScreen;
