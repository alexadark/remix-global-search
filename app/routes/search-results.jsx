import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
export const loader = async ({ params, request }) => {
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search);
  const query = search.get("query");
  console.log("query", query);
  return null;
};
const SearchResults = () => {
  return <h1>Search results</h1>;
};

export default SearchResults;
