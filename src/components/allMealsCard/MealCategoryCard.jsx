import React from "react";
import MealItem from "../common/MealItem";

const MealCategoryCard = ({ id, category, items }) => {
  return (
    <div>
      <header>
        <h1>{category}</h1>
        <p>{items.length}</p>
        <p>Select</p>
      </header>
      {items?.map((meal) => (
        <MealItem key={meal.id} {...meal} mealId={id} large />
      ))}
    </div>
  );
};

export default MealCategoryCard;
