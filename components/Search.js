import { useState, useEffect } from "react";
import useSearch from '../lib/use-search'

export default function Search({handleSearch, currentSearch}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch({...currentSearch, term: searchTerm, shouldFetch: true})
  };

  const handleChange = (e) => {
    handleSearch({...currentSearch, shouldFetch: false})
    setSearchTerm(e.target.value)
  };

  return (
    <div>
      <form
        className="mt-4"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="text"
            name="searchTerm"
            id="searchTerm"
            className="shadow-sm py-3 border-2 text-center focus:border-indigo-700 min-w-full block sm:text-sm border-indigo-500 rounded-t-md"
            placeholder="Search for your favorite movie"
            onChange={handleChange}
          />
        </div>
        <div className="rounded-b-md mt-0 sm:flex-shrink-0">
          <button
            type="submit"
            className="w-full bg-indigo-500 border border-transparent rounded-b-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
