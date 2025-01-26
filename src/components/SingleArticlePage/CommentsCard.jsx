import React from "react";
import { deleteCommentById } from "../../api/api";

function CommentsCard({ obj, showDeleteBtn, setComments }) {
  function handleDeleteComment(id) {
    setComments((prevComments) => {
      return prevComments.filter((obj) => obj.comment_id !== id);
    });

    deleteCommentById(id);
  }

  return (
    <ul role="list" className=" border-b-2 border-dotted border-gray-500">
      <li className="py-3 sm:py-4">
        <div className="flex items-center">
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {obj.author}
            </p>
            <p className="text-sm text-gray-500  dark:text-gray-400">
              {obj.body}
            </p>
          </div>
          {/* May be delete button i add here */}
        </div>

        {showDeleteBtn && (
          <button
            onClick={() => handleDeleteComment(obj.comment_id)}
            className="ml-4 my-4 px-4 py-2 bg-[rgba(235,27,36)] text-white font-bold rounded hover:bg-white hover:border-2 hover:border-solid hover:border-[rgba(235,27,36)] hover:text-[rgba(235,27,36)]"
          >
            Delete
          </button>
        )}
      </li>
    </ul>
  );
}

export default CommentsCard;
