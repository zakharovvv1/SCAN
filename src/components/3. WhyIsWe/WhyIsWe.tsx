import styles from "./WhyIsWe.module.scss";
import advantagesItemImg from "./img/advantagesItemImg.svg";
import advantagesItemImg2 from "./img/advantagesItemImg2.svg";
import advantagesItemImg3 from "./img/advantagesItemImg3.svg";
import imgFullScreen from "./img/imgHeroOnFullScreen.svg";
const WhyIsWe = () => {
  return (
    <section className={styles.whyIsWe}>
      <h2 className={styles.titleH2}>Почему именно мы</h2>
      <div className={styles.advantages}>
        <div className={styles.advantagesItem}>
          <img
            className={styles.advantagesItemImg}
            src={advantagesItemImg}
            alt=""
          />
          <p className={styles.advantagesItemText}>
            Высокая и оперативная скорость обработки заявки
          </p>
        </div>
        <div className={styles.advantagesItem}>
          <img
            className={styles.advantagesItemImg}
            src={advantagesItemImg2}
            alt=""
          />
          <p className={styles.advantagesItemText}>
            Высокая и оперативная скорость обработки заявки
          </p>
        </div>
        <div className={styles.advantagesItem}>
          <img
            className={styles.advantagesItemImg}
            src={advantagesItemImg3}
            alt=""
          />
          <p className={styles.advantagesItemText}>
            Высокая и оперативная скорость обработки заявки
          </p>
        </div>
      </div>
      <div className={styles.imgFullScreen}>
        <img src={imgFullScreen} alt="" />
      </div>
    </section>
  );
};

export default WhyIsWe;
