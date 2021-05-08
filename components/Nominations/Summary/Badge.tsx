import { BadgeCheckIcon } from '@heroicons/react/solid'
import { Transition } from "@headlessui/react";

export default function NominationBadge() {
    return (
        <>
            <Transition
                appear={true}
                show={true}
                enter="transform ease-out duration-500"
                enterFrom="translate-x-96 opacity-20"
                enterTo="opacity-100"
            >
                <BadgeCheckIcon className="text-white h-8 mr-2 sm:ml-4 md:ml-8" />
            </Transition>
        </>
    )
}
