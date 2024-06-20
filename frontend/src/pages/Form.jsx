import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    menuId: 1,
    name: "",
    thumbnail_image: "",
    category: "Entrees",
    instructions: "",
    tags: "",
    ingredients: [{ name: "", quantity: "", optional: false }],
    more: {
      prep_time: "",
      cook_time: "",
      servings: "",
      difficulty: "",
      source: "",
    },
  });

  const categories = [
    { name: "Entrees", id: 1 },
    { name: "Breakfast", id: 2 },
    { name: "Lunch", id: 3 },
    { name: "Desserts", id: 4 },
    { name: "Sides", id: 5 },
    { name: "Drinks", id: 6 },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleIngredientChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const newIngredients = formData.ingredients.map((ingredient, i) => {
      if (i === index) {
        return { ...ingredient, [name]: type === "checkbox" ? checked : value };
      }
      return ingredient;
    });
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const handleAddIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [
        ...formData.ingredients,
        { name: "", quantity: "", optional: false },
      ],
    });
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = categories.find(
      (category) => category.name === e.target.value
    );
    setFormData({
      ...formData,
      category: selectedCategory.name,
      menuId: selectedCategory.id,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    };

    console.log("Submitting payload:", payload); // Log the payload being sent

    try {
      const response = await axios.post(
        "http://localhost:5000/api/item",
        payload
      );
      console.log("Server response:", response); // Log the server response
      alert("Item added successfully!");
    } catch (err) {
      console.error("Error submitting form:", err.response); // Log the error response
      alert(`Error adding item: ${err.response.data.message}`);
    }
  };
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="thumbnail_image"
        >
          Thumbnail Image URL
        </label>
        <input
          type="text"
          id="thumbnail_image"
          name="thumbnail_image"
          value={formData.thumbnail_image}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="category"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleCategoryChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="instructions"
        >
          Instructions
        </label>
        <textarea
          id="instructions"
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="tags"
        >
          Tags (comma separated)
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {/* Ingredients */}
      {formData.ingredients.map((ingredient, index) => (
        <div key={index} className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={`ingredient-name-${index}`}
          >
            Ingredient Name
          </label>
          <input
            type="text"
            id={`ingredient-name-${index}`}
            name="name"
            value={ingredient.name}
            onChange={(e) => handleIngredientChange(index, e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={`ingredient-quantity-${index}`}
          >
            Quantity
          </label>
          <input
            type="text"
            id={`ingredient-quantity-${index}`}
            name="quantity"
            value={ingredient.quantity}
            onChange={(e) => handleIngredientChange(index, e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              id={`ingredient-optional-${index}`}
              name="optional"
              checked={ingredient.optional}
              onChange={(e) => handleIngredientChange(index, e)}
              className="mr-2 leading-tight"
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor={`ingredient-optional-${index}`}
            >
              Optional
            </label>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddIngredient}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Ingredient
      </button>

      {/* More */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="prep_time"
        >
          Preparation Time
        </label>
        <input
          type="text"
          id="prep_time"
          name="prep_time"
          value={formData.more.prep_time}
          onChange={(e) =>
            setFormData({
              ...formData,
              more: { ...formData.more, prep_time: e.target.value },
            })
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="cook_time"
        >
          Cook Time
        </label>
        <input
          type="text"
          id="cook_time"
          name="cook_time"
          value={formData.more.cook_time}
          onChange={(e) =>
            setFormData({
              ...formData,
              more: { ...formData.more, cook_time: e.target.value },
            })
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="servings"
        >
          Servings
        </label>
        <input
          type="text"
          id="servings"
          name="servings"
          value={formData.more.servings}
          onChange={(e) =>
            setFormData({
              ...formData,
              more: { ...formData.more, servings: e.target.value },
            })
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="difficulty"
        >
          Difficulty
        </label>
        <input
          type="text"
          id="difficulty"
          name="difficulty"
          value={formData.more.difficulty}
          onChange={(e) =>
            setFormData({
              ...formData,
              more: { ...formData.more, difficulty: e.target.value },
            })
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="source"
        >
          Source
        </label>
        <input
          type="text"
          id="source"
          name="source"
          value={formData.more.source}
          onChange={(e) =>
            setFormData({
              ...formData,
              more: { ...formData.more, source: e.target.value },
            })
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="flex items-center justify-between mt-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
