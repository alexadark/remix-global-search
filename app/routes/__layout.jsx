import { Outlet } from "@remix-run/react";
import Layout from "../components/Layout";
import { getStoryblokApi } from "@storyblok/react";
import { json } from "@remix-run/node";

export const loader = async ({ params }) => {
  let slug = params["*"] ?? "home";

  let sbParams = {
    version: "draft",
  };

  let { data } = await getStoryblokApi().get(`cdn/stories/${slug}`, sbParams);
  return json(data?.story);
};

const LayoutRoute = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default LayoutRoute;
