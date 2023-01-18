import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Styles from "./App.module.scss";

import NavigationIcon from "@mui/icons-material/Navigation";

import Navbar from "./Components/Main/Navbar";
import Footer from "./Components/Main/Footer";
import Fallback from "./Components/Main/Fallback";
import Contact from "./Page-Sections/Contact";

// Page import Start
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Documents = lazy(() => import("./Pages/Documents"));
const Curricula = lazy(() => import("./Pages/Curricula"));
const Updates = lazy(() => import("./Pages/Updates"));
const Staff = lazy(() => import("./Pages/Staff"));
const Apply = lazy(() => import("./Pages/Apply"));
const Error = lazy(() => import("./Pages/Error"));
// Page Import End

// Dynamic Page Imports Start
const CurriculaSingle = lazy(() => import("./Dynamic-Pages/CurriculaSingle"));
const StaffSingle = lazy(() => import("./Dynamic-Pages/StaffSingle"));
const UpdateSingle = lazy(() => import("./Dynamic-Pages/UpdateSingle"));
// Dynamic Page Imports End

function App() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Navbar scroll={scrollUp} />
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"About"} element={<About />} />
            <Route path={"Curricula"} element={<Curricula />} />
            <Route path={"Documents"} element={<Documents />} />
            <Route path={"Updates"} element={<Updates />} />
            <Route path={"Staff"} element={<Staff />} />
            <Route path={"Apply"} element={<Apply />} />
            <Route path={"*"} element={<Error />} />

            {/* Dynamic Routes Start */}
            <Route path={"Curricula/:id"} element={<CurriculaSingle />} />
            <Route path={"Update/:id"} element={<UpdateSingle />} />
            <Route path={"Staffer/:id"} element={<StaffSingle />} />
            {/* Dynamic Routes End */}
          </Routes>
        </Suspense>
        <Contact />
        <Footer scroll={scrollUp} />
      </BrowserRouter>

      <NavigationIcon
        onClick={scrollUp}
        sx={{ fontSize: 30 }}
        className={`${Styles.Back_To_Top_Icon} ${
          backToTop ? Styles.Show_Back_To_Top : ""
        }`}
      />
    </div>
  );
}

export default App;
