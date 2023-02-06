import { useLoaderData, Link } from "@remix-run/react";
import { getStoryblokApi } from "@storyblok/react";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search);
  const query = search.get("query");
  const filter_query = {
    __or: [
      {
        body: {
          like: `*${query}*`,
        },
      },
      {
        headline: {
          like: `*${query}*`,
        },
      },
      {
        text: {
          like: `*${query}*`,
        },
      },
    ],
  };
  const { data } = await getStoryblokApi().get(`cdn/stories`, {
    version: "draft",
    filter_query,
  });
  return { stories: data.stories };
};

const SearchResults = () => {
  const { stories } = useLoaderData();
  const pagesResults = stories.filter((s) => s.content.component === "page");
  const postsResults = stories.filter((s) => s.content.component === "post");
  if (stories.length === 0) return <h1>No results found</h1>;
  return (
    <>
      {pagesResults.length > 0 && <h2>Pages</h2>}
      {pagesResults?.map((p) => {
        return (
          <h3 key={p.id}>
            <Link to={`/${p.full_slug}`}>{p.name}</Link>
          </h3>
        );
      })}

      {postsResults.length > 0 && <h2>Posts</h2>}
      {postsResults?.map((p) => {
        return (
          <h3 key={p.id}>
            <Link to={`/${p.full_slug}`}>{p.content.headline}</Link>
          </h3>
        );
      })}
    </>
  );
};

export default SearchResults;
