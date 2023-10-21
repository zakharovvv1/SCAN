import styles from "./Hero.module.scss";
import heroImg from "./imgs/hero img.svg";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          сервис по поиску публикаций <br></br> о компании <br></br> по его ИНН
        </h1>
        <p className={styles.subtitle}>
          Комплексный анализ публикаций, получение данных <br></br> в формате
          PDF на электронную почту.
        </p>
        <button className={styles.btn}>Запросить данные</button>
      </div>
      <div className={styles.right}>
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
