import React from "react";

import Header from "./components/HeaderComponents/Header";
import { BrowserRouter, Routes, Route } from "react-router";
import ArticlesPage from "./pages/ArticlesPage";
import "./index.css";
import SingleArticlePage from "./pages/singleArticlePage";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ArticlesPage />} />
          <Route path="/articles/:id" element={<SingleArticlePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
