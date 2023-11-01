import styles from "./Result.module.scss";
import resultHeroImg from "./imgs/resultHeroImg.svg";
import arrowLeftTable from "./imgs/arrowLeftTable.svg";
import arrowRightTable from "./imgs/arrowRightTable.svg";
import useCustomHook from "../Logic/useCustomHook";
const ResultScreen = () => {
  const { loaderPublications } = useCustomHook();
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
          <img className={styles.tableArrowLeft} src={arrowLeftTable} alt="" />
          <div className={styles.resultTable}>
            <div className={styles.resultTableInfo}>
              <p>Период</p>
              <p>Всего</p>
              <p>Риски</p>
            </div>
            {!loaderPublications ? (
              <>
                <div className={styles.resultTableItem}>
                  <p>10.09.2021</p>
                  <p>5</p>
                  <p>0</p>
                </div>
                <div className={styles.resultTableItem}>
                  <p>10.09.2021</p>
                  <p>5</p>
                  <p>0</p>
                </div>
                <div className={styles.resultTableItem}>
                  <p>10.09.2021</p>
                  <p>5</p>
                  <p>0</p>
                </div>
                <div className={styles.resultTableItem}>
                  <p>10.09.2021</p>
                  <p>5</p>
                  <p>0</p>
                </div>
                <div className={styles.resultTableItem}>
                  <p>10.09.2021</p>
                  <p>5</p>
                  <p>0</p>
                </div>
                <div className={styles.resultTableItem}>
                  <p>10.09.2021</p>
                  <p>5</p>
                  <p>0</p>
                </div>
                <div className={styles.resultTableItem}>
                  <p>10.09.2021</p>
                  <p>5</p>
                  <p>0</p>
                </div>
                <div className={styles.resultTableItem}>
                  <p>10.09.2021</p>
                  <p>5</p>
                  <p>0</p>
                </div>
              </>
            ) : (
              <p className={styles.loaderPublicationsText}>
                Загружаю данные...
              </p>
            )}
          </div>
          <img
            className={styles.tableArrowRight}
            src={arrowRightTable}
            alt=""
          />
        </div>
      </div>
      <h2 className={styles.documentsTitle}>Список документов</h2>
      <div className={styles.documentsContainer}>
        <div className={styles.documentItem}>
          <div className={styles.documentsItemDateInfo}>
            <p className={styles.documentItemDate}></p>
            <p className={styles.documentItemInfo}></p>
          </div>
          <h3 className={styles.documentInfoTitle}></h3>
          <p className={styles.documentInfoCategory}></p>
          <div className={styles.documentMainBody}>
            <img src="" alt="" />
            <p className={styles.documentsMainText}></p>
          </div>
          <button className={styles.documentReadIn}>Читать в источнике</button>
          <p className={styles.wordsCount}></p>
        </div>
      </div>
    </section>
  );
};

export default ResultScreen;
