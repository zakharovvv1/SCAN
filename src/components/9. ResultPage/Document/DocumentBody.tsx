// @ts-nocheck
import styles from "./DocumentBody.module.scss";
import dateformat from "dateformat";
import { FindImgInMarks } from "./FindImgInMarks";

const DocumentBody = ({ documentBody, index }) => {
  const markUpText = documentBody.ok.content.markup;
  const urlSrc = FindImgInMarks(markUpText, index);
  const urlSrcFinal = urlSrc.replace(/'|"/gm, "");
  const parser = new DOMParser();
  const doc = parser.parseFromString(markUpText, "text/xml");

  const paragraphTags = doc!.documentElement!.textContent!;

  const clearText = paragraphTags.replace(/<\/?[^>]+(>|$)/g, "");
  return (
    <div className={styles.documentsContainer}>
      <div className={styles.documentItem}>
        <div className={styles.documentsItemDateInfo}>
          <p className={styles.documentItemDate}>
            {dateformat(
              new Date(documentBody.ok.issueDate),
              "dd/mm/yyyy"
            ).replace(/[/]+/g, ".")}
          </p>
          <div className={styles.documentItemInfo}>
            {documentBody.ok.source.name}
          </div>
        </div>
        <h3 className={styles.documentInfoTitle}>
          {documentBody.ok.title.text}
        </h3>
        <p className={styles.documentInfoCategory}>Технические новости</p>
        <div className={styles.documentMainBody}>
          <div className={styles.imgContainer}>
            <img className={styles.documentImgBody} src={urlSrcFinal} alt="" />
          </div>

          <p className={styles.documentsMainText}>{clearText}</p>
        </div>
        <button className={styles.documentReadIn}>Читать в источнике</button>
        <p className={styles.wordsCount}></p>
      </div>
    </div>
  );
};

export default DocumentBody;
