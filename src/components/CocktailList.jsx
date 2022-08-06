import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context/context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no coctails matched your search criteria
      </h2>
    );
  }

  return <div>CocktailList</div>;
};

export default CocktailList;
