import { useNominations } from '../../../lib/use-nominations'
import { TrashIcon, ExternalLinkIcon } from '@heroicons/react/outline'

export default function NominationCard({ movie }) {
    const { removeNomination } = useNominations();

    return (

        <li className="bg-white rounded-lg shadow-lg divide-y divide-gray-200 text-green-900 align-left mr-4 flex flex-col justify-between">
            {/* Using inline block and a wrapper div around h4 to contain the h4 content in variable width of sibling image  */}
            <div className="inline-block">
                <img src={movie.Poster} alt={movie.Title} className="rounded-t-lg max-h-96 max-w-max"></img>
                <div className="flex place-content-center">
                    <h4 className="text-lg p-2 w-0 flex-grow flex justify-center items-center">{movie.Title}</h4>
                </div>
            </div>

            <div className="-mt-px flex divide-x divide-gray-200 ">
                <div className="w-0 flex-1 flex group">
                    <a
                        href={`https://www.imdb.com/title/${movie.imdbID}/`}
                        className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-2 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg group-hover:text-green-600"
                    >
                        <ExternalLinkIcon className="w-5 h-5 text-gray-400 group-hover:text-green-600" aria-hidden="true" />
                        <span className="ml-3">IMDB</span>
                    </a>
                </div>
                <div className="-ml-px w-0 flex-1 flex group">
                    <button
                        onClick={() => removeNomination(movie)}
                        className="relative w-0 flex-1 group-hover:text-green-600 inline-flex items-center justify-center py-2 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg group-hover:text-green-600"
                    >
                        <TrashIcon className="w-5 h-5 text-gray-400 group-hover:text-green-600" aria-hidden="true" />
                        <span className="ml-3">Remove</span>
                    </button>
                </div>
            </div>
        </li>

    )
}