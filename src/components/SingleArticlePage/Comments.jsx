import React from "react";
import CommentsCard from "./CommentsCard";

function Comments({ comments }) {
  console.log(comments);
  return (
    <>
      <div class=" p-4 my-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 border-solid mx-4 md:w-1/2 md:mx-auto ">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Latest Comments
          </h5>
        </div>
        <div class="flow-root">
          {comments.map((obj) => {
            return <CommentsCard obj={obj} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Comments;
