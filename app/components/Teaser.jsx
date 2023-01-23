import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <h2 className="text-2xl font-bold text-teal-500 uppercase">
        {blok.headline}
      </h2>
    </div>
  );
};

export default Teaser;
