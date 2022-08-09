import React, { useState } from "react";
import './App.css';

import Header from "./components/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";



function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const RenderPage = () => {
    switch (currentPage) {
      case "Home":
      default:
        return <Home />;
      case "About":
        return <About />;
    }
  };

  return (
    <div>
      <Header setCurrentPage={setCurrentPage}></Header>
      <RenderPage />
    </div>
  );
}



export default App;

