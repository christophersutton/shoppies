import { useState } from "react";
import useSearch from "../../lib/use-search";
import ResultsContainer from "../Search/ResultsContainer";

export interface SearchParamsState {
  term: string;
  shouldFetch: boolean;
  page: number;
}

export default function Search() {

  const [searchParams, setSearchParams] = useState<SearchParamsState>({
    term: "",
    shouldFetch: false,
    page: 1,
  });
  const { data, error } = useSearch(searchParams);

  const handleSubmit = (e) => {
    e.preventDefault();
    // hide mobile keyboards by blurring form on submit
    document.getElementById('searchTerm').blur()
    setSearchParams({ ...searchParams, shouldFetch: true, page: 1, });
  };

  // after initial search that sets shouldFetch to true,
  // subsequent edits to the search term will automatically be fetched.
  // May want to consider adding a timeout to reduce api calls
  const handleChange = (e) => {
    setSearchParams({ ...searchParams, term: e.target.value, page: 1, })
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
          placeholder='&#128269; Find your first nominee'
          onFocus={(e) => e.target.placeholder = ''}
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
      <ResultsContainer
        data={data}
        error={error}
        shouldFetch={searchParams.shouldFetch}
        setSearchParams={setSearchParams}
        currentSearchParams={searchParams}
      />
    </div>
  );
}
