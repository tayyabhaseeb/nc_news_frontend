import React from "react";

function Select({ sortBy, order, setSortBy, setOrder }) {
  return (
    <form className="max-w-sm  w-1/2 md:ml-auto md:mr-2 md:w-1/6">
      <select
        id="sort"
        className="bg-gray-50 border  border-gray-300 mb-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option selected>Sort Articles By...</option>
        <option value="created_at">Date Created</option>
        <option value="author">Author</option>
        <option value="title">Title</option>
        <option value="votes">Votes</option>
      </select>
      <select
        id="order"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
      >
        <option selected>Order By...</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </form>
  );
}

export default Select;
