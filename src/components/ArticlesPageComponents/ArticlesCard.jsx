import React from "react";
import { Link } from "react-router";

function ArticlesCard({ obj }) {
  return (
    <Link to={`/articles/${obj.article_id}`}>
      <div className="w-96 h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
        <div className="w-full h-40">
          <img
            className="w-full h-full object-cover rounded-t-lg"
            src={obj.article_img_url}
            alt=""
          />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[rgba(235,27,36)] dark:text-white">
            {obj.title}
          </h5>
          <p>Topic: {obj.topic}</p>
          <p>Votes: {obj.votes}</p>
          <p>Comments: {obj.comment_count}</p>
        </div>
      </div>
    </Link>
  );
}

export default ArticlesCard;
