import React from "react";

function CommentsCard({ obj }) {
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
      </li>
    </ul>
  );
}

export default CommentsCard;
