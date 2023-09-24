import React from "react";
import AllMealsHeader from "./AllMealsHeader";
import AllMealCollection from "./AllMealCollection";

const AllMealsCard = () => {
  return (
    <>
      <div className="border-b border-b-[#D3DBDA] bg-white w-full py-6 sticky top-14">
        <AllMealsHeader />
      </div>
      <div className="py-4 pl-14 pr-10 bg-white">
        <AllMealCollection />
      </div>
    </>
  );
};

export default AllMealsCard;
