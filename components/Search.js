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
        className="mt-4 sm:flex sm:max-w-md lg:mt-0"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="text"
            name="searchTerm"
            id="searchTerm"
            className="shadow-sm py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Search for your favorite movie"
            onChange={handleChange}
          />
        </div>
        <div className="rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            className="w-full bg-indigo-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
