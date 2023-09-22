import React from "react";
import AllMealsHeader from "./AllMealsHeader";
import AllMealCollection from "./AllMealCollection";

const AllMealsCard = () => {
  return (
    <>
      <div>
        <AllMealsHeader />
      </div>
      <div>
        <AllMealCollection />
      </div>
    </>
  );
};

export default AllMealsCard;
