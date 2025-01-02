import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArticlesCard from "../components/ArticlesPageComponents/articlesCard";
import Spinner from "../components/otherComponents/Spinner";
import { getSpecificArticle } from "../api/api";

function TopicPage() {
  const { topic } = useParams();

  const [topicArticles, setTopicArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
  }, []);

  return (
    <div className=" my-6 p-4 flex flex-col  items-center md:flex md:flex-row md:flex-wrap md:justify-center md:gap-4">
      {loading ? (
        <Spinner />
      ) : (
        <>
          {topicArticles.map((obj) => {
            return <ArticlesCard key={obj.article_id} obj={obj} />;
          })}
        </>
      )}
    </div>
  );
}

export default TopicPage;
