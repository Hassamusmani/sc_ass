import React, { useContext, useRef, useState, useEffect } from "react";
import { AppContext } from "../../contextProvider";
import Pill from "../common/Pill";

const AllMealsHeader = () => {
  const { allMeals, mealCategoryHandler } = useContext(AppContext);
  const scrollableDivRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activePillId, setActivePillId] = useState(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollableDivRef.current.offsetLeft);
    setScrollLeft(scrollableDivRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollableDivRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollableDivRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleArrowClick = () => {
    const scrollableElement = scrollableDivRef.current;
    const scrollAmount = 200;

    if (scrollableElement) {
      const targetScrollLeft = scrollableElement.scrollLeft + scrollAmount;

      scrollableElement.scrollBy({
        left: targetScrollLeft - scrollableElement.scrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setActivePillId(allMeals.find((meal) => meal.isSelected).id);
  }, [allMeals]);

  useEffect(() => {
    if (activePillId) {
      const activePillElement = document.getElementById(`pill_${activePillId}`);
      if (activePillElement) {
        const scrollableElement = scrollableDivRef.current;
        const targetScrollLeft = activePillElement.offsetLeft - 56;

        scrollableElement.scrollTo({
          left: targetScrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [activePillId]);

  return (
    <div className="flex justify-between">
      <div
        ref={scrollableDivRef}
        className="flex items-start w-full overflow-x-auto scroll_hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {allMeals?.map(({ id, category, isSelected }, index) => (
          <div
            id={`pill_${id}`}
            className={`${index === 0 ? "pl-14" : ""} ${
              index === allMeals.length - 1 ? "pr-14" : ""
            }`}
          >
            <Pill
              key={id}
              text={category}
              clickHandler={() => {
                mealCategoryHandler(id);
              }}
              isActive={isSelected}
            />
          </div>
        ))}
      </div>
      <div className="w-12 bg-white relative">
        <div
          className="absolute top-1/2 transform -translate-y-1/2 -left-1/2 w-12 h-12 rounded-full bg-white text-[#410DEB] shadow_custom"
          onClick={handleArrowClick}
        >
          <i
            className="absolute top-1/2 transform -translate-y-1/2 left-1/3 fi fi-rr-arrow-right"
            style={{ fontSize: "larger" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default AllMealsHeader;
