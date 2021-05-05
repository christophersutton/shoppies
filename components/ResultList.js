import MovieCard from "./MovieCard";

export default function ResultList({ data, error, isFetching }) {
  if (error) return <div>failed to load</div>;
  if (!isFetching && !data) return <div>Search for something dingdong...</div>;
  if (isFetching && !data) return <div>Searching...</div>;
  if (data.Response == "False") return <div>No Results Found</div>;
  return (
    <>
      <div className="flow-root mt-6">
        <ul className="-my-5 divide-y divide-gray-200">
          {data.Search.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </ul>
      </div>
    </>
  );
}
