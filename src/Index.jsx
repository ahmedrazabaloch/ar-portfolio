import "./App.css";
import HomePage from "./component/HomePage.jsx";
import Navbar from "./component/index.js";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function MainPage() {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}

export default MainPage;
