import clsx from "clsx";

const SearchForm = () => {
  return (
    <form className="flex justify-between md:w-[90%]">
      <input
        type="text"
        name="query"
        placeholder="Search..."
        className={clsx(
          "w-full h-12",
          "bg-teal-800",
          "border-0 border-l-8 border-teal-200 focus:border-teal-600",
          "text-teal-100",
          "text-xl font-bold tracking-wide uppercase",
          "focus:outline-none focus:ring-transparent focus:placeholder-transparent  placeholder-teal-200"
        )}
      />
    </form>
  );
};

export default SearchForm;
