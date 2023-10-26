import styles from "./Search.module.scss";
import formRightImg from "./imgs/formRightImg.svg";
const SearchScreen = () => {
  return (
    <section className={styles.search}>
      <h1 className={styles.searchTitle}>
        Найдите необходимые <br></br> данные в пару кликов.
      </h1>
      <p className={styles.searchSubtitle}>
        Задайте параметры поиска. <br></br> Чем больше заполните, тем точнее
        поиск
      </p>
      <div className={styles.formImgContainer}>
        <form className={styles.formSearch} action="">
          <div className={styles.formLeft}>
            <p className={styles.formText}>ИНН компании*</p>
            <input
              className={styles.inputItem}
              placeholder="10 цифр"
              type="text"
              name=""
              id=""
            />
            <p className={styles.formText}>Тональность</p>
            <select
              defaultValue="Любая"
              className={styles.searchSelect}
              name=""
              id=""
            >
              <option value="Любая">Любая</option>
            </select>
            <p className={styles.formText}>Количество документов в выдаче*</p>
            <input
              className={styles.inputItem + " " + styles.inputItemMode}
              placeholder="От 1 до 1000"
              type="text"
              name=""
              id=""
            />
            <p className={styles.formText + " " + styles.formTextRange}>
              Диапазон поиска*
            </p>
            <div className={styles.rangeContainer}>
              <select
                defaultValue="Любая"
                className={styles.searchSelect + " " + styles.range}
                name=""
                id=""
              >
                <option value="Любая">Дата начала</option>
                <option value="Любая">Любая</option>
              </select>
              <select
                defaultValue="Любая"
                className={styles.searchSelect + " " + styles.range}
                name=""
                id=""
              >
                <option value="Любая">Дата конца</option>
                <option value="Любая">Любая</option>
              </select>
            </div>
          </div>

          <div className={styles.formRight}>
            <div className={styles.formRightItemContainer}>
              <input className={styles.formRightInput} type="checkbox" />
              <p className={styles.formRightText}>
                Признак максимальной полноты
              </p>
            </div>
            <div className={styles.formRightItemContainer}>
              <input className={styles.formRightInput} type="checkbox" />
              <p className={styles.formRightText}>
                Упоминания в бизнес-контексте
              </p>
            </div>
            <div className={styles.formRightItemContainer}>
              <input className={styles.formRightInput} type="checkbox" />
              <p className={styles.formRightText}>Главная роль в публикации</p>
            </div>
            <div className={styles.formRightItemContainer}>
              <input className={styles.formRightInput} type="checkbox" />
              <p className={styles.formRightText}>
                Публикации только с риск-факторами
              </p>
            </div>
            <div className={styles.formRightItemContainer}>
              <input className={styles.formRightInput} type="checkbox" />
              <p className={styles.formRightText}>
                Включать технические новости рынков
              </p>
            </div>
            <div className={styles.formRightItemContainer}>
              <input className={styles.formRightInput} type="checkbox" />
              <p className={styles.formRightText}>
                Включать анонсы и календари
              </p>
            </div>
            <div className={styles.formRightItemContainer}>
              <input className={styles.formRightInput} type="checkbox" />
              <p className={styles.formRightText}>Включать сводки новостей</p>
            </div>
            <div className={styles.btnSearchContainer}>
              <button disabled className={styles.btnSearch}>
                Поиск
              </button>
              <p className={styles.formWarningBtnText}>
                * Обязательные к заполнению поля
              </p>
            </div>
          </div>
        </form>
        <div className={styles.imgRightContainer}>
          <img className={styles.formRightImg} src={formRightImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SearchScreen;
