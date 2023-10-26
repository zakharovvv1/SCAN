import loaderImg from "./GlobalLoader.svg";
import styles from "./GlobalLoader.module.scss";
const GlobalLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <img src={loaderImg} alt="" />
    </div>
  );
};

export default GlobalLoader;
