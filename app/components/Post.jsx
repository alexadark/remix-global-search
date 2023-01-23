import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Post = ({ blok }) => {
  const { headline, text, _uid, image } = blok;
  return (
    <article {...storyblokEditable(blok)} key={_uid}>
      <h1 className="mb-3 text-2xl font-bold text-teal-500 uppercase ">
        {headline}
      </h1>
      <img
        className="mb-4 shadow-xl rounded-xl"
        src={`${image.filename}/m/600x300`}
        alt=""
      />
      <div className="prose">{render(text)}</div>
    </article>
  );
};

export default Post;
