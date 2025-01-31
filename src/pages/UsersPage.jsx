import React, { useEffect, useState } from "react";
import { getAllUsers } from "../api/api";

import UsersCard from "../components/usersComponents/UsersCard";
import Shimmer from "../components/Shimmer/Shimmer";
import { useNavigate } from "react-router";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getAllUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, []);

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className=" px-4  py-2 inline-block  mx-4 mt-6 border-2 border-white  rounded text-lg font-semibold bg-[rgba(235,27,36,1)] text-white hover:text-[rgba(235,27,36,1)] hover:shadow-sm hover:bg-gray-200 active:shadow-none active:translate-y-1"
      >
        ← Back
      </button>
      <div className=" my-6 p-4 flex flex-col  items-center md:flex md:flex-row md:flex-wrap md:justify-center md:gap-4">
        {loading ? (
          <Shimmer />
        ) : (
          <>
            {users.map((obj) => {
              return <UsersCard key={obj.username} obj={obj} />;
            })}
          </>
        )}
      </div>
    </>
  );
}

export default UsersPage;
