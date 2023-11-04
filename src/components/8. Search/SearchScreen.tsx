import { useEffect, useRef, useState } from "react";
import styles from "./Search.module.scss";
import formRightImg from "./imgs/formRightImg.svg";
import { CompareDates, DateToYMDNow } from "./DateToYYMMDD";
import useCustomHook from "../Logic/useCustomHook";
const SearchScreen = () => {
  const { searchHandleClick } = useCustomHook();

  console.log("Перерисовка компонента");
  const ref = useRef(null);
  console.log("🚀 ~ file: SearchScreen.tsx:14 ~ SearchScreen ~ ref:", ref);
  const refItem = useRef(null);
  console.log(
    "🚀 ~ file: SearchScreen.tsx:16 ~ SearchScreen ~ refItem:",
    refItem
  );
  const refInputStart = useRef(null);
  console.log(
    "🚀 ~ file: SearchScreen.tsx:17 ~ SearchScreen ~ refInputStart:",
    refInputStart
  );
  const refInputEnd = useRef(null);
  const dateNow = DateToYMDNow();
  const [checkboxState, setCheckboxState] = useState({
    reason: false,
    mentions: false,
    mainRole: false,
    publicWithRisk: false,
    turnOnNews: false,
    turnOnCalendars: false,
    turnOnReports: false,
    INNOfCompany: "7728551528",
    tonal: "Любая",
    tonalSelectVision: false,
    countOfDocumentsInOut: "1000",
    typeOfInputsStart: "text",
    typeOfInputsEnd: "text",
    searchRange: {
      start: "2020-11-02",
      end: "2023-11-02",
    },
  });
  console.log(
    "🚀 ~ file: SearchScreen.tsx:37 ~ SearchScreen ~ tonalSelectVision:",
    checkboxState.tonalSelectVision
  );
  const isVisibleErrorStateForDocumentCount =
    Number(checkboxState.countOfDocumentsInOut) > 1000 ||
    Number(checkboxState.countOfDocumentsInOut) <= 0;
  const compareDatesBoolean = CompareDates(
    checkboxState.searchRange.start,
    checkboxState.searchRange.end
  );
  const btnSearchToogle =
    checkboxState.INNOfCompany.length !== 10 ||
    isVisibleErrorStateForDocumentCount ||
    checkboxState.searchRange.start === "" ||
    checkboxState.searchRange.end === "" ||
    compareDatesBoolean;

  useEffect(() => {
    const onClick = (event) => {
      const typeOfInputsForDateStart =
        checkboxState.searchRange.start === "" ? "text" : "date";
      const typeOfInputsForDateEnd =
        checkboxState.searchRange.end === "" ? "text" : "date";
      const inputsBoolean =
        checkboxState.typeOfInputsStart === "date" &&
        refInputStart &&
        !refInputStart.current.contains(event.target) &&
        checkboxState.typeOfInputsEnd === "date" &&
        refInputEnd &&
        !refInputEnd.current.contains(event.target);
      if (
        checkboxState.tonalSelectVision === true &&
        ref.current &&
        !ref.current.contains(event.target) &&
        inputsBoolean
      ) {
        setCheckboxState((prev) => {
          return {
            ...prev,
            tonalSelectVision: false,
            typeOfInputsEnd: typeOfInputsForDateEnd,
            typeOfInputsStart: typeOfInputsForDateStart,
          };
        });
      }
    };
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [
    checkboxState.typeOfInputsEnd,
    checkboxState.typeOfInputsStart,
    checkboxState.tonalSelectVision,
    checkboxState.searchRange.start,
    checkboxState.searchRange.end,
  ]);

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
              className={
                checkboxState.INNOfCompany.length !== 10
                  ? styles.inputItemError
                  : styles.inputItem
              }
              placeholder="10 цифр"
              type="number"
              name=""
              id=""
              onChange={(e) => {
                setCheckboxState((prev) => {
                  return { ...prev, INNOfCompany: e.target.value };
                });
              }}
              value={checkboxState.INNOfCompany}
            />
            {checkboxState.INNOfCompany.length !== 10 &&
              checkboxState.INNOfCompany.length > 0 && (
                <p className={styles.INNOfCompanyError}>
                  Введите корректные данные
                </p>
              )}
            <p className={styles.formText}>Тональность</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.target;
                if (e.target !== refItem.current) {
                  setCheckboxState((prev) => {
                    return { ...prev, tonalSelectVision: true };
                  });
                }
              }}
              className={styles.searchSelect}
              ref={ref}
              id=""
            ></button>
            <div className={styles.tonalItem}>{checkboxState.tonal}</div>
            {checkboxState.tonalSelectVision && (
              <div className={styles.tonalAllPosition}>
                <div
                  onClick={() => {
                    setCheckboxState((prev) => {
                      return {
                        ...prev,
                        tonalSelectVision: false,
                        tonal: "Любая",
                      };
                    });
                  }}
                  className={styles.tonalAllPositionItem}
                >
                  Любая
                </div>
                <div
                  onClick={() => {
                    setCheckboxState((prev) => {
                      return {
                        ...prev,
                        tonal: "Другая",
                        tonalSelectVision: false,
                      };
                    });
                  }}
                  className={styles.tonalAllPositionItem}
                  ref={refItem}
                >
                  Другая
                </div>
              </div>
            )}
            <p className={styles.formText}>Количество документов в выдаче*</p>
            <input
              className={
                isVisibleErrorStateForDocumentCount &&
                checkboxState.countOfDocumentsInOut !== ""
                  ? styles.inputItemError
                  : styles.inputItem
              }
              placeholder="От 1 до 1000"
              type="number"
              name=""
              id=""
              onChange={(e) => {
                setCheckboxState((prev) => {
                  return {
                    ...prev,
                    countOfDocumentsInOut: e.target.value,
                  };
                });
              }}
              value={checkboxState.countOfDocumentsInOut}
            />
            {isVisibleErrorStateForDocumentCount &&
              checkboxState.countOfDocumentsInOut !== "" && (
                <p className={styles.countOfDocumentsInOutError}>
                  Обязательное поле
                </p>
              )}
            <p className={styles.formText + " " + styles.formTextRange}>
              Диапазон поиска*
            </p>
            <div className={styles.rangeContainer}>
              <input
                onClick={() => {
                  setCheckboxState((prev) => {
                    return { ...prev, typeOfInputsStart: "date" };
                  });
                }}
                ref={refInputStart}
                type={checkboxState.typeOfInputsStart}
                className={
                  compareDatesBoolean
                    ? styles.searchSelect +
                      " " +
                      styles.range +
                      " " +
                      styles.errorDateInput
                    : styles.searchSelect + " " + styles.range
                }
                name="dateOfStart"
                id=""
                max={dateNow}
                min="2010-01-01"
                onKeyDown={(event) => {
                  event.preventDefault();
                }}
                onChange={(e) => {
                  setCheckboxState((prev) => {
                    return {
                      ...prev,
                      searchRange: {
                        ...prev.searchRange,
                        start: e.target.value,
                      },
                    };
                  });
                }}
                value={checkboxState.searchRange.start}
                placeholder="Дата начала"
              ></input>
              <input
                onClick={() => {
                  setCheckboxState((prev) => {
                    return { ...prev, typeOfInputsEnd: "date" };
                  });
                }}
                ref={refInputEnd}
                type={checkboxState.typeOfInputsEnd}
                className={
                  compareDatesBoolean
                    ? styles.searchSelect +
                      " " +
                      styles.range +
                      " " +
                      styles.errorDateInput
                    : styles.searchSelect + " " + styles.range
                }
                name=""
                id=""
                max={dateNow}
                min="2010-01-01"
                onKeyDown={(event) => {
                  event.preventDefault();
                }}
                onChange={(e) => {
                  setCheckboxState((prev) => {
                    return {
                      ...prev,
                      searchRange: {
                        ...prev.searchRange,
                        end: e.target.value,
                      },
                    };
                  });
                }}
                value={checkboxState.searchRange.end}
                placeholder="Дата конца"
              ></input>
            </div>
            {compareDatesBoolean && (
              <div className={styles.dateError}>Введите корректные данные</div>
            )}
          </div>

          <div className={styles.formRight}>
            <div
              className={
                checkboxState.reason
                  ? styles.formRightItemContainer
                  : styles.formRightItemContainerFalse
              }
            >
              <div
                onClick={() => {
                  setCheckboxState((prev) => {
                    return { ...prev, reason: !prev.reason };
                  });
                }}
                className={
                  checkboxState.reason
                    ? styles.beforeContainer
                    : styles.beforeContainerFalse
                }
              ></div>
              <input className={styles.formRightInput} type="checkbox" />
              <p className={styles.formRightText}>
                Признак максимальной полноты
              </p>
            </div>
            <div
              className={
                checkboxState.mentions
                  ? styles.formRightItemContainer
                  : styles.formRightItemContainerFalse
              }
            >
              <div
                onClick={() => {
                  setCheckboxState((prev) => {
                    return { ...prev, mentions: !prev.mentions };
                  });
                }}
                className={
                  checkboxState.mentions
                    ? styles.beforeContainer
                    : styles.beforeContainerFalse
                }
              ></div>
              <input className={styles.formRightInput} type="checkbox" />
              <p className={styles.formRightText}>
                Упоминания в бизнес-контексте
              </p>
            </div>
            <div
              className={
                checkboxState.mainRole
                  ? styles.formRightItemContainer
                  : styles.formRightItemContainerFalse
              }
            >
              <div
                onClick={() => {
                  setCheckboxState((prev) => {
                    return { ...prev, mainRole: !prev.mainRole };
                  });
                }}
                className={
                  checkboxState.mainRole
                    ? styles.beforeContainer
                    : styles.beforeContainerFalse
                }
              ></div>
              <input className={styles.formRightInput} type="checkbox" />
              <p className={styles.formRightText}>Главная роль в публикации</p>
            </div>
            <div
              className={
                checkboxState.publicWithRisk
                  ? styles.formRightItemContainer
                  : styles.formRightItemContainerFalse
              }
            >
              <div
                onClick={() => {
                  setCheckboxState((prev) => {
                    return { ...prev, publicWithRisk: !prev.publicWithRisk };
                  });
                }}
                className={
                  checkboxState.publicWithRisk
                    ? styles.beforeContainer
                    : styles.beforeContainerFalse
                }
              ></div>
              <input className={styles.formRightInput} type="checkbox" />
              <p className={styles.formRightText}>
                Публикации только с риск-факторами
              </p>
            </div>
            <div
              className={
                checkboxState.turnOnNews
                  ? styles.formRightItemContainer
                  : styles.formRightItemContainerFalse
              }
            >
              <div
                onClick={() => {
                  setCheckboxState((prev) => {
                    return { ...prev, turnOnNews: !prev.turnOnNews };
                  });
                }}
                className={
                  checkboxState.turnOnNews
                    ? styles.beforeContainer
                    : styles.beforeContainerFalse
                }
              ></div>
              <input className={styles.formRightInput} type="checkbox" />
              <p className={styles.formRightText}>
                Включать технические новости рынков
              </p>
            </div>
            <div
              className={
                checkboxState.turnOnCalendars
                  ? styles.formRightItemContainer
                  : styles.formRightItemContainerFalse
              }
            >
              <div
                onClick={() => {
                  setCheckboxState((prev) => {
                    return { ...prev, turnOnCalendars: !prev.turnOnCalendars };
                  });
                }}
                className={
                  checkboxState.turnOnCalendars
                    ? styles.beforeContainer
                    : styles.beforeContainerFalse
                }
              ></div>
              <input className={styles.formRightInput} type="checkbox" />
              <p className={styles.formRightText}>
                Включать анонсы и календари
              </p>
            </div>
            <div
              className={
                checkboxState.turnOnReports
                  ? styles.formRightItemContainer
                  : styles.formRightItemContainerFalse
              }
            >
              <div
                onClick={() => {
                  setCheckboxState((prev) => {
                    return { ...prev, turnOnReports: !prev.turnOnReports };
                  });
                }}
                className={
                  checkboxState.turnOnReports
                    ? styles.beforeContainer
                    : styles.beforeContainerFalse
                }
              ></div>
              <input className={styles.formRightInput} type="checkbox" />
              <p className={styles.formRightText}>Включать сводки новостей</p>
            </div>
            <div className={styles.btnSearchContainer}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  searchHandleClick(checkboxState);
                }}
                // disabled={btnSearchToogle}
                className={styles.btnSearch}
              >
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
