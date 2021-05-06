import { useEffect } from 'react';
import { useNominations } from "../lib/use-nominations";
import { Movie } from '../lib/types'
import { BadgeCheckIcon } from '@heroicons/react/solid'
import { BadgeCheckIcon as BadgeCheckIconOutline } from '@heroicons/react/outline'


export default function MovieCard(movie: Movie) {
  const { addNomination, removeNomination, nominations } = useNominations();
  const { imdbID, Poster, Title, Year } = movie
  let isNominated = nominations.some((e) => e.imdbID === imdbID);
  
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
            className="inline-flex items-center  px-2.5 py-0.5 bg-white"
          >
            {isNominated ? <BadgeCheckIcon className="h-16 w-16 text-green-900 hover:text-green-600" />
              : <BadgeCheckIconOutline className="h-16 w-16 text-green-900 hover:text-green-600" />}
          </button>
        </div>
      </div>
    </li>
  );
}
