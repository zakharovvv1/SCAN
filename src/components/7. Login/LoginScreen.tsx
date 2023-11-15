import styles from "./Login.module.scss";
import imgLeft from "./imgs/Characters.svg";
import google from "./imgs/google.svg";
import facebook from "./imgs/facebook.svg";
import yandex from "./imgs/yandex.svg";
import keyImg from "./imgs/keyImg.svg";
import { useState } from "react";
import useCustomHook from "../Logic/useCustomHook";
const LoginScreen = () => {
  const { logInAccountHandleClick } = useCustomHook();
  const [userInfo, setUserInfo] = useState({
    login: "",
    password: "",
  });
  return (
    <section className={styles.loginScreen}>
      <div className={styles.left}>
        <h1 className={styles.loginTitle}>
          Для оформления подписки на тариф, необходимо авторизоваться.
        </h1>
        <img src={imgLeft} alt="" />
      </div>
      <div className={styles.right}>
        <form className={styles.form} action="login">
          <img className={styles.keyImg} src={keyImg} alt="" />
          <div className={styles.btns}>
            <button className={styles.loginBtn}>Войти</button>
            <button className={styles.signUpBtn}>Зарегистрироваться</button>
          </div>
          <p className={styles.loginOrPhone}>Логин или номер телефона:</p>
          <input
            onChange={(e) => {
              setUserInfo((prev) => {
                return { ...prev, login: e.target.value };
              });
            }}
            className={
              userInfo.login.length < 6
                ? styles.inputErrorPassword
                : styles.inputPassword
            }
            type={"text"}
          />
          {userInfo.login.length < 6 && userInfo.login.length > 0 && (
            <p className={styles.errorPassword}>Неправильный логин</p>
          )}

          <p className={styles.passwordText}>Пароль</p>
          <input
            onChange={(e) => {
              setUserInfo((prev) => {
                return { ...prev, password: e.target.value };
              });
            }}
            className={
              userInfo.password.length < 6
                ? styles.inputErrorPassword
                : styles.inputPassword
            }
            type="password"
          />

          {userInfo.password.length < 6 && userInfo.password.length > 0 && (
            <p className={styles.errorPassword}>Неправильный пароль</p>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              logInAccountHandleClick(userInfo);
            }}
            disabled={
              userInfo.password.length > 6 && userInfo.login.length > 6
                ? false
                : true
            }
            className={styles.logInBtn}
          >
            Войти
          </button>
          <button className={styles.forgotPassword}>Восстановить пароль</button>
          <p className={styles.loginWithText}>Войти через:</p>
          <div className={styles.loginWithSocial}>
            <img src={google} alt="" />
            <img src={facebook} alt="" />
            <img src={yandex} alt="" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginScreen;
