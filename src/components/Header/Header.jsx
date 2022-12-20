import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_filtered_Note, set_searchTerm } from "../../redux/actions";
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
