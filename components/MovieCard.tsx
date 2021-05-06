import { useEffect } from 'react';
import { useNominations } from "../lib/use-nominations";
import { Movie } from '../lib/types'
import { BadgeCheckIcon } from '@heroicons/react/solid'
import { BadgeCheckIcon as BadgeCheckIconOutline } from '@heroicons/react/outline'


export default function MovieCard( movie: Movie) {
  const { addNomination, removeNomination, nominations } = useNominations();
  const { imdbID, Poster, Title, Year } = movie
  let isNominated = nominations.some((e) => e.imdbID === imdbID);
  useEffect(() => {
    isNominated = nominations.some((e) => e.imdbID === imdbID);
  }, [nominations,]);

  const handleClick = () => {
    isNominated ? removeNomination(movie) : addNomination(movie)
  }

  return (
    <li key={imdbID} className="py-4">
      <div className="flex items-top space-x-4">
        <div className="flex-shrink-0">
          <img className="w-14" src={Poster} alt={Title} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-lg font-medium text-gray-900 truncate">
            {Title}
          </p>
          <p className="text-sm text-gray-500 truncate">{Year}</p>
        </div>
        <div>
          <button

            onClick={handleClick}
            className="inline-flex items-center w-14 h-14 shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            {isNominated ? <BadgeCheckIcon /> : <BadgeCheckIconOutline />}
          </button>
        </div>
      </div>
    </li>
  );
}
