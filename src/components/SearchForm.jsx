import React from "react";
import { useGlobalContext } from "../context/context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  return <div>SearchForm</div>;
};

export default SearchForm;
