import { API_URL } from "./const";
import useSWR from "swr";

export default function useSearch({ term, shouldFetch, page }) {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const fetchUrl = `${API_URL}&s=${term}&type=movie&page=${page}`;

  return useSWR(shouldFetch ? fetchUrl : null, fetcher);
}
