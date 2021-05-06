import { useState, useEffect } from "react";
import { searchParams } from '../lib/use-search'

type SearchProps = {
  setSearchParams: (searchParams: searchParams) => void,
  currentSearchParams: searchParams,
};

export default function Search({
  setSearchParams,
  currentSearchParams,
}: SearchProps) {
  const [searchTerm, setSearchTerm] = useState(currentSearchParams.term);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ term: searchTerm, shouldFetch: true, page: 1,});
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setSearchParams({ term: searchTerm, shouldFetch: false, page: 1 });
  };

  return (
    <div>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="searchTerm"
            id="searchTerm"
            autoComplete="false"
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
