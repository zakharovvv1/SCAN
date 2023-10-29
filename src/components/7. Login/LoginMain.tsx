import Footer from "../05. Footer/Footer";
import Header from "../1. Header/Header";
import GlobalLoader from "../GlobalLoader/GlobalLoader";
import useCustomHook from "../Logic/useCustomHook";
import LoginScreen from "./LoginScreen";

const LoginMain = () => {
  const { loaderUserAccount } = useCustomHook();

  return (
    <>
      <Header />
      {loaderUserAccount ? <GlobalLoader /> : <LoginScreen />}
      <Footer />
    </>
  );
};

export default LoginMain;
