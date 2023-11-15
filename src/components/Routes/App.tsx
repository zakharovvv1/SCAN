import Header from "../1. Header/Header";
import Main from "../Main/Main";
import Footer from "../05. Footer/Footer";
import "./App.css";
import useCustomHook from "../Logic/useCustomHook";
import GlobalLoader from "../GlobalLoader/GlobalLoader";
function App() {
  const { loaderUserAccount } = useCustomHook();

  return (
    <>
      <Header />
      {loaderUserAccount ? <GlobalLoader /> : <Main />}

      <Footer />
    </>
  );
}

export default App;
