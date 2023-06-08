import { useEffect, useRef } from "react";
import clsx from "clsx";
const SearchForm = () => {
  let inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form className="flex justify-between md:w-[90%]">
      <input
        type="text"
        name="query"
        placeholder="Search..."
        ref={inputRef}
        className={clsx(
          "w-full h-12",
          "bg-teal-800",
          "border-0 border-l-8 border-teal-200 focus:border-teal-600",
          "text-teal-100",
          "text-xl font-bold tracking-wide uppercase",
          "focus:outline-none focus:ring-transparent  placeholder-teal-200"
        )}
      />
    </form>
  );
};

export default SearchForm;
