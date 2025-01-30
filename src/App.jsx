import React from "react";

import Header from "./components/HeaderComponents/Header";
import { BrowserRouter, Routes, Route } from "react-router";
import ArticlesPage from "./pages/ArticlesPage";
import "./index.css";
import SingleArticlePage from "./pages/singleArticlePage";
import TopicPage from "./pages/TopicPage";
import UsersPage from "./pages/UsersPage";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "../auth/PrivateRoute";
import { IoMdAddCircleOutline } from "react-icons/io";

function App() {
  return (
    <div className="min-h-screen flex flex-col absolute">
      <IoMdAddCircleOutline className="relative bottom-0 left-0" />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <ArticlesPage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/articles/:id" element={<SingleArticlePage />} />
          <Route path="/articles/topics/:topic" element={<TopicPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
