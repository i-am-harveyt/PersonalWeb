import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/PersonalWeb/home" element={<Home />} />
        <Route exact path="/PersonalWeb/about" element={<About />} />
        <Route exact path="/PersonalWeb/work" element={<Work />} />
        <Route exact path="/PersonalWeb/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
