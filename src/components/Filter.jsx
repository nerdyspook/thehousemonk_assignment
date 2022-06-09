import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Filter = ({ setSearchedRecipe, term }) => {
  const [lowCarb, setLowCarb] = useState(false);
  const [lowFat, setLowFat] = useState(false);
  const [highFiber, setHighFiber] = useState(false);
  const [highProtein, setHighProtein] = useState(false);

  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [ingredients, setIngredients] = useState(0);

  const { searchTerm } = useParams();

  const getRecipes = async (term) => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${term}&app_id=${
        process.env.REACT_APP_API_ID
      }&app_key=${process.env.REACT_APP_API_KEY}&ingr=0-${Math.round(
        ingredients || 0
      )}${lowCarb ? "&diet=low-carb" : ""}${lowFat ? "&diet=low-fat" : ""}${
        highFiber ? "&diet=high-fiber" : ""
      }${highProtein ? "&diet=high-protein" : ""}&calories=${
        from ? Math.round(from) : 0
      }-${to ? Math.round(to) : 0}`
    );

    const recipes = await response.json();
    setSearchedRecipe(recipes.hits);
  };

  useEffect(() => {
    getRecipes(searchTerm);
  }, []);

  return (
    <div className="bg-slate-300 border border-slate-400 rounded-md mb-4 flex flex-col items-center">
      <div className="flex justify-center w-full gap-8 ">
        <div className="left w-auto">
          <div className="top flex flex-col justify-between items-end">
            <h2 className="m-4 mr-auto text-lg font-bold">Calories</h2>
            <div className="flex gap-4 mb-2">
              <label htmlFor="from">From</label>
              <input
                type="number"
                name=""
                id="from"
                className="w-12"
                onChange={(e) => {
                  setFrom(e.target.value);
                }}
              />
            </div>
            <div className="flex gap-4">
              <label htmlFor="to">To</label>
              <input
                type="number"
                name=""
                id="to"
                className="w-12"
                onChange={(e) => {
                  setTo(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="down flex flex-col justify-between items-end">
            <h2 className="m-4 mr-auto text-lg font-bold">Ingredients</h2>
            <div className="flex gap-4 mb-2">
              <label htmlFor="upto">Upto</label>
              <input
                type="number"
                name=""
                id="upto"
                className="w-12"
                onChange={(e) => {
                  setIngredients(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="right">
          <h2 className="mt-4 text-lg font-bold">Diet</h2>
          <div className="flex items-center ">
            <input
              type="checkbox"
              name=""
              id="low-carb"
              checked={lowCarb}
              className="h-8 mr-2"
              onChange={() => {
                setLowCarb((prev) => !prev);
              }}
            />
            <label htmlFor="low-carb">Low-Carb</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name=""
              id="low-fat"
              checked={lowFat}
              className="h-8 mr-2"
              onChange={() => {
                setLowFat((prev) => !prev);
              }}
            />
            <label htmlFor="low-fat">Low-Fat</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name=""
              id="high-fiber"
              checked={highFiber}
              className="h-8 mr-2"
              onChange={() => {
                setHighFiber((prev) => !prev);
              }}
            />
            <label htmlFor="high-fiber">High-fiber</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name=""
              id="high-protein"
              checked={highProtein}
              className="h-8 mr-2"
              onChange={() => {
                setHighProtein((prev) => !prev);
              }}
            />
            <label htmlFor="high-protein">High-Protein</label>
          </div>
        </div>
      </div>
      <div className="apply">
        <button
          className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm py-2.5 mr-2 my-2 inline-block px-20 text-center"
          onClick={() => {
            getRecipes(searchTerm);
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filter;
