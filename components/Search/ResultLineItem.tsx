import { useNominations } from "../../lib/use-nominations";
import { Movie } from '../../lib/types'
import { BadgeCheckIcon } from '@heroicons/react/solid'
import { BadgeCheckIcon as BadgeCheckIconOutline } from '@heroicons/react/outline'


export default function ResultLineItem(movie: Movie) {
  const { addNomination, removeNomination, nominations } = useNominations();
  const { imdbID, Poster, Title, Year } = movie

  let isNominated = nominations.some((e) => e.imdbID === imdbID);
  const disabled = !isNominated && nominations.length > 4 ? true : false

  const handleClick = () => {
    isNominated ? removeNomination(movie) : addNomination(movie)
  }

  return (
    <li key={imdbID} className="py-4 last:pb-6">
      <div className="flex items-top space-x-4">
        <div className="flex-shrink-0">
          <img className="w-14" src={Poster} alt={Title} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-lg font-medium text-gray-900 leading-tight">
            {Title}
          </p>
          <p className="text-sm text-gray-500">{Year}</p>
        </div>
        <div className="flex">
          <button
            disabled={disabled}
            onClick={handleClick}
            className="w-12 md:w-16 mx-4 bg-white text-green-900 hover:text-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isNominated ? <BadgeCheckIcon /> : <BadgeCheckIconOutline />}
          </button>
        </div>
      </div>
    </li >
  );
}
