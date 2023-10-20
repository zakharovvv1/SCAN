import styles from "./Header.module.scss";
import avatar from "./Imgs/avatar.png";
import logo from "./Imgs/Logo.svg";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <ul className={styles.ul}>
        <li>
          <a>Главная</a>
        </li>
        <li>
          <a>Тарифы</a>
        </li>
        <li>
          <a>FAQ</a>
        </li>
      </ul>
      <div className={styles.limitCompany}>
        <div className={styles.limitCompanyTextItem}>
          <p>Использовано компаний</p>
          <p>Лимит по компаниям</p>
        </div>
        <div className={styles.limitCompanyCountItem}>
          <div>{34}</div>
          <div>{100}</div>
        </div>
      </div>
      <div className={styles.user}>
        <div className={styles.userNameAndQuit}>
          <p className={styles.userName}>Алексей А.</p>
          <button className={styles.quit}>Выйти</button>
        </div>
        <img className={styles.avatar} src={avatar} alt="" />
      </div>
    </header>
  );
};

export default Header;
