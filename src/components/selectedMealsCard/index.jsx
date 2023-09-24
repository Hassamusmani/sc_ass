import React, { useContext, useEffect, useState } from "react";

import restaurant from "../../assets/restaurant.jpg";
import Button from "../common/Button";
import { AppContext } from "../../contextProvider";
import MealItem from "../common/MealItem";

const SelectedMealsCard = () => {
  const { selectedMeals } = useContext(AppContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = selectedMeals.reduce(
      (accumulator, item) => accumulator + item.price,
      0
    );
    setTotalPrice(total);
  }, [selectedMeals]);

  return (
    <>
      <header className="flex flex-col items-center pb-10 border-b border-[#D3DBDA] bg-white">
        <img className="mb-[19px]" src={restaurant} alt="restaurant" />
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-3">
            <h1 className="font-sans text-[18px] leading-6 tracking-normal text-center font-extrabold text-[#040503] mr-5">
              Jawharat Esham Restaurent
            </h1>
            <div className="flex text-[#79E003] font-bold">
              <h6 className="text-xs mr-[3px]">4.7</h6>
              <i class="fi fi-rr-star" style={{ fontSize: "x-small" }}></i>
            </div>
          </div>
          <div className="flex mb-4 items-center">
            <p className="font-sans text-sm leading-6 tracking-normal text-center text-[#040503] mr-5">
              Wafi Mall, First Floor, Horus, Phase 5, Dubai
            </p>
            <div className="w-9 h-9 bg-black rounded-xl text-white flex items-center justify-center">
              <i class="fi fi-rr-marker"></i>
            </div>
          </div>
          <Button classes="bg-[#020A05] text-white min-w-[170px] font-3.5 px-[23px] py-[9px] rounded-md hover:text-[#020A05] hover:bg-[#ffffff] border-[#fff] hover:border-[#020A05] border-2">
            Arabic Restaurant
          </Button>
        </div>
      </header>
      <div className="w-full max-h-60 overflow-y-auto scroll_hidden">
        {selectedMeals?.map((meal) => (
          <MealItem key={meal.id} {...meal} />
        ))}
      </div>
      <footer className="w-full bg-white">
        <div className="flex pl-3 py-5">
          <p className="text-sm text-[#2F3333A6]">
            Total Price{" "}
            <span className="text-lg text-[#020A05] font-bold">
              AED {totalPrice}
            </span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default SelectedMealsCard;
