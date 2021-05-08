import { useNominations } from '../../lib/use-nominations'
import { useState, useEffect } from 'react'
import Details from './Details'
import Summary from './Summary';
import { Movie } from '../../lib/types'

export interface NominationProps {
    state: any;
    toggle: () => void;
    nominations: Movie[];
}

// helper method for generating the summary display text
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
// helper method for determining whether to show the review/submit button
const showSubmit = (nominations) => nominations.length === 5

export default function Nominations() {

    const [state, setState] = useState({ text: '', showSubmit: false, showDetails: false })
    const { nominations } = useNominations();

    // toggle method for setting summary vs. details
    const toggleDisplay = () => state.showDetails
        ? setState({ ...state, showDetails: false })
        : setState({ ...state, showDetails: true })

    useEffect(() => {
        setState({
            ...state,
            text: getText(nominations),
            showSubmit: showSubmit(nominations)
        })
    }, [nominations])

    return (
        <footer className="fixed bottom-0 w-full">
            <Details state={state} toggle={toggleDisplay} nominations={nominations} />
            <Summary state={state} toggle={toggleDisplay} nominations={nominations} />
        </footer>
    )
}