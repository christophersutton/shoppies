import { useState } from "react";
import useSearch from "../lib/use-search";
import Search from "../components/Search";
import ResultList from "../components/ResultList";
const searchInit = {
  term: "",
  shouldFetch: false,
  page: 1,
};

export default function Home() {
  const [searchParams, setSearchParams] = useState(searchInit);
  const { data, error } = useSearch(searchParams);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
      <Search handleSearch={setSearchParams} currentSearch={searchParams} />
      <ResultList
        data={data}
        error={error}
        isFetching={searchParams.shouldFetch}
      />
      </div>
    </div>
  );
}
