import { Transition } from '@headlessui/react';
import NominationBadge from './Badge';
import ReviewButton from './ReviewButton'
import { NominationProps } from '../NominationsWrapper'


export default function Summary({ state, toggle, nominations }: NominationProps) {

    const activeStyles = nominations.length > 0 ? 'cursor-pointer hover:bg-green-600' : ''
    
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
                <a className={`bg-green-900 block text-white group ${activeStyles}`} onClick={(()=> toggle())}>
                    <div className="max-w-3xl mx-auto px-2 h-auto flex justify-between items-center">

                        <div className="flex flex-grow flex-col sm:flex-row sm:items-center sm:ml-6">

                            <p className="text-md md:text-xl mt-1 sm:my-5"> {state.text} </p>
                            <div className="flex">
                                {nominations.map(nomination => <NominationBadge key={nomination.imdbID} />)}
                            </div>
                            </div>
                            <ReviewButton show={state.showSubmit} toggle={toggle} />
                        

                    </div>
                </a>
            </Transition>
        </div>
    )
}