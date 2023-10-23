import styles from "./Result.module.scss";
import resultHeroImg from "./imgs/resultHeroImg.svg";
import arrowLeftTable from "./imgs/arrowLeftTable.svg";
import arrowRightTable from "./imgs/arrowRightTable.svg";
const ResultScreen = () => {
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
          </div>
          <img
            className={styles.tableArrowRight}
            src={arrowRightTable}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ResultScreen;
