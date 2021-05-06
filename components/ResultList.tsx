import MovieCard from "./MovieCard";
import usePagination from '../lib/use-pagination'
import { searchParams } from '../lib/use-search'


type ResultListProps = {
  data: any;
  setSearchParams: (searchParams: searchParams) => void;
  currentSearchParams: searchParams;
}

export default function ResultList({
  data,
  setSearchParams,
  currentSearchParams,
}: ResultListProps) {

  const { startResult, endResult, showNext, showPrev } = usePagination(
    parseInt(data.totalResults),
    currentSearchParams.page
  );

  const handlePageClick = (e, page) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSearchParams({ ...currentSearchParams, page: page });
  };

  return (
    <>
      <div className="flow-root mt-6">
        <ul className="-my-5 divide-y divide-gray-200">
          {data.Search.map((movie) => (
            <MovieCard {...movie} key={movie.imdbID} />
          ))}
        </ul>
        <nav
          className="bg-white py-6 flex items-center justify-center border-t border-gray-200"
          aria-label="Pagination"
        >
          {showPrev ? (
            <a
              onClick={(e) =>
                handlePageClick(e, currentSearchParams.page - 1)
              }
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Previous
            </a>
          ) : (
            ""
          )}

          <p className="text-sm text-gray-700 px-4">
            Showing <span className="font-medium">{startResult}</span> to
              <span className="font-medium"> {endResult}</span> of
              <span className="font-medium"> {data.totalResults}</span> results for 
              <span className="font-medium"> {currentSearchParams.term}</span>
          </p>

          {showNext ? (
            <a
              onClick={(e) =>
                handlePageClick(e, currentSearchParams.page + 1)
              }
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Next
            </a>
          ) : (
            ""
          )}

        </nav>
      </div>
    </>
  );
}
