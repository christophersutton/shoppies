import { Transition } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/solid'
import { FocusOn } from 'react-focus-on';
import { NominationsProps } from '../NominationsWrapper'
import NominationCard from './NominationCard'

export default function Details({ state, toggle, nominations }: NominationsProps) {

    return (
        <div className="absolute bottom-0 w-full">
            <Transition show={state.showDetails}>
                <Transition.Child
                    enter="delay-700 ease-in transform duration-200"
                    enterFrom="opacity-0"
                    leave="transform duration-100"
                    leaveTo="opacity-0"
                >
                    <div className="w-screen h-screen bg-black bg-opacity-50"></div>
                </Transition.Child>
                <Transition.Child
                    enter="delay-100 transform ease-out duration-700"
                    enterFrom="translate-y-off"
                    leave="delay-100 transform ease-in duration-300"
                    leaveTo="translate-y-off"
                >
                    <FocusOn onClickOutside={toggle} autoFocus={false}>
                        <div className="bg-green-600 text-white shadow-lg text-center">
                            <div className="min-h-full pt-4">

                                {nominations.length == 0 ? <p>You haven't saved any nominations yet.</p> : ''}
                                <ul className="flex overflow-x-auto inline-block px-4 pb-4 nomination-cards">
                                    {nominations.map(movie => <NominationCard movie={movie} key={movie.imdbID} />)}
                                    {/* empty li along with pseudo after content ensures proper margin for overflow scroll container */}
                                    <li></li>
                                </ul>

                                <button className="w-full flex justify-center items-end bg-gradient-to-b bg-green-800 from-green-600 hover:bg-green-900 h-12" onClick={() => toggle()}>
                                    <ChevronDownIcon className="h-6 w-6" />
                                </button>

                            </div>
                        </div >
                    </FocusOn>
                </Transition.Child>
            </Transition>
        </div>
    )
}

