import { useEffect, useRef } from "react";
import { useFetcher } from "@remix-run/react";
import clsx from "clsx";

const SearchForm = ({ setOpen, setOpenOverlay }) => {
  let inputRef = useRef();
  const fetcher = useFetcher();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (fetcher.state !== "idle") {
      setOpenOverlay(true);
    } else {
      setOpenOverlay(false);
    }
    if (fetcher.type === "done") {
      setOpen(false);
    }
  }, [fetcher, setOpenOverlay, setOpen]);

  return (
    <fetcher.Form
      method="post"
      className="flex justify-between md:w-[90%] relative"
    >
      <input
        ref={inputRef}
        type="text"
        minLength={3}
        name="query"
        placeholder="Search..."
        className={clsx(
          "w-full h-12",
          "bg-teal-800",
          "border-0 border-l-8 border-teal-200 focus:border-teal-600",
          "text-teal-100",
          "text-xl font-bold tracking-wide uppercase",
          "focus:outline-none focus:ring-transparent  placeholder-teal-200"
        )}
      />
    </fetcher.Form>
  );
};

export default SearchForm;
