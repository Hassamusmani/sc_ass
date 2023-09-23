import React from "react";
import RandomImage from "./RandomImage";

const MealModal = ({ meal, onClose, onAddMeal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md flex">
        <div className="max-w-[375px] relative">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            Close
          </button>
          <div className="mb-4">
            <div className="img-slider">
              <ul className="p-0 m-0 list-none">
                <li>
                  <RandomImage />
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-sans text-lg leading-[21px] tracking-normal text-center font-black text-[#040503] mb-2">
                {meal.name}
              </h3>
              <div className="flex">
                <h6 className="">{meal.rating}</h6>
                <span>Icon</span>
              </div>
            </div>
            <p>AED {meal.price}</p>
            <p>{meal.description}</p>
          </div>
          <button
            className="w-full  bg-[#410deb] hover:bg-[#ffffff] text-[#ffffff] hover:text-[#410deb] cursor-pointer border-2 border-[#ffffff] hover:border-[#410DEB] px-4 py-2 rounded-md"
            onClick={() => {
              onAddMeal(meal.id);
              onClose();
            }}
          >
            Add Meal
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealModal;
