import ResultsList from './ResultList';

export default function ResultsContainer({
  data,
  error,
  shouldFetch,
  isValidating,
  setSearchParams,
  currentSearchParams,
}) {

  if (error) return <p>Uh oh, the api is down. Please try again later.</p>;
  if (!shouldFetch && !data) return <p className="text-gray-400 text-center text-xl mt-12">Search to get started...</p>;
  if (shouldFetch && !data) return <p className="text-gray-400 text-center text-xl mt-12">Searching...</p>;
  if (data.Response == "False") return <p className="text-gray-400 text-center text-xl mt-12">Nothing was found! <br/>Try broadening your search.</p>;
  return <ResultsList 
    data={data} 
    setSearchParams={setSearchParams}
    currentSearchParams={currentSearchParams} />
}