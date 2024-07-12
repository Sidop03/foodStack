import React from 'react'
import RecipeList from '../components/RecipeList';
import Search from '../components/Search';
import { getRecipes } from '../services/Api';
import { useState,useEffect } from 'react';

const Recipes = () => {
  const [searchedQuery,setSearchedQuery]= useState('pizza');
  const [recipes,setRecipes]= useState([])

  useEffect(()=>{
    getSearchedResult();
  },[searchedQuery])

  const getSearchedResult= async()=>{
    let result= await getRecipes(searchedQuery);
    if(result&& result.recipes){
      setRecipes(result.recipes);
    }
  }

  return (
    <>
      <Search setSearchedQuery={setSearchedQuery}/>
      <RecipeList recipes={recipes} searchedQuery={searchedQuery }/>
    </>
  )
}

export default Recipes