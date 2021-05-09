import { useState } from "react";
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
    // hide mobile keyboards by blurring form on submit
    document.getElementById('searchTerm').blur()
    setSearchParams({ term: searchTerm, shouldFetch: true, page: 1, });
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setSearchParams({ term: searchTerm, shouldFetch: true, page: 1 });
  };

  return (
    <div>
      <form className="group" onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          autoComplete="false"
          className=" py-3 border-2 text-center min-w-full sm:text-sm rounded-t-md 
                      border-green-900 group-hover:border-green-700 focus:ring-inset focus:ring-2 focus:ring-green-700 focus:border-green-700 "
          placeholder="Search for your favorite movie"
          onChange={handleChange}
        />

        <div className="rounded-b-md mt-0 sm:flex-shrink-0">
          <button
            type="submit"
            className="w-full border border-transparent rounded-b-md py-2 px-4 text-white 
            bg-green-900 group-hover:bg-green-700 group-focus:bg-green-700 focus:ring-2 ring-inset focus:ring-green-700 focus:border-green-700"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
