import React from "react";
import AllMealsCard from "../components/allMealsCard";
import SelectedMealsCard from "../components/selectedMealsCard";

export const MealsPage = () => {
  return (
    <div className="flex flex-wrap justify-between mx-72">
      <div className="rounded-xl max-w-4xl mx-auto ">
        <AllMealsCard />
      </div>
      <div className="flex flex-col items-center flex-1 self-start ml-11 border border-[#D3DBDA] rounded-xl sticky top-14">
        <SelectedMealsCard />
      </div>
    </div>
  );
};

export default MealsPage;
