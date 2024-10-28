import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RecipeList = ({ recipeList }) => {
  return (
    <div>
      <div className="p-4 max-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipeList.map((recipe, i) => (
            <Link key={i} href={`/recipe-list/${recipe.id}`}>
              <Card>
                <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                  <div className="aspect-w-16 aspect-h-8 w-full lg:h-80">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="">
                    <h3 className="text-1xl font-extrabold text-gray-700 mt-3">
                      {recipe.name}
                    </h3>
                    <div className="flex gap-[10rem]">
                      <h3>Rating: {recipe.rating}</h3>
                      <h3>{recipe.cuisine}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
