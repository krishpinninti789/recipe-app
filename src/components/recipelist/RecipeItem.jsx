import { Heading1 } from "lucide-react";
import React from "react";
import { GiSpoon } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import "../../../src/app/globals.css";
import { useRouter } from "next/navigation";

const RecipeItem = ({ details }) => {
  const router = useRouter();
  return (
    details && (
      <>
        <button
          className="m-4 px-6 py-2 rounded-xl text-white bg-green-600"
          onClick={() => router.back()}
        >
          Back
        </button>
        <div
          className={` lg:flex lg:w-full h-screen w-full lg:h-screen gap-6 lg:overflow-y-hidden`}
        >
          <div className="lg:flex md:flex flex-col m-4 gap-6 lg:sticky shadow-2xl rounded-2xl font-serif bg-white p-4 ">
            <h1 className="text-2xl flex mt-3 gap-3 font-extrabold">
              <FaBowlFood size={60} />
              {details.name}
            </h1>
            <div className="aspect-w-16 aspect-h-8 w-full sm:h-10 rounded-md md:h-50 lg:h-[300px]">
              <img src={details.image} alt="" height={350} width={300} />
            </div>
            <div className="flex item-props flex-col gap-5">
              <h1>Cuisine:{details.cuisine}</h1>
              <h1>Difficulty: {details.difficulty}</h1>
              <h1 className="flex">
                Rating :<FaStar className="text-yellow-500" /> {details.rating}
              </h1>
              <h1>Time of preparation :{details.prepTimeMinutes} min</h1>
              <h1>Time for cooking :{details.cookTimeMinutes} min</h1>
              <h1>Meal type:{details.mealType}</h1>
            </div>
          </div>

          <div className="lg:m-4 lg:w-[3/4] md:w-[full] h-fit gap-6 lg:overflow-auto font-serif rounded-xl bg-green-600 shadow-2xl p-6 custom-scroll-hide">
            <h1 className="font-extrabold text-4xl mb-4 mt-4 text-gray-200">
              Ingredients:
            </h1>
            <ul className="flex flex-col text-white gap-5">
              {details.ingredients.map((ele, i) => (
                <li key={i} className="flex text-2xl gap-3">
                  {ele}
                </li>
              ))}
            </ul>
            <div className=" ">
              <h1 className="font-extrabold mt-4 mb-4 text-4xl text-white">
                Directions:
              </h1>
              <ul className="list-disc pb-6 list-inside flex flex-col gap-5">
                {details.instructions.map((ele, i) => (
                  <li className="text-2xl " key={i}>
                    {ele}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default RecipeItem;
