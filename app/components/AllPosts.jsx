import { storyblokEditable } from "@storyblok/react";
import { useLoaderData, Link } from "@remix-run/react";

const AllPosts = ({ blok }) => {
  const { posts } = useLoaderData();

  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <h1 className="mb-10 text-4xl font-bold text-center text-teal-500 uppercase">
        {blok.headline}
      </h1>
      <div className="grid grid-cols-3">
        {posts?.map((p) => {
          const post = p.content;
          return (
            <article key={post._uid}>
              <Link to={`/${p.full_slug}`}>
                <h2 className="mb-5 text-xl font-bold text-center uppercase hover:text-teal-500">
                  {post.headline}
                </h2>
                <img src={`${post.image?.filename}/m/400x200`} alt="" />
              </Link>
              <p>{post.teaser}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default AllPosts;
