import { BadgeCheckIcon } from '@heroicons/react/solid'
import { Transition } from "@headlessui/react";

export default function NominationBadge({ toggle }) {
    return (
        <>
            <Transition
                appear={true}
                show={true}
                enter="transform ease-out duration-500"
                enterFrom="translate-x-96 opacity-20"
                enterTo="opacity-100"
            >
                <button onClick={() => toggle()}><BadgeCheckIcon className="text-white h-8 mr-2 md:ml-8 hover:text-green-200" /></button>
            </Transition>
        </>
    )
}
