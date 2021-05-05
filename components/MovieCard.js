export default function MovieCard({ movie }) {

  return (
    <li key={movie.Title} className="py-4">
      <div className="flex items-top space-x-4">
        <div className="flex-shrink-0">
          <img className="w-14" src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-lg font-medium text-gray-900 truncate">
            {movie.Title}
          </p>
          <p className="text-sm text-gray-500 truncate">{movie.Year}</p>
        </div>
        <div>
          <a
            href="#"
            className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
          >
            Nominate
          </a>
        </div>
      </div>
    </li>
  );
}
