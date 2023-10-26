import { useSelector } from "react-redux";
import BurgerMenu from "../6. BurgerMenu/BurgerMenu";
import styles from "./Header.module.scss";
import avatar from "./Imgs/avatar.png";
import logo from "./Imgs/Logo.svg";
import { TypeUserInStore } from "../store/userSlice";
const Header = () => {
  const currentUserInStore: TypeUserInStore = useSelector(
    (state) => state.user
  );
  console.log(
    "🚀 ~ file: Header.tsx:11 ~ Header ~ currentUserInStore:",
    currentUserInStore
  );
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
      {currentUserInStore.companyLimit !== 0 && (
        <div className={styles.limitCompany}>
          <div className={styles.limitCompanyTextItem}>
            <p>Использовано компаний</p>
            <p>Лимит по компаниям</p>
          </div>
          <div className={styles.limitCompanyCountItem}>
            <div>{currentUserInStore.usedCompanyCount}</div>
            <div>{currentUserInStore.companyLimit}</div>
          </div>
        </div>
      )}
      {currentUserInStore.companyLimit !== 0 ? (
        <div className={styles.user}>
          <div className={styles.userNameAndQuit}>
            <p className={styles.userName}>Алексей А.</p>
            <button className={styles.quit}>Выйти</button>
          </div>
          <img className={styles.avatar} src={avatar} alt="" />
        </div>
      ) : (
        <div className={styles.logInOrSignUpContainer}>
          <button className={styles.SignUpBtnHeader}>Зарегистрироваться</button>
          <div className={styles.loginBtnHeaderContainer}>
            <button className={styles.loginBtnHeader}>Войти</button>
          </div>
        </div>
      )}

      <BurgerMenu />
    </header>
  );
};

export default Header;
