import { useDispatch } from "react-redux";
import { set_searchTerm } from "../../redux/actions";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    let searchTerm = e.target.value.trim();
    dispatch(set_searchTerm(searchTerm));
  };
  return (
    <div className="header">
      <input
        type="text"
        placeholder="Search..."
        className="headerSearch"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Header;
