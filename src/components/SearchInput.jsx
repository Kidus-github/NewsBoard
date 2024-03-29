import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchInput({ className }) {
  return (
    <div
      className={`flex items-center gap-2 bg-slate-100 py-1 px-4 rounded-md text-md ${className}`}
    >
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-slate-500" />
      <input type="text" name="Search" id="" placeholder="Search Newsboard" />
    </div>
  );
}

export default SearchInput;
