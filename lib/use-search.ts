import { API_URL } from "./const";
import useSWR from "swr";

export type searchParams = {
    term: string;
    shouldFetch: boolean;
    page: number;
}

export default function useSearch({term, shouldFetch, page}: searchParams) {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const fetchUrl = `${API_URL}&s=${term.trim()}&type=movie&page=${page}`;
  return useSWR(shouldFetch ? fetchUrl : null, fetcher);
}
