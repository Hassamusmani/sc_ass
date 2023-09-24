import React, { useState, useContext } from "react";
import RandomImage from "./RandomImage";
import { AppContext } from "../../contextProvider";
import MealModal from "../common/MealModal";

const MealItem = ({
  id,
  name,
  price,
  rating,
  description,
  isSelected,
  mealId,
  large,
}) => {
  const { mealSelectHandler, deleteMealHandler } = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const openModal = (meal) => {
    setSelectedMeal(meal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      className={`flex items-center border-b border-[#D3DBDA] px-3 py-3.5 cursor-pointer select-none mb-1 ${
        isSelected && large ? "isActive_meal" : ""
      } ${large ? "" : "bg-white"}`}
    >
      <div className="mr-3">
        <RandomImage />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-start flex-col">
          <h3
            className={`font-sans text-lg leading-[21px] tracking-normal text-center font-black mb-2 ${
              large ? "text-[#040503]" : "text-[#410deb]"
            }`}
          >
            {name}
          </h3>
          <div className="flex items-center">
            <h5 className="font-sans text-xs leading-4 tracking-normal text-center font-semibold text-[#040503] whitespace-nowrap mr-4">
              AED {price}
            </h5>
            {large && (
              <div className="flex text-[#79E003] font-bold">
                <h6 className="text-xs mr-[3px]">{rating}</h6>
                <i class="fi fi-rr-star" style={{ fontSize: "x-small" }}></i>
              </div>
            )}
            {large && (
              <p className="font-sans text-sm leading-[18px] tracking-normal text-center font-medium text-[#2F3333A6] max-w-[460px] overflow-hidden whitespace-nowrap text-ellipsis mr-4 ml-9">
                {description}
              </p>
            )}
            {large && (
              <div className="flex">
                <div
                  className="mr-[18px] cursor-pointer"
                  onClick={() =>
                    openModal({ id, name, price, rating, description, mealId })
                  }
                >
                  {large && (
                    <i class="fi fi-rr-eye" style={{ fontSize: "larger" }}></i>
                  )}
                </div>
                <div onClick={() => mealSelectHandler(mealId, id)}>
                  {large && !isSelected && (
                    <i
                      class="fi fi-rr-check"
                      style={{ fontSize: "medium" }}
                    ></i>
                  )}
                  {large && isSelected && (
                    <i
                      class="fi fi-rr-cross"
                      style={{ fontSize: "medium" }}
                    ></i>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        {!large && (
          <i
            class="fi fi-rr-trash"
            style={{ fontSize: "x-large" }}
            onClick={() => deleteMealHandler(id)}
          ></i>
        )}
      </div>
      {isModalOpen && selectedMeal && (
        <MealModal
          meal={selectedMeal}
          onClose={closeModal}
          onAddMeal={(mealId) => {
            mealSelectHandler(mealId, id);
          }}
        />
      )}
    </div>
  );
};

export default MealItem;
