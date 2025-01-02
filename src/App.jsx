import React from "react";

import Header from "./components/HeaderComponents/Header";
import { BrowserRouter, Routes, Route } from "react-router";
import ArticlesPage from "./pages/ArticlesPage";
import "./index.css";
import SingleArticlePage from "./pages/singleArticlePage";
import TopicPage from "./pages/TopicPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ArticlesPage />} />
          <Route path="/articles/:id" element={<SingleArticlePage />} />
          <Route path="/articles/topics/:topic" element={<TopicPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
