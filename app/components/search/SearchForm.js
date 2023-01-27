import { useEffect, useRef } from "react";
import { Form, useTransition, useSearchParams } from "@remix-run/react";
import { BiSearch as SearchIcon } from "react-icons/bi";
import clsx from "clsx";

const SearchForm = ({ setOpen, setOpenOverlay, openOverlay }) => {
  const [params] = useSearchParams();
  const query = params.get("query");

  let formRef = useRef();
  let inputRef = useRef();

  let transition = useTransition();

  let isSearching =
    transition.state === "submitting" &&
    transition.submission.formData.get("_action") === "search";

  console.log(
    "isSearching",
    isSearching,
    "query",
    query,
    "openOverlay",
    openOverlay
  );
  const close = () => {
    setOpen(false);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (query?.length > 0) {
      setOpenOverlay(false);
    }
  }, [setOpenOverlay, query]);

  useEffect(() => {
    if (isSearching) {
      setOpenOverlay(true);
    }
  }, [isSearching, setOpenOverlay]);

  return (
    <Form
      ref={formRef}
      method="post"
      className="flex justify-between md:w-[90%] relative"
      onSubmit={close}
    >
      <input
        ref={inputRef}
        type="text"
        minLength="3"
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
      <button
        type="submit"
        name="_action"
        value="search"
        className="absolute text-teal-200 right-5 top-3"
      >
        {isSearching ? (
          "Searching..."
        ) : (
          <SearchIcon className="text-xl text-teal-200" />
        )}
      </button>
    </Form>
  );
};

export default SearchForm;
