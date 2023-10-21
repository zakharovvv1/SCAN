import styles from "./Footer.module.scss";
import logo from "./imgs/logo.svg";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.imgLogo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.contacts}>
        <p className={styles.adress}>г. Москва, Цветной б-р, 40</p>
        <p className={styles.phone}>+7 495 771 21 11</p>
        <p className={styles.email}>info@skan.ru</p>
        <p className={styles.copyright}>Copyright. 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
