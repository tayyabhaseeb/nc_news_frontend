import React, { useState } from "react";
import Input from "../components/ArticlesPageComponents/Input";

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  return (
    <div className="border-2 border-solid border-red-500 p-6 bg-[rgba(248, 249, 249)]">
      <p className="text-2xl  p-2 mb-1 md:text-6xl">News & Blog</p>
      <p className=" p-2 mb-1 md:text-2xl">
        The latest news and insights on coding and the tech industry
      </p>
      <Input />
      <div>{/* Articles comes here */}</div>
    </div>
  );
}

export default ArticlesPage;
