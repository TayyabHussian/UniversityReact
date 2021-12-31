import "./SearchInput.css";

function SearchInput({ inputfor }) {
  return (
    <>
      <input
        type="text"
        className={`search-input border-2 h-10 w-32 rounded-lg text-center border-stone-300 focus-within:shadow-lg focus:outline-none transition-all `}
        placeholder="Search"
      />
    </>
  );
}

export default SearchInput;
