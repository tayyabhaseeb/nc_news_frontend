import React, { useEffect, useState } from "react";
import Input from "../components/ArticlesPageComponents/Input";
import { getArticles } from "../api/api";
import ArticlesCard from "../components/ArticlesPageComponents/articlesCard";
import Spinner from "../components/otherComponents/Spinner";

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [updatedArticles, setUpdatedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  return (
    <div className=" p-6 bg-[rgba(248, 249, 249)]">
      <p className="text-2xl  p-2 mb-1 md:text-6xl">News & Blog</p>
      <p className=" p-2 mb-1 md:text-2xl">
        The latest news and insights on coding and the tech industry
      </p>
      <Input
        setArticles={setArticles}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setUpdatedArticles={setUpdatedArticles}
        articles={articles}
      />

      <div className=" my-6 p-4 flex flex-col  items-center md:flex md:flex-row md:flex-wrap md:justify-center md:gap-4">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {inputValue === "" &&
              articles.map((obj) => {
                return <ArticlesCard key={obj.article_id} obj={obj} />;
              })}
            {inputValue !== "" && !updatedArticles.length ? (
              <Spinner />
            ) : (
              updatedArticles.map((obj) => {
                return <ArticlesCard key={obj.article_id} obj={obj} />;
              })
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ArticlesPage;
