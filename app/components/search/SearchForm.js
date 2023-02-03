import { useEffect, useRef } from "react";
import { Form, useTransition } from "@remix-run/react";
import clsx from "clsx";

const SearchForm = ({ setOpen, setOpenOverlay }) => {
  let inputRef = useRef();

  let transition = useTransition();

  let isSearching = transition.state !== "idle";

  console.log("isSearching", isSearching, "state", transition.state);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (isSearching) {
      setOpenOverlay(true);
      setOpen(false);
    } else {
      setOpenOverlay(false);
    }
  }, [isSearching, setOpenOverlay, setOpen]);

  return (
    <Form method="post" className="flex justify-between md:w-[90%] relative">
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
    </Form>
  );
};

export default SearchForm;
