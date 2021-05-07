import { useNominations } from '../lib/use-nominations'
import NominationBadge from './NominationBadge';

export default function Nominations() {

    const { nominations } = useNominations();

    const getText = (nominations) => {
        switch (nominations.length) {
            case 0: {
                return 'No nominations saved. What will be your first?'
            }
            case 1: {
                return 'First nomination saved!'
            }
            default: {
                return `${nominations.length} nominations saved!`
            }
        }
    }

    return (
        <footer className="bg-green-900 text-white fixed bottom-0 w-full ">
            <div className="max-w-3xl mx-auto px-2 min-h-full flex items-center">

                <h1 className="text-xl my-5"> {getText(nominations)} </h1>

                {nominations.map(nomination => <NominationBadge nomination={nomination} />)}
            </div>
        </footer>)
}