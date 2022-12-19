import React, { useSate, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Styles from "./App.module.scss";

import Navbar from "./Components/Main/Navbar";

import Landing from "./Pages/Landing";

function App() {
  return (
    <div className={Styles.App}>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path={"/"} element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
