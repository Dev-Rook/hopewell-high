import React, { useSate, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Styles from "./App.module.scss";

import Navbar from "./Components/Main/Navbar";

import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Articles from "./Pages/Articles"
import Staff from "./Pages/Staff"
import Curriculums from "./Pages/Curriculums"
import Contact from "./Pages/Contact"

function App() {
  return (
    <div className={Styles.App}>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"About"} element={<About />} />
          <Route path={"Articles"} element={<Articles />} />
          <Route path={"Staff"} element={<Staff />} />
          <Route path={"Curriculums"} element={<Curriculums />} />
          <Route path={"Contact"} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
