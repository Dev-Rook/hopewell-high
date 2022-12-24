import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Styles from "./App.module.scss";

import NavigationIcon from '@mui/icons-material/Navigation';

import Navbar from "./Components/Main/Navbar";

import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Articles from "./Pages/Articles"
import Staff from "./Pages/Staff"
import Curriculums from "./Pages/Curriculums"
import Contact from "./Pages/Contact"

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
      <Navbar />
        <Routes>
          <Route path={"/"} element={<Landing scroll={scrollUp} />} />
          <Route path={"AboutPage"} element={<About scroll={scrollUp} />} />
          <Route path={"Articles"} element={<Articles />} />
          <Route path={"Staff"} element={<Staff />} />
          <Route path={"Curriculums"} element={<Curriculums />} />
          <Route path={"Contact"} element={<Contact />} />
        </Routes>
      </BrowserRouter>
      
      <NavigationIcon
          onClick={scrollUp}
          sx={{fontSize: 30}}
          className={`${Styles.Back_To_Top_Icon} ${backToTop? Styles.Show_Back_To_Top : ""}`}
        />
    </div>
  );
}

export default App;
