import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalLoaderContext } from "./helpers/GlobalLoader";
import API from "./api";
import { ROUTES } from "./lib/consts";
import Register from "./pages/Register";
import Winner from "./components/Winner/Winner";
import Term from "./components/Term/Term";
import HowTo from "./components/HowToParticipate/HowTo";
import Already from "./pages/Already";
import ValidOR from "./pages/ValidQR";
import OTPpage from "./pages/OTPpage";
import Thankyou from "./pages/Thankyou";
// import Home from "./pages/Home";
// import Counter from "./pages/Counter";

function App() {
  const { showLoader, hideLoader } = useGlobalLoaderContext();
  

  useEffect(() => {
    API.initialize(showLoader, hideLoader);

    // if (!isLoggedIn) {
    //   API.createUser().then((response) => {
    //     store.dispatch(setUserKey(response));
    //     if (!response.isLoggedIn && isLoggedIn) {
    //       logoutUser();
    //       navigate(ROUTES.REGISTER);
    //       toast.info("Your session has been expired");
    //     }
    //   });
    // }

    window.addEventListener("online", () => {
      API.setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      API.setIsOnline(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  return (
    <>
      <div className="App">
        
        <Routes>
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route path={ROUTES.HOWTOPARTICIAPTE} element={<HowTo />} />
          <Route path={ROUTES.DAILYWINNER} element={<Winner />} />
          <Route path={ROUTES.TERMSANDCONDITIONS} element={<Term />} />
          <Route path={ROUTES.ALREADY} element={<Already />} />
          <Route path={ROUTES.VALIDQR} element={<ValidOR />} />

          <Route path={ROUTES.OTPPAGE} element={<OTPpage />} />
          <Route path={ROUTES.THANKYOU} element={<Thankyou />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
