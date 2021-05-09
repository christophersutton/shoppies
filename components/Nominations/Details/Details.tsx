import { Transition } from "@headlessui/react";
import { NominationProps } from '../NominationsWrapper'
import NominationCard from './NominationCard'
import { useNominations } from '../../../lib/use-nominations'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { FocusOn } from 'react-focus-on';

export default function Details({ state, toggle, nominations }: NominationProps) {

    const { clearNominations } = useNominations();
    return (
        <div className="absolute bottom-0 w-full">
            <Transition
                show={state.showDetails}
                enter="delay-100 transform ease-out duration-700"
                enterFrom="translate-y-off"
                leave="transform ease-in duration-300"
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
                                <ChevronDownIcon className="h-8 w-8" />
                            </button>

                        </div>
                    </div >
                </FocusOn>
            </Transition>
        </div>
    )
}

