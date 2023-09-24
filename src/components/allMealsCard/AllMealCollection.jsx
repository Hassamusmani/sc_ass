import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../contextProvider";
import MealCategoryCard from "./MealCategoryCard";
import { scrollToSelectedCategory } from "../../utils/utils";

const AllMealCollection = () => {
  const { allMeals, mealCategoryHandler } = useContext(AppContext);
  const scrollableDivRef = useRef(null);
  const positionToTrack = 200;

  const handleScroll = () => {
    const scrollableDiv = scrollableDivRef.current;
    if (!scrollableDiv) return;

    const elements = scrollableDiv.getElementsByClassName("cat_class");
    if (elements) {
      const targetPosition = positionToTrack;

      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element) {
          const elementTop = element.getBoundingClientRect().top;

          if (elementTop <= targetPosition) {
            const elementId = element.id;
            mealCategoryHandler(Number(elementId.split("_")[1]));
          }
        }
      }
    }
  };

  useEffect(() => {
    // minor issue here
    // scrollToSelectedCategory(allMeals, scrollableDivRef);
  }, [allMeals]);

  useEffect(() => {
    scrollableDivRef.current.addEventListener("scroll", handleScroll);
    return () => {
      scrollableDivRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={scrollableDivRef}
      className="max-h-[80vh] overflow-y-scroll scroll_hidden"
    >
      {allMeals.map((category) => (
        <MealCategoryCard key={category.id} {...category} />
      ))}
    </div>
  );
};

export default AllMealCollection;
