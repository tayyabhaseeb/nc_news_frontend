import React, { useState } from "react";

import Header from "./components/HeaderComponents/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import ArticlesPage from "./pages/ArticlesPage";
import "./index.css";
import SingleArticlePage from "./pages/singleArticlePage";
import TopicPage from "./pages/TopicPage";
import UsersPage from "./pages/UsersPage";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "../auth/PrivateRoute";

import CreateArticlePage from "./pages/CreateArticlePage";

function App() {
  const [articles, setArticles] = useState([]);
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <ArticlesPage articles={articles} setArticles={setArticles} />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/articles/:id" element={<SingleArticlePage />} />
          <Route path="/articles/topics/:topic" element={<TopicPage />} />
          <Route
            path="/articles/new"
            element={<CreateArticlePage setArticles={setArticles} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
