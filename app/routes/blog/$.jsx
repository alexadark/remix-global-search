import {
  useStoryblokState,
  StoryblokComponent,
  getStoryblokApi,
} from "@storyblok/react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }) => {
  const slug = params["*"] ?? "home";
  const sbApi = getStoryblokApi();
  const { data } = await sbApi.get(`cdn/stories/${slug}`, {
    version: "draft",
  });
  return json(data?.story);
};

const BlogRoute = () => {
  const data = useLoaderData();
  const story = useStoryblokState(data.story, {});
  return <StoryblokComponent blok={story.content} />;
};

export default BlogRoute;
