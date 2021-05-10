import { Transition } from '@headlessui/react';
import NominationBadge from './Badge';
import ReviewButton from './ReviewButton'
import { NominationsProps } from '../NominationsWrapper'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Summary({ state, toggle, nominations }: NominationsProps) {

    return (
        <div className="absolute bottom-0 w-full">
            <Transition
                appear={true}
                unmount={false}
                show={!state.showDetails}
                enter="delay-300 transform ease-out duration-500"
                enterFrom="translate-y-off"
                leave="transform ease-in duration-200"
                leaveTo="translate-y-off"
            >

                <div className={`text-white group ${state.summaryClasses}`} onClick={(() => toggle())}>
                    <div className="w-full flex justify-center items-end">
                        {nominations.length > 0 ? <ChevronUpIcon className="h-8 w-8" /> : '' }
                    </div>
                    <div className="max-w-3xl mx-auto px-2 h-auto pb-4 -m-t-4 flex justify-between items-center">

                        <div className="flex flex-grow flex-col sm:flex-row sm:items-center">

                            <p className="text-md sm:text-xl sm:my-4"> {state.text} </p>
                            <div className="flex">
                                {nominations.map(nomination => <NominationBadge key={nomination.imdbID} />)}
                            </div>
                        </div>
                        <ReviewButton show={state.showReview} toggle={toggle} />


                    </div>
                </div>
            </Transition>
        </div>
    )
}