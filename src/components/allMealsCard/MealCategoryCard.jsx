import React from "react";
import MealItem from "../common/MealItem";

const MealCategoryCard = ({ id, category, items }) => {
  return (
    <div className="mx-3 mt-[60px]">
      <header className="flex justify-between items-center mb-2">
        <div className="flex align-middle">
          <h1 className="font-sans font-bold text-xl leading-6 tracking-normal text-center text-[#040503] mr-5">
            {category}
          </h1>
          <span className="w-7 h-7 bg-black text-center rounded-full leading-5">
            <span className="font-sans text-base leading-[1.4] pt-[4px] inline-block align-middle text-[#ffffff]">
              {items.length}
            </span>
          </span>
        </div>
        <span className="font-sans text-[#2F3333A6] text-sm leading-[18px]">
          Select
        </span>
      </header>
      {items?.map((meal) => (
        <MealItem key={meal.id} {...meal} mealId={id} large />
      ))}
    </div>
  );
};

export default MealCategoryCard;
