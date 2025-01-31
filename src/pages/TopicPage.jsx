import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ArticlesCard from "../components/ArticlesPageComponents/articlesCard";
import { getSpecificArticle } from "../api/api";
import Shimmer from "../components/Shimmer/Shimmer";

function TopicPage() {
  const { topic } = useParams();

  const [topicArticles, setTopicArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getSpecificArticle(topic)
      .then((data) => {
        setTopicArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [topic]);

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className=" px-4  py-2 inline-block  mx-4 mt-6 border-2 border-white  rounded text-lg font-semibold bg-[rgba(235,27,36,1)] text-white hover:text-[rgba(235,27,36,1)] hover:shadow-sm hover:bg-gray-200 active:shadow-none active:translate-y-1"
      >
        ← Back
      </button>
      <div className=" my-6 p-4 flex flex-col  items-center md:flex md:flex-row md:flex-wrap md:justify-center md:gap-4">
        {loading ? (
          <Shimmer />
        ) : (
          <>
            {topicArticles.map((obj) => {
              return <ArticlesCard key={obj.article_id} obj={obj} />;
            })}
          </>
        )}
      </div>
    </>
  );
}

export default TopicPage;
