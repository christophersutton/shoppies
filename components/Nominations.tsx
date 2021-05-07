import { useNominations } from '../lib/use-nominations'
import NominationBadge from './NominationBadge';
import { Transition } from "@headlessui/react";

const getText = (nominations) => {
    switch (nominations.length) {
        case 0: {
            return 'No nominations saved. What will be your first?'
        }
        case 1: {
            return 'First nomination saved!'
        }
        default: {
            return `${nominations.length} nominations saved!`
        }
    }
}

const showSubmit = (nominations) => nominations.length === 5

export default function Nominations() {

    const { nominations } = useNominations();

    return (
        <footer className="bg-green-900 text-white fixed bottom-0 w-full ">
            <div className="max-w-3xl mx-auto px-2 min-h-full transition-all duration-100 flex justify-between items-center">
                <div className="flex flex-grow flex-col sm:flex-row md:items-center md:ml-6">
                    <p className="text-md md:text-xl md:my-5"> {getText(nominations)} </p>
                    <div className="flex">
                        {nominations.map(nomination => <NominationBadge nomination={nomination} />)}
                    </div>
                </div>
                <Transition
                    show={showSubmit(nominations)}
                    enter="transform ease-out duration-1000 transition"
                    enterFrom="translate-x-96 opacity-0"
                    enterTo="opacity-100"
                    leave="transform duration-300 transition"
                    leaveTo="opacity-0"
                >

                    <button
                        type="button"
                        className="inline-flex items-center mr-4 px-3 md:mx-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-green-900 bg-white hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Submit Now!
      </button>
                </Transition>
            </div>
        </footer>)
}