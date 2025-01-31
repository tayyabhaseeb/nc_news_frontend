import React, { useState } from "react";
import { addNewArticle } from "../api/api";
import { Link, useNavigate } from "react-router";

function CreateArticlePage({ setArticles }) {
  const [author, setAuthor] = useState("");

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setArticles((prev) => [
      ...prev,
      {
        title,
        topic,
        author,
        body: description,
        votes: 0,
        article_img_url: image,
      },
    ]);

    addNewArticle(author, title, description, topic, image);
    setAuthor("");
    setTitle("");
    setImage("");
    setTopic("");
    setDescription("");
  };
  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className=" px-4  py-2 inline-block  mx-4 mt-6 border-2 border-white  rounded text-lg font-semibold bg-[rgba(235,27,36,1)] text-white hover:text-[rgba(235,27,36,1)] hover:shadow-sm hover:bg-gray-200 active:shadow-none active:translate-y-1"
      >
        ← Back
      </button>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white ">
        <form
          onSubmit={handleSubmit}
          className="p-10 bg-white shadow-lg rounded-lg   w-96 h-auto flex flex-col gap-6"
          style={{ background: "rgba(235,27,36,1)", color: "white" }}
        >
          <div className="text-xl font-bold mb-2">
            Create New Article
            <br />
          </div>
          <input
            className="w-full p-3 border-2 text-black border-white shadow-md rounded-md focus:border-blue-500 focus:outline-none"
            name="author"
            placeholder="Author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            className="w-full p-3 border-2 text-black border-white shadow-md rounded-md focus:border-blue-500 focus:outline-none"
            name="title"
            placeholder="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="w-full p-3 border-2 text-black border-white shadow-md rounded-md focus:border-blue-500 focus:outline-none"
            name="image"
            placeholder="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <select
            className="px-4 py-2 rounded-md border-2 border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="coding">Coding</option>
            <option value="cooking">Cooking</option>
            <option value="football">Football</option>
          </select>
          <textarea
            className="w-full p-3 border-2 text-black border-white shadow-md rounded-md focus:border-blue-500 focus:outline-none"
            name="body"
            placeholder="Description..."
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button className="w-40 h-12 mx-auto text-center mt-6 border-2 border-white shadow-md rounded-md text-lg font-semibold hover:text-[rgba(235,27,36,1)] hover:shadow-sm hover:bg-white active:shadow-none active:translate-y-1">
            Let's add +
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateArticlePage;
