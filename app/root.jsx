import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "./components/Page";

import Layout from "./components/Layout";
import Post from "./components/Post";
import AllPosts from "./components/AllPosts";
import PageContent from "./components/PageContent";
import tailwind from "./styles/tailwind-build.css";
const isServer = typeof window === "undefined";

//We need to check if we are on the server or client to get the correct env variable
const accessToken = isServer
  ? process.env.STORYBLOK_PREVIEW_TOKEN
  : window.env.STORYBLOK_PREVIEW_TOKEN;

const components = {
  page: Page,
  post: Post,
  "all-posts": AllPosts,
  "page-content": PageContent,
};
storyblokInit({
  accessToken,
  use: [apiPlugin],
  components,
});

export const loader = async () => {
  return json({
    env: {
      STORYBLOK_PREVIEW_TOKEN: process.env.STORYBLOK_PREVIEW_TOKEN,
    },
  });
};

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const { env } = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(env)}`,
          }}
        />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const links = () => {
  return [{ rel: "stylesheet", href: tailwind }];
};
