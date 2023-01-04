import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Styles from "./App.module.scss";

import NavigationIcon from "@mui/icons-material/Navigation";

import Navbar from "./Components/Main/Navbar";
import Footer from "./Components/Main/Footer";
import Fallback from "./Pages/Fallback";

import SingleCurriculum from "./Dynamic-Pages/SingleCurriculum";

// Page import Start
const Landing = lazy(() => import("./Pages/Landing"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const Articles = lazy(() => import("./Pages/Articles"));
const Staff = lazy(() => import("./Pages/Staff"));
const Curriculums = lazy(() => import("./Pages/Curriculums"));
const Contact = lazy(() => import("./Pages/Contact"));
const Documents = lazy(() => import("./Pages/Documents"));
const Error = lazy(() => import("./Pages/Error"));
// const Fallback = lazy(() => import("./Pages/Fallback"));
// Page Import End

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
            <Route path={"/"} element={<Landing />} />
            <Route path={"AboutPage"} element={<AboutPage />} />
            <Route path={"News"} element={<Articles />} />
            <Route path={"Staff"} element={<Staff />} />
            <Route path={"Curriculums"} element={<Curriculums />} />
            <Route path={"Documents"} element={<Documents />} />
            <Route path={"Contact"} element={<Contact />} />
            {/* <Route path={"Fallback"} element={<Fallback />} /> */}
            <Route path={"*"} element={<Error />} />

            {/* Dynamic Routes */}
            <Route path={"/Curriculum/:id"} element={<SingleCurriculum />} />
            {/* Dynamic Routes */}
          </Routes>
        </Suspense>
        <Footer />
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
