import React from "react";

import Header from "./components/HeaderComponents/Header";
import { BrowserRouter, Routes, Route } from "react-router";
import ArticlesPage from "./pages/ArticlesPage";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ArticlesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
