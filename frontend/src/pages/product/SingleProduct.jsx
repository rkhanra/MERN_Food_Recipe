import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const SingleProduct = () => {
  const item = useLoaderData();
  const [likes, setLikes] = useState(item.likes || []);
  const [dislikes, setDislikes] = useState(item.dislikes || []);
  const [comments, setComments] = useState(item.comments || []);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [comment, setComment] = useState({ user: "", comment: "" });
  const [error, setError] = useState("");
  const userId = "some-unique-user-id"; // Replace with actual user id

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => {
    setError("");
    setIsDialogOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  const handleVote = async (type) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/items/${item._id}/${type}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedItem = await response.json();
      setLikes(updatedItem.likes);
      setDislikes(updatedItem.dislikes);
    } catch (error) {
      console.error(`Failed to ${type}:`, error);
    }
  };

  const handleSubmit = async () => {
    if (!comment.user || !comment.comment) {
      setError("Both user and comment fields are required.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/items/${item._id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(comment),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedItem = await response.json();
      setComments(updatedItem.comments);
      closeDialog();
    } catch (error) {
      console.error("Failed to submit comment:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
      <img
        src={item.thumbnail_image}
        alt={item.name}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <div className="mb-4 flex items-center">
        <button
          onClick={() => handleVote("like")}
          className={`px-4 py-2 rounded ml-4 ${
            likes.includes(userId) ? "bg-blue-700" : "bg-blue-500"
          } text-white`}
        >
          Like ({likes.length})
        </button>
        <button
          onClick={() => handleVote("dislike")}
          className={`px-4 py-2 rounded ml-2 ${
            dislikes.includes(userId) ? "bg-red-700" : "bg-red-500"
          } text-white`}
        >
          Dislike ({dislikes.length})
        </button>
        <button
          onClick={openDialog}
          className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
        >
          Comments ({comments.length})
        </button>
      </div>
      <div className="mb-4">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
          {item.category}
        </span>
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Ingredients</h2>
        <ul className="list-disc list-inside">
          {item.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.quantity} {ingredient.name}
              {ingredient.optional ? " (optional)" : ""}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Instructions</h2>
        <p>{item.instructions}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold">More Information</h2>
        <p>
          <strong>Prep Time:</strong> {item.more.prep_time}
        </p>
        <p>
          <strong>Cook Time:</strong> {item.more.cook_time}
        </p>
        <p>
          <strong>Servings:</strong> {item.more.servings}
        </p>
        <p>
          <strong>Difficulty:</strong> {item.more.difficulty}
        </p>
        <p>
          <strong>Source:</strong> {item.more.source}
        </p>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full relative">
            <button
              onClick={closeDialog}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <div className="mb-4 max-h-64 overflow-y-auto">
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="mb-2 p-4 border rounded shadow-sm bg-gray-100"
                >
                  <p className="font-semibold text-lg">{comment.user}</p>
                  <p className="text-gray-700">{comment.comment}</p>
                </div>
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-2">Add a Comment</h3>
            <input
              type="text"
              name="user"
              placeholder="Your Name"
              value={comment.user}
              onChange={handleInputChange}
              className="mb-4 p-2 border rounded w-full"
            />
            <textarea
              name="comment"
              placeholder="Your Comment"
              value={comment.comment}
              onChange={handleInputChange}
              className="mb-4 p-2 border rounded w-full"
            />
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
