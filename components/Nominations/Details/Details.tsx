import { Transition } from "@headlessui/react";
import { NominationProps } from '../NominationsWrapper'
import DetailLineItem from './DetailsLineItem'
import { useNominations } from '../../../lib/use-nominations'
import { XIcon } from '@heroicons/react/solid'

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
                <div className="bg-green-600 text-white shadow-lg">
                    <div className="min-h-full px-4">
                        <button className="inline" onClick={() => toggle()}><XIcon className="w-5 h-5 my-2 text-white group-hover:text-black-600" aria-hidden="true" /></button>
                        <h3 className="text-center font-bold text-2xl p-4 inline">Your Nominations</h3>
                        <ul className="flex overflow-x-auto">
                            {nominations.map(movie => <DetailLineItem movie={movie} />)}
                        </ul>

                        <button onClick={() => clearNominations()}>Clear All Nominations</button>
                    </div>
                </div >

            </Transition>
        </div>
    )
}

