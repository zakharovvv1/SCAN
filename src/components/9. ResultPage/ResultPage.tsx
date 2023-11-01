import Footer from "../05. Footer/Footer";
import Header from "../1. Header/Header";
import useCustomHook from "../Logic/useCustomHook";
import styles from "./Result.module.scss";
import ResultScreen from "./ResultScreen";

const ResultPage = () => {
  return (
    <>
      <Header />
      <ResultScreen />
      <Footer />
    </>
  );
};

export default ResultPage;
