import { Transition } from "@headlessui/react";
import { NominationProps } from '../NominationsWrapper'
import DetailLineItem from './DetailsLineItem'
import { useNominations } from '../../../lib/use-nominations'
import { ChevronDownIcon } from '@heroicons/react/solid'

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
                    <div className="min-h-full pt-4">


                        <ul className="flex overflow-x-auto px-4">
                            {nominations.map(movie => <DetailLineItem movie={movie} />)}
                        </ul>
                        <button className="w-full mt-4 bg-gradient-to-b bg-green-900 from-green-600 hover:bg-green-800 h-12" onClick={() => toggle()}>
                            <ChevronDownIcon className="text-gray-300 ml-4 h-8 w-8 float-left" />
                            <ChevronDownIcon className="h-8 w-8 float-right" />
                        </button>

                    </div>
                </div >

            </Transition>
        </div>
    )
}

