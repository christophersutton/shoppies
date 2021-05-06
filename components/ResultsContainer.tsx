import ResultsList from './ResultList';

export default function ResultsContainer({
  data,
  error,
  shouldFetch,
  isValidating,
  setSearchParams,
  currentSearchParams,
}) {

  if (error) return <div>failed to load</div>;
  if (!shouldFetch && !data) return <div>Search for something dingdong...</div>;
  if (shouldFetch && !data) return <div>Searching...</div>;
  if (data.Response == "False") return <div>No Results Found</div>
  return <ResultsList 
    data={data} 
    setSearchParams={setSearchParams}
    currentSearchParams={currentSearchParams} />
}