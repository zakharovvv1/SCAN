import { useSelector } from "react-redux";
import styles from "./DocumentBody.module.scss";

const DocumentBody = ({ document }) => {
  console.log(document, "Приходящий документ");
  return (
    <div className={styles.documentsContainer}>
      <div className={styles.documentItem}>
        <div className={styles.documentsItemDateInfo}>
          <p className={styles.documentItemDate}></p>
          <p className={styles.documentItemInfo}></p>
        </div>
        <h3 className={styles.documentInfoTitle}>{document.title.text}</h3>
        <p className={styles.documentInfoCategory}></p>
        <div className={styles.documentMainBody}>
          <img src="" alt="" />
          <p className={styles.documentsMainText}></p>
        </div>
        <button className={styles.documentReadIn}>Читать в источнике</button>
        <p className={styles.wordsCount}></p>
      </div>
    </div>
  );
};

export default DocumentBody;
