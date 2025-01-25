import React from "react";

function Select() {
  return (
    <form className="max-w-sm  w-1/2 md:ml-auto md:mr-2 md:w-1/6">
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Sort Articles By...</option>
        <option value="US">Date Created</option>
        <option value="CA">Author</option>
        <option value="DE">Title</option>
        <option value="FR">Votes</option>
      </select>
    </form>
  );
}

export default Select;
