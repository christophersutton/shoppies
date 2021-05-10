import { useNominations } from '../../lib/use-nominations'
import { useState, useEffect } from 'react'
import Details from './Details'
import Summary from './Summary';
import { Movie } from '../../lib/types'

interface NominationsState {
    text: string;
    showReview: boolean;
    showDetails: boolean;
    summaryClasses: string;
}

export interface NominationsProps {
    state: NominationsState;
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
            return 'First of 5 nominations saved!'
        }
        default: {
            return `${nominations.length} of 5 nominations saved!`
        }
    }
}
// helper method for determining whether to show the review/submit button
const showReview = (nominations) => nominations.length === 5

// helper method for summary bar active classes
const getSummaryClasses = (nominations) => {
    return nominations.length == 0
        ? 'bg-green-900 pt-4' : nominations.length == 5
            ? 'cursor-pointer bg-green-600 hover:bg-green-900'
            : 'cursor-pointer bg-green-900 hover:bg-green-600'
}

export default function Nominations() {

    const [state, setState] = useState<NominationsState>({
        text: '',
        summaryClasses: '',
        showReview: false,
        showDetails: false,
    })
    const { nominations } = useNominations();

    // toggle method for setting summary vs. details
    const toggleDisplay = () => state.showDetails
        ? setState({ ...state, showDetails: false })
        : setState({ ...state, showDetails: true })

    useEffect(() => {
        setState({
            ...state,
            text: getText(nominations),
            showReview: showReview(nominations),
            summaryClasses: getSummaryClasses(nominations),
            showDetails: nominations.length == 0 ? false : state.showDetails
        })
    }, [nominations])

    return (
        <footer className="fixed bottom-0 w-full">
            <Details state={state} toggle={toggleDisplay} nominations={nominations} />
            <Summary state={state} toggle={toggleDisplay} nominations={nominations} />
        </footer>
    )
}