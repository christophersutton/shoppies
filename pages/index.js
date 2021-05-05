import { useState } from "react";
import useSearch from "../lib/use-search";
import Search from "../components/Search";

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
    </>
  )
  // if (error) return <div>failed to load</div>
  // if (!data) return <div>Searching...</div>
  // if (data.Response == "False") return <div>No Results Found</div>
  // return <div>{data.totalResults} movies found</div>
}
