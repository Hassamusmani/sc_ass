import React, { createContext, useState } from "react";
import { MEALS_DATA } from "../constants/mealsData";

export const initContext = {
  allMeals: [],
  selectedMeals: [],
  mealSelectHandler: () => {},
};

const AppContext = createContext(initContext);

const AppContextProvider = ({ children }) => {
  const [allMeals, setAllMeals] = useState(MEALS_DATA);
  const [selectedMeals, setSelectedMeals] = useState([]);

  const mealSelectHandler = (categoryId, mealId) => {
    setAllMeals((allMeals) =>
      allMeals.map((category) => ({
        ...category,
        items: category.items.map((meal) => {
          if (category.id === categoryId && meal.id === mealId) {
            const updatedMeal = { ...meal, isSelected: !meal.isSelected };
            if (updatedMeal.isSelected) {
              setSelectedMeals((prevSelectedMeals) => [
                ...prevSelectedMeals,
                updatedMeal,
              ]);
            } else {
              setSelectedMeals((prevSelectedMeals) =>
                prevSelectedMeals.filter(
                  (selectedMeal) => selectedMeal.id !== updatedMeal.id
                )
              );
            }
            return updatedMeal;
          }
          return meal;
        }),
      }))
    );
  };

  const mealCategoryHandler = (categoryId) => {
    setAllMeals((allMeals) =>
      allMeals.map((category) => ({
        ...category,
        isSelected: category.id === categoryId,
      }))
    );
  };

  const deleteMealHandler = (mealId) => {
    setSelectedMeals((prevSelectedMeals) =>
      prevSelectedMeals.filter((selectedMeal) => selectedMeal.id !== mealId)
    );
    setAllMeals((allMeals) =>
      allMeals.map((category) => ({
        ...category,
        items: category.items.map((meal) => {
          if (meal.id === mealId) {
            return { ...meal, isSelected: false };
          }
          return meal;
        }),
      }))
    );
  };

  const contextValue = {
    allMeals,
    selectedMeals,
    mealSelectHandler,
    mealCategoryHandler,
    deleteMealHandler,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
