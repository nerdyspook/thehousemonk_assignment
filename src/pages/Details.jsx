import React from "react";

const Details = () => {
  const currentRecipe = JSON.parse(sessionStorage.getItem("currentRecipe"));

  return (
    <div className="flex mt-4 mx-2">
      <div className="left">
        <div className="top">
          <img src={currentRecipe.image} alt="" />
        </div>
        <div className="bottom">
          <h2 className="ml-2 my-4 text-lg font-bold underline">Health</h2>
          <ul className="list-disc ml-6">
            {currentRecipe.healthLabels?.map((label, index) => (
              <li key={index}>{label}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right">
        <h1 className="ml-4 my-4 text-lg font-bold ">{currentRecipe.label}</h1>
        {currentRecipe.cuisineType?.map((cuisine, index) => (
          <span
            key={index}
            className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded ml-3 "
          >
            {cuisine}
          </span>
        ))}

        {currentRecipe.dishType?.map((dish, index) => (
          <span
            key={index}
            className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3 inline-block "
          >
            {dish}
          </span>
        ))}
        <h2 className="ml-4 my-4 text-lg font-bold underline">
          {currentRecipe.ingredients.length} Ingredients
        </h2>
        <ul className="list-disc ml-10">
          {currentRecipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
