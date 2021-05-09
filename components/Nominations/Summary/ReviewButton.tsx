import { Transition } from "@headlessui/react";

export default function NominationBadge({ show, toggle }) {
    return (
        <>
            <Transition
                show={show}
                enter="transform ease-out duration-1000 transition"
                enterFrom="translate-x-96 opacity-0"
                enterTo="opacity-100"
            >
                <button type="button"
                    onClick={() => toggle()}
                    className="inline-flex items-center mr-4 px-3 md:mx-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-green-600 bg-white group-hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Review Picks
                </button>
            </Transition>
        </>
    )
}
