import { useState } from "react";
import useSearch from "../lib/use-search";
import Search from "../components/Search";
import ResultList from "../components/ResultList"
const searchInit = {
  term: "",
  shouldFetch: false,
  page: 1,
};

export default function Home() {
  const [searchParams, setSearchParams] = useState(searchInit);
  const { data, error } = useSearch(searchParams);

  return (
    <>
      <Search handleSearch={setSearchParams} currentSearch={searchParams} />
      <ResultList data={data} error={error}/>
    </>
  )
}
