import React, { FC, useMemo, useEffect } from "react";
import { Movie } from './types'
const NOMINATIONS = "NOMINATIONS";

export interface State {
    nominations: Movie[];
}

// Going to be saving context state in localstorage and 
// need to read it back out of localstorage on initial load  
const getNominationsLocalStorage = () => {
    // only return localstorage object if we're on client and certain it exists
    if (typeof window !== 'undefined' && localStorage.getItem(NOMINATIONS)) {
        return JSON.parse(localStorage.getItem(NOMINATIONS))
    }
    else return {
        nominations: [],
    }
}

type Action =
    { type: "ADD_NOMINATION_SUCCESS"; item: Movie }
    | { type: "ADD_NOMINATION_FAIL" }
    | { type: "REMOVE_NOMINATION"; item: Movie }
    | { type: "REMOVE_ALL_NOMINATIONS" }
    | { type: "SUBMIT_NOMINATIONS" };

export const NominationsContext = React.createContext<State | any>(getNominationsLocalStorage());
NominationsContext.displayName = "Nominations";

export const nominationsReducer = (state: State, action: Action) => {
    switch (action.type) {
        case "ADD_NOMINATION_SUCCESS": {
            return {
                ...state,
                nominations: [...state.nominations, action.item]
            };
        }
        case "REMOVE_NOMINATION": {
            return {
                ...state,
                nominations: state.nominations.filter(li => li.imdbID != action.item.imdbID)
            };
        }
        case "REMOVE_ALL_NOMINATIONS": {
            return {
                ...state,
                nominations: [],
            };
        }
    }
};

export const NominationsProvider = (props) => {
    const [state, dispatch] = React.useReducer(nominationsReducer, getNominationsLocalStorage());

    useEffect(() => {
        localStorage.setItem(NOMINATIONS, JSON.stringify(state));
    }, [state]);

    const addNomination = (item) => dispatch({ type: "ADD_NOMINATION_SUCCESS", item })
    const removeNomination = (item) => dispatch({ type: "REMOVE_NOMINATION", item });
    const clearNominations = () => dispatch({ type: "REMOVE_ALL_NOMINATIONS" });

    const value = useMemo(
        () => ({
            ...state,
            addNomination,
            removeNomination,
            clearNominations,
        }),
        [state]
    )

    return <NominationsContext.Provider value={value} {...props} />;
};

// wrap context in a hook to ensure it's always used within the provider
export const useNominations = () => {
    const context = React.useContext(NominationsContext);
    if (context === undefined) {
        throw new Error("useNomination must be used within a NominationProvider");
    }
    return context;
};

export const _NominationsContext = ({ children }) => (
    <NominationsProvider>
        {children}
    </NominationsProvider>
);
