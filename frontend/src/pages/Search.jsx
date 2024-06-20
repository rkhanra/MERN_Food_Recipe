import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";

const Search = () => {
  const searchText = useParams();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get("query");
    if (queryParam) {
      setQuery(queryParam);
    }
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      if (!query) return; // Skip fetch if query is empty
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:5000/api/items`, {
          params: { q: query },
        });
        setResults(response.data);
      } catch (error) {
        setError(error.message || "Error Fetching Data");
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [query]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed">
        Search
      </h1>
      <div className="bg-white md:max-w-3xl mx-auto p-4 rounded relative flex items-center">
        <IoSearch className="w-5 h-5 mr-2 text-neutral-300" />
        <input
          className="w-full outline-none placeholder:text-[#1b2629]"
          name="query"
          type="search"
          placeholder="Search for a recipe"
          id="search"
          value={query}
          onChange={handleSearch}
          required
        />
      </div>
  
      <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4 gap-4">
        {results &&
          results.map((item) => <Card item={item} key={item.id}></Card>)}
      </ul>
    </div>
  );
};

export default Search;
