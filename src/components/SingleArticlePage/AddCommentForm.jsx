import React, { useState } from "react";
import { addNewComment } from "../../api/api";

function AddCommentForm({ setComments, id, setNewCommentId }) {
  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const optimisticComment = { author: userName, body: userMessage };
    setComments((prev) => [optimisticComment, ...prev]);
    setUserName("");
    setUserMessage("");
    addNewComment(id, userName, userMessage)
      .then((data) => {
        setNewCommentId(data.comment_id);
        setComments((prev) =>
          prev.map((comment) =>
            comment === optimisticComment ? { ...data } : comment
          )
        );
      })
      .catch((err) => {
        setComments((prevArr) =>
          prevArr.filter((obj) => obj !== optimisticComment)
        );
      });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg mx-4 p-4 flex flex-col gap-2 my-2 md:w-1/2 md:mx-auto">
      <h3>Share your thoughts</h3>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[rgba(235,17,36)] peer"
            placeholder=" "
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[rgba(235,17,36)] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Name
          </label>
        </div>
        <div className="relative">
          <textarea
            type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[rgba(235,17,36)] peer"
            placeholder=" "
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[rgba(235,17,36)] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Your comment
          </label>
        </div>
        <button className="bg-[rgba(235,17,36)] w-1/3 p-3 mx-auto text-white font-bold hover:bg-white hover:text-[rgba(235,17,36)] hover:border-[rgba(235,17,36)] hover:border-solid hover:border-2">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddCommentForm;
