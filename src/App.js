import React from "react";
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import MainPage from "./Components/MainPage";
import { Fragment } from 'react';
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Footer";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/main" element={<MainPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
