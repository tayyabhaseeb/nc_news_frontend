import React, { useState } from "react";

import Header from "./components/HeaderComponents/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import ArticlesPage from "./pages/ArticlesPage";
import "./index.css";
import SingleArticlePage from "./pages/SingleArticlePage";
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

        <div className="flex-grow">
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
            <Route
              path="/users"
              element={
                <PrivateRoute>
                  <UsersPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/articles/:id"
              element={
                <PrivateRoute>
                  <SingleArticlePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/articles/topics/:topic"
              element={
                <PrivateRoute>
                  <TopicPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/articles/new"
              element={
                <PrivateRoute>
                  <CreateArticlePage setArticles={setArticles} />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
