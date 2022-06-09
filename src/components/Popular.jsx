import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Popular = () => {
  const getRandom = async () => {
    const checkRecipes = sessionStorage.getItem("popular");

    if (checkRecipes) {
      setList(JSON.parse(checkRecipes));
    } else {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=veg&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&random=true`
      );

      const data = await response.json();
      console.log(data);
      setList(data.hits);
      sessionStorage.setItem("popular", JSON.stringify(data.hits));
    }
  };

  const [list, setList] = useState([]);

  useEffect(() => {
    getRandom();
  }, []);

  return (
    <div className="w-full max-w-[1024px] mx-auto py-16 px-4">
      <Splide
        options={{
          perPage: 3,
          gap: "1rem",
        }}
      >
        {list.map((recipe, index) => {
          return (
            <SplideSlide key={index}>
              <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
                <Link
                  to="/recipe"
                  onClick={() => {
                    sessionStorage.setItem(
                      "currentRecipe",
                      JSON.stringify(recipe.recipe)
                    );
                  }}
                >
                  <img
                    className="rounded-t-lg object-cover w-full"
                    src={recipe.recipe.image}
                    alt=""
                  />
                </Link>
                <div className="p-5">
                  <Link
                    to="/recipe"
                    onClick={() => {
                      sessionStorage.setItem(
                        "currentRecipe",
                        JSON.stringify(recipe.recipe)
                      );
                    }}
                  >
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 line-clamp-1">
                      {recipe.recipe.label}
                    </h5>
                  </Link>
                  <p className="mb-3 text-md font-normal text-gray-700 line-clamp-4">
                    {Math.round(recipe.recipe.calories)} calories <br />
                    {recipe.recipe.ingredients.length} Ingredients <br />
                    <span className="text-lg font-medium text-gray-400">
                      {recipe.recipe.source}
                    </span>
                  </p>
                  <Link
                    to="/recipe"
                    onClick={() => {
                      sessionStorage.setItem(
                        "currentRecipe",
                        JSON.stringify(recipe.recipe)
                      );
                    }}
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    Read more
                    <svg
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Popular;
