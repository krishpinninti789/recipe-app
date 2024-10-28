import RecipeList from "@/components/recipelist/RecipeList";
import Link from "next/link";

async function fetchList() {
  try {
    const res = await fetch("https://dummyjson.com/recipes");
    const result = await res.json();
    return result?.recipes;
  } catch (err) {
    throw new Error(err);
  }
}

export default async function Recipes() {
  const recipeList = await fetchList();

  return (
    <div className="ml-10 mt-10">
      <button className="bg-black rounded-md p-3 text-white">
        <Link href={"/"}>Go home</Link>
      </button>
      <RecipeList recipeList={recipeList} />
    </div>
  );
}
