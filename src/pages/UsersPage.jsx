import React, { useEffect, useState } from "react";
import { getAllUsers } from "../api/api";
import Spinner from "../components/otherComponents/Spinner";
import UsersCard from "../components/usersComponents/usersCard";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  console.log(users);

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
    <div className=" my-6 p-4 flex flex-col  items-center md:flex md:flex-row md:flex-wrap md:justify-center md:gap-4">
      {loading ? (
        <Spinner />
      ) : (
        <>
          {users.map((obj) => {
            return <UsersCard key={obj.username} obj={obj} />;
          })}
        </>
      )}
    </div>
  );
}

export default UsersPage;
