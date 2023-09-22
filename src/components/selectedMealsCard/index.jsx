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
      <header>
        <img src={restaurant} alt="restaurant" />
        <div>
          <div>
            <h1>Jawharat Esham Restaurent</h1>
            <div>
              <h6>4.7</h6>
              Icon
            </div>
          </div>
          <div>
            <p>Wafi Mall, First Floor, Horus, Phase 5, Dubai</p>
            Icon
          </div>
          <Button classes="">Arabic Restaurant</Button>
        </div>
      </header>
      {selectedMeals?.map((meal) => (
        <MealItem key={meal.id} {...meal} />
      ))}
      <footer>
        <div>
          <p>
            Total Price <span>AED {totalPrice}</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default SelectedMealsCard;
