import React from "react";

const Search = ({ setSearch, setCurrentPage, setLoading }) => {
  const onSearch = (event) => {
    event.preventDefault();
    const search = event.target.search.value;
    event.target.search.value = "";
    setCurrentPage(0);
    setSearch(search);
    setLoading(true);
  };

  return (
    <div className="my-10">
      <form
        onSubmit={onSearch}
        className="flex flex-col lg:flex-row justify-center"
      >
        <input
          type="text"
          name="search"
          placeholder="Type here"
          className="input input-bordered input-primary w-full lg:max-w-lg"
        />
        <button
          type="submit"
          className="btn btn-secondary mt-2 lg:mt-0 lg:ml-2"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
