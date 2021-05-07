import { useState } from "react";
import useSearch from "../lib/use-search";
import Search from "../components/Search";
import ResultsContainer from "../components/ResultsContainer";
import Nominations from '../components/Nominations'
const searchInit = {
  term: "",
  shouldFetch: false,
  page: 1,
};

export default function Home() {
  const [searchParams, setSearchParams] = useState(searchInit);
  const { data, error, isValidating } = useSearch(searchParams);

  return (
    <div className="w-full">
      <header className="h-4 bg-green-900"></header>
      <div className="max-w-3xl mx-auto px-2 mb-16">
        <div className="flex justify-center">
          <h1 className="text-2xl md:text-5xl tracking-tighter font-medium py-6 md:py-8 text-green-900">
            Submit Your <span className="font-bold">Shoppies</span> Nominations 
          </h1>
        </div>
        <Search
          setSearchParams={setSearchParams}
          currentSearchParams={searchParams}
        />
        <ResultsContainer
          data={data}
          error={error}
          isValidating={isValidating}
          shouldFetch={searchParams.shouldFetch}
          setSearchParams={setSearchParams}
          currentSearchParams={searchParams}
        />
      </div>
      <Nominations/>
    </div>
  );
}
