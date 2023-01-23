import { NavLink } from "@remix-run/react";

const Header = () => {
  return (
    <div className="mb-10 text-white bg-teal-500 shadow-md ">
      <div className="container flex justify-between py-5 mx-auto ">
        <h1 className="text-3xl font-bold uppercase">My Blog</h1>
        <nav className="flex gap-5 text-xl [&>a:hover]:underline">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
