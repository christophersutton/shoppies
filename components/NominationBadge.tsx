import { BadgeCheckIcon } from '@heroicons/react/solid'
import { Transition } from "@headlessui/react";


export default function NominationBadge(nomination) {
    return (
        <>
            <Transition
                appear={true}
                show={true}
                enter="transform ease-out duration-500 transition"
                enterFrom="translate-x-96 opacity-20"
                enterTo="opacity-100"
            >
                <BadgeCheckIcon className="text-white h-8 ml-6" />
            </Transition>
        </>
    )
}
