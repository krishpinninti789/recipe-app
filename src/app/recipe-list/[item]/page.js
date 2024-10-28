"use client";
import { useState, useEffect } from "react";
import { use } from "react";
import { IoChevronBackCircle } from "react-icons/io5";
import Link from "next/link";

import React from "react";
import RecipeItem from "@/components/recipelist/RecipeItem";

const page = ({ params }) => {
  const [itemData, setItemData] = useState(null);
  const { item } = use(params);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/recipes/${item}`);
        const result = await res.json();
        setItemData(result);
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchDetails();
  }, []);

  //we de automatic params here using dynamic page
  // const details = await fetchDetails();

  return (
    <div>
      <button>
        <Link href={"/recipe-list"}>
          {/* <IoChevronBackCircle size={40} className="text-black" /> */}
        </Link>
      </button>
      <RecipeItem details={itemData} />
    </div>
  );
};

export default page;
