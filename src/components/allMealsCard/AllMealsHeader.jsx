import React, { useContext } from "react";
import { AppContext } from "../../contextProvider";
import Pill from "../common/Pill";

const AllMealsHeader = () => {
  const { allMeals, mealCategoryHandler } = useContext(AppContext);

  console.log(allMeals);

  return (
    <>
      {allMeals?.map(({ id, category }) => (
        <Pill
          key={id}
          text={category}
          clickHandler={() => mealCategoryHandler(id)}
        />
      ))}
    </>
  );
};

export default AllMealsHeader;
