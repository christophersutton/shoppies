// useSearch 
export const API_DOMAIN = 'http://www.omdbapi.com';
export const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
export const API_URL = `${API_DOMAIN}/?apikey=${API_KEY}`

// useNominations 
export const NOMINATIONS = 'NOMINATIONS'
export const EMPTY_STATE_NOMINATIONS_MESSAGE = `You haven't added any nominees yet`
export const TOO_MANY_NOMINATIONS_ERROR = `You can only nominate 5 films. Please delete one before adding!`
export const FIVE_NOMINATIONS_SUCCESS_MESSAGE = `You've selected your 5th nominee! Are you ready to submit?`
