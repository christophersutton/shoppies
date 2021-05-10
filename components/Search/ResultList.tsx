import { useState, useEffect } from 'react';
import ResultListItem from "./ResultListItem";
import { searchParams } from '../../lib/use-search'

type ResultListProps = {
  data: any;
  setSearchParams: (searchParams: searchParams) => void;
  currentSearchParams: searchParams;
}

function getPagination(
  totalResults: number,
  currentPage: number
) {
  const startResult = currentPage * 10 - 9;
  const endResult = startResult + 9 > totalResults ? totalResults : startResult + 9;
  const showPrev = currentPage === 1 ? false : true;
  const showNext = endResult === totalResults ? false : true;
  return { startResult, endResult, showNext, showPrev };
}

export default function ResultList({
  data,
  setSearchParams,
  currentSearchParams,
}: ResultListProps) {

  const { startResult, endResult, showNext, showPrev } = getPagination(
    parseInt(data.totalResults),
    currentSearchParams.page
  );

  const handlePageClick = (e, page) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSearchParams({ ...currentSearchParams, page: page });
  };

  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (data.Search) {
      setMovies(data.Search.map((movie) => {
        movie.Poster = movie.Poster === "N/A" ? 'https://s3.amazonaws.com/www.databoxdigital.com/images/poster-not-available.png' : movie.Poster
        return movie
      }))
    }
  },[data])

  return (
    <div className="flow-root mt-6">
      <ul className="divide-y divide-gray-200">
        {movies.map((movie) => (
             < ResultListItem { ...movie } key = { movie.imdbID } />
        ))}
      </ul>
      <nav
        className="bg-white py-6 flex items-center justify-center border-t border-gray-200"
        aria-label="Pagination"
      >
        {showPrev ? (
          <button
            onClick={(e) => handlePageClick(e, currentSearchParams.page - 1)}
            className="relative inline-flex items-center px-4 py-2 border hover:border-green-900 text-sm font-medium rounded-md text-green-900 bg-white hover:bg-gray-50"
          >
            Previous
          </button>
        ) : (
          ""
        )}

        <p className="text-sm text-gray-700 px-4">
          Showing
          <span className="font-medium"> {startResult}</span> to
          <span className="font-medium"> {endResult}</span> of
          <span className="font-medium"> {data.totalResults}</span> results for
          <span className="font-medium"> {currentSearchParams.term}</span>
        </p>

        {showNext ? (
          <button
            onClick={(e) => handlePageClick(e, currentSearchParams.page + 1)}
            className="relative inline-flex items-center px-4 py-2 border text-sm hover:border-green-900 font-medium rounded-md text-green-900 bg-white hover:bg-gray-50"
          >
            Next
          </button>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
}
