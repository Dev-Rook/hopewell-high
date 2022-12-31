import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Styles from "./App.module.scss";

import NavigationIcon from "@mui/icons-material/Navigation";

import Navbar from "./Components/Main/Navbar";
import Footer from "./Components/Main/Footer";

import Landing from "./Pages/Landing";
import AboutPage from "./Pages/AboutPage";
import Articles from "./Pages/Articles";
import Staff from "./Pages/Staff";
import Curriculums from "./Pages/Curriculums";
import Contact from "./Pages/Contact";
import Documents from "./Pages/Documents";
import Error from "./Pages/Error";

import SingleCurriculum from "./Dynamic-Pages/SingleCurriculum";

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
        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"AboutPage"} element={<AboutPage />} />
          <Route path={"News"} element={<Articles />} />
          <Route path={"Staff"} element={<Staff />} />
          <Route path={"Curriculums"} element={<Curriculums />} />
          <Route path={"Documents"} element={<Documents />} />
          <Route path={"Contact"} element={<Contact />} />
          <Route path={"*"} element={<Error />} />

          {/* Dynamic Routes */}
          <Route path={"/Curriculum/:id"} element={<SingleCurriculum />} />
          {/* Dynamic Routes */}
        </Routes>
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
