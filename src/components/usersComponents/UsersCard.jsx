import React from "react";

function UsersCard({ obj }) {
  return (
    <div className="w-64 h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
      <a href="#">
        <img
          className="w-full h-40 object-contain rounded-t-lg border-solid border-b-2 border-red-500"
          src={obj.avatar_url}
          alt=""
        />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[rgba(235,27,36)] dark:text-white">
          {obj.username}
        </h5>
      </div>
    </div>
  );
}

export default UsersCard;
