import React, { useContext } from "react";
import { AppContext } from "../../contextProvider";
import MealCategoryCard from "./MealCategoryCard";

const AllMealCollection = () => {
  const { allMeals } = useContext(AppContext);
  return (
    <>
      {allMeals.map((category) => (
        <MealCategoryCard key={category.id} {...category} />
      ))}
    </>
  );
};

export default AllMealCollection;
