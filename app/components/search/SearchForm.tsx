import { useEffect, useRef } from "react";
import type { Dispatch, SetStateAction, FC } from "react";
import { useFetcher } from "@remix-run/react";
import clsx from "clsx";

type SetStateBool = Dispatch<SetStateAction<boolean>>;

interface SearchFormProps {
  setOpen: SetStateBool;
  setOpenOverlay: SetStateBool;
}

const SearchForm: FC<SearchFormProps> = ({ setOpen, setOpenOverlay }) => {
  let inputRef = useRef<HTMLInputElement>(null);
  const fetcher = useFetcher(); // You need to define the type for useFetcher and its return value
  console.log("fetcher", fetcher);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (fetcher.state !== "idle") {
      setOpenOverlay(true);
    } else {
      setOpenOverlay(false);
    }
    if (fetcher.formMethod === "POST") {
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
          "w-full h-12 px-5",
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
