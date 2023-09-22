import React from "react";
import AllMealsCard from "../components/allMealsCard";
import SelectedMealsCard from "../components/selectedMealsCard";

export const MealsPage = () => {
  return (
    <div>
      <div>
        <AllMealsCard />
      </div>
      <div>
        <SelectedMealsCard />
      </div>
    </div>
  );
};

export default MealsPage;
