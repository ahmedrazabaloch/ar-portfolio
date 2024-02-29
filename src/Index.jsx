import "./App.css";
import Navbar from "./component/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function MainPage() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route /> */}
      <Navbar />
      <h1>main content</h1>
      {/* </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default MainPage;
