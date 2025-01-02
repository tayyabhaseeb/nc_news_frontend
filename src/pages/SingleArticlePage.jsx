import React, { useEffect, useState } from "react";
import {
  decrementVotes,
  getArticle,
  getArticleComments,
  incrementVotes,
} from "../api/api";
import { useParams } from "react-router";
import Comments from "../components/SingleArticlePage/Comments";
import AddCommentForm from "../components/SingleArticlePage/AddCommentForm";

function SingleArticlePage() {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [votes, setVotes] = useState(0);
  const [isAddedToggle, setIsAddedToggle] = useState(false);
  const [isDecrementToggle, setIsDecrementToggle] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    Promise.all([getArticle(id), getArticleComments(id)])
      .then(([articlesData, articlesCommentsData]) => {
        setArticle(articlesData);
        setVotes(articlesData.votes);
        setComments(articlesCommentsData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [id]);

  function handleAddClick() {
    setIsDecrementToggle((prev) => !prev);

    if (!isDecrementToggle) {
      setVotes((prev) => prev + 1);

      incrementVotes(id).catch(() => {
        setVotes((prev) => prev - 1);
      });
    } else {
      setVotes((prev) => prev - 1);
      decrementVotes(id).catch(() => {
        setVotes((prev) => prev + 1);
      });
    }
  }

  function handleDecrementClick() {
    setIsAddedToggle((prev) => !prev);

    if (!isAddedToggle) {
      setVotes((prev) => prev - 1);

      decrementVotes(id).catch(() => {
        setVotes((prev) => prev + 1);
      });
    } else {
      setVotes((prev) => prev + 1);
      incrementVotes(id).catch(() => {
        setVotes((prev) => prev - 1);
      });
    }
  }

  return (
    <>
      <div className="p-4 m-4 bg-white border border-gray-200 rounded-lg flex flex-col justify-center items-center gap-4 md:gap-6 md:p-6 md:w-1/2 md:mx-auto">
        <p className="text-2xl text-center font-bold md:text-4xl md:my-4">
          {article.title}
        </p>
        <img src={article.article_img_url} />
        <p>{article.body}</p>

        <div className=" p-4 text-center">
          <h3>Do you like this blog ?</h3>
          <p>Votes: {votes}</p>
          <div className="flex gap-4 justify-center my-4">
            <button onClick={handleAddClick}>👍</button>
            <button onClick={handleDecrementClick}>👎</button>
          </div>
        </div>
      </div>
      <Comments comments={comments} />
      <AddCommentForm setComments={setComments} id={id} />
    </>
  );
}

export default SingleArticlePage;
