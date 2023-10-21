import rateItemInfoIncludeItemImg from "./imgs/rateItemInfoIncludeItemImg.svg";
import rateItemTitleImg from "./imgs/rateItemTitleImg.svg";
import rateItemTitleImg2 from "./imgs/rateItemTitleImg2.svg";
import rateItemTitleImg3 from "./imgs/rateItemTitleImg3.svg";
import styles from "./OurRates.module.scss";
const OurRates = () => {
  return (
    <section className={styles.ourRatesSection}>
      <h2 className={styles.titleH2}>наши тарифы</h2>
      <div className={styles.ratesContainer}>
        <div className={styles.rateItem}>
          <div className={styles.rateItemTitleBeginner}>
            <div className={styles.rateItemTitleLeft}>
              <h3 className={styles.rateItemTitleH3}>Beginner</h3>
              <p className={styles.rateItemTitleText}>
                Для небольшого исследования
              </p>
            </div>
            <img
              className={styles.rateItemTitleImg}
              src={rateItemTitleImg}
              alt=""
            />
          </div>
          <div className={styles.rateItemInfo}>
            <span className={styles.rateItemInfoPrice}>799 ₽</span>
            <span className={styles.rateItemInfoPriceOld}>1200 ₽</span>
            <p className={styles.rateItemInfoTextUnderPrice}>
              или 150 ₽/мес. при рассрочке на 24 мес.
            </p>
            <p className={styles.rateItemInfoIncludeText}>В тариф входит:</p>
            <div className={styles.rateItemInfoIncludeItem}>
              <img src={rateItemInfoIncludeItemImg} alt="" />
              <p>Безлимитная история запросов</p>
            </div>
            <div className={styles.rateItemInfoIncludeItem}>
              <img src={rateItemInfoIncludeItemImg} alt="" />
              <p>Безопасная сделка</p>
            </div>
            <div className={styles.rateItemInfoIncludeItem}>
              <img src={rateItemInfoIncludeItemImg} alt="" />
              <p>Поддержка 24/7</p>
            </div>
            <button className={styles.goToProfile}>
              Перейти в личный кабинет
            </button>
          </div>
        </div>
        <div className={styles.rateItem + " " + styles.rateItemPro}>
          <div className={styles.rateItemTitlePro}>
            <div className={styles.rateItemTitleLeft}>
              <h3 className={styles.rateItemTitleH3}>Pro</h3>
              <p className={styles.rateItemTitleText}>Для HR и фрилансеров</p>
            </div>
            <img
              className={styles.rateItemTitleImg}
              src={rateItemTitleImg2}
              alt=""
            />
          </div>
          <div className={styles.rateItemInfo}>
            <span className={styles.rateItemInfoPrice}>1299 ₽</span>
            <span className={styles.rateItemInfoPriceOld}>2600 ₽</span>
            <p className={styles.rateItemInfoTextUnderPrice}>
              или 279 ₽/мес. при рассрочке на 24 мес.{" "}
            </p>
            <p className={styles.rateItemInfoIncludeText}>В тариф входит:</p>
            <div className={styles.rateItemInfoIncludeItem}>
              <img src={rateItemInfoIncludeItemImg} alt="" />
              <p>Безлимитная история запросов</p>
            </div>
            <div className={styles.rateItemInfoIncludeItem}>
              <img src={rateItemInfoIncludeItemImg} alt="" />
              <p>Безопасная сделка</p>
            </div>
            <div className={styles.rateItemInfoIncludeItem}>
              <img src={rateItemInfoIncludeItemImg} alt="" />
              <p>Поддержка 24/7</p>
            </div>
            <button
              className={styles.goToProfile + " " + styles.goToProfilePro}
            >
              Подробнее
            </button>
          </div>
        </div>
        <div className={styles.rateItem + " " + styles.rateItemBusiness}>
          <div className={styles.rateItemTitleBusiness}>
            <div className={styles.rateItemTitleLeft}>
              <h3
                className={
                  styles.rateItemTitleH3 + " " + styles.rateItemTitleH3Business
                }
              >
                Business
              </h3>
              <p
                className={
                  styles.rateItemTitleText +
                  " " +
                  styles.rateItemTitleTextBusiness
                }
              >
                Для корпоративных клиентов
              </p>
            </div>
            <img
              className={styles.rateItemTitleImg}
              src={rateItemTitleImg3}
              alt=""
            />
          </div>
          <div className={styles.rateItemInfo}>
            <span className={styles.rateItemInfoPrice}>2379 ₽</span>
            <span className={styles.rateItemInfoPriceOld}>3700 ₽</span>
            <p className={styles.rateItemInfoTextUnderPrice}>
              или 279 ₽/мес. при рассрочке на 24 мес.{" "}
            </p>
            <p className={styles.rateItemInfoIncludeText}>В тариф входит:</p>
            <div className={styles.rateItemInfoIncludeItem}>
              <img src={rateItemInfoIncludeItemImg} alt="" />
              <p>Безлимитная история запросов</p>
            </div>
            <div className={styles.rateItemInfoIncludeItem}>
              <img src={rateItemInfoIncludeItemImg} alt="" />
              <p>Безопасная сделка</p>
            </div>
            <div className={styles.rateItemInfoIncludeItem}>
              <img src={rateItemInfoIncludeItemImg} alt="" />
              <p>Поддержка 24/7</p>
            </div>
            <button
              className={styles.goToProfile + " " + styles.goToProfileBusiness}
            >
              Подробнее{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurRates;
