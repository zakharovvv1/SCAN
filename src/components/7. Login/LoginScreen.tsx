import styles from "./Login.module.scss";
import imgLeft from "./imgs/Characters.svg";
const LoginScreen = () => {
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
          <div className={styles.btns}>
            <button className={styles.loginBtn}>Войти</button>
            <button className={styles.signUpBtn}>Зарегистрироваться</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginScreen;
