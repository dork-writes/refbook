import { useDispatch, useSelector } from "react-redux";
import { filterReferences } from "../../../slices/referenceSlice";
import { updateQuery } from "../../../slices/searchSlice";
import search from "../../../assets/search.svg";

const Header = ({ setForm }) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.searchQuery);

  const filterChange = ({ currentTarget }) => {
    const query = currentTarget.value;
    dispatch(updateQuery(query));
    dispatch(filterReferences(query));
  };

  return (
    <header className="sticky top-0 shadow-md z-10 space-y-5 md:space-y-0 md:space-x-2 md:flex md:justify-between py-7 px-5 md:p-10 bg-zinc-900 w-[100%] opacity-90">
      <h1 className="md:text-3xl lg:text-4xl font-extralight">REFBOOK</h1>
      <div className="flex md:w-[40%] bg-zinc-800 px-2 rounded-md">
        <img src={search} width="20rem" alt="search icon" />
        <input
          autoComplete="off"
          onChange={filterChange}
          value={searchQuery}
          tabIndex={-1}
          className="px-2 py-2 rounded-md w-[100%] bg-transparent focus:outline-0"
          placeholder="Search"
          type="text"
        />
      </div>
      <button
        onClick={setForm}
        tabIndex={-1}
        className="block px-5 py-2 bg-slate-700 hover:bg-slate-600 active:bg-slate-700 w-[100%] md:w-fit transition-all rounded-sm"
      >
        Add a reference
      </button>
    </header>
  );
};

export default Header;
