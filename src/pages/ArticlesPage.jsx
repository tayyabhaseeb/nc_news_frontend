import React, { useEffect, useState } from "react";
import Input from "../components/ArticlesPageComponents/Input";
import { getArticles } from "../api/api";
import ArticlesCard from "../components/ArticlesPageComponents/ArticlesCard";
import Select from "../components/ArticlesPageComponents/Select";
import { Link } from "react-router";
import { IoMdAddCircleOutline } from "react-icons/io";
import Shimmer from "../components/Shimmer/Shimmer";

function ArticlesPage({ articles, setArticles }) {
  const [inputValue, setInputValue] = useState("");
  const [updatedArticles, setUpdatedArticles] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles(sortBy, order)
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [sortBy, order]);

  return (
    <div className=" p-6 bg-[rgba(248, 249, 249)]">
      <Link to="/articles/new">
        <IoMdAddCircleOutline className="fixed text-6xl bottom-4 right-4 cursor-pointer fill-[rgba(235,27,36)]" />
      </Link>
      <p className="text-2xl  p-2 mb-1 md:text-6xl">News & Blog</p>
      <p className=" p-2 mb-1 md:text-2xl">
        The latest news and insights on coding and the tech industry
      </p>
      <div className=" flex flex-col gap-4 md:flex-row">
        <Input
          setArticles={setArticles}
          inputValue={inputValue}
          setInputValue={setInputValue}
          setUpdatedArticles={setUpdatedArticles}
          articles={articles}
        />
        <Select
          sortBy={sortBy}
          order={order}
          setSortBy={setSortBy}
          setOrder={setOrder}
        />
      </div>

      <div className=" my-6 p-4 flex flex-col  items-center md:flex md:flex-row md:flex-wrap md:justify-center md:gap-4">
        {isLoading ? (
          <Shimmer />
        ) : (
          <>
            {inputValue === "" &&
              articles.map((obj) => {
                return <ArticlesCard key={obj.article_id} obj={obj} />;
              })}
            {inputValue !== "" && !updatedArticles.length ? (
              <Shimmer />
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
