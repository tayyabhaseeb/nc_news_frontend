import React from "react";

function SideNav({ setShow }) {
  return (
    <div
      id="drawer-navigation"
      className="fixed top-0 left-0 z-40 h-screen md:w-1/3 p-4 overflow-y-auto transition-transform translate-x-0 bg-white w-64 dark:bg-gray-800"
      tabIndex="-1"
      aria-labelledby="drawer-navigation-label"
    >
      <h5
        id="drawer-navigation-label"
        className="text-base font-semibold text-[rgba(235,27,36)] uppercase dark:text-gray-400 md:text-2xl md:font-bold"
      >
        Menu
      </h5>
      {/* Close Button */}
      <button
        type="button"
        onClick={() => setShow(false)}
        className="text-white bg-[rgba(235,27,36)] hover:bg-white hover:text-[rgba(235,27,36)] rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 dark:hover:bg-gray-600"
      >
        <svg
          className="w-[30px] h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>

      {/* Navigation Items */}
      <div className="py-4">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-[rgba(235,27,36)] rounded-lg hover:bg-[rgba(235,27,36)] hover:text-white dark:text-white dark:hover:bg-gray-700 md:text-xl"
            >
              <span className="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-[rgba(235,27,36)] rounded-lg hover:bg-[rgba(235,27,36)] hover:text-white dark:text-white dark:hover:bg-gray-700 md:text-xl"
            >
              <span className="ml-3">E-commerce</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-[rgba(235,27,36)] rounded-lg hover:bg-[rgba(235,27,36)] hover:text-white dark:text-white dark:hover:bg-gray-700 md:text-xl"
            >
              <span className="ml-3">Inbox</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
