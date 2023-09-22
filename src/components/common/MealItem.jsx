import React, { useContext } from "react";
import RandomImage from "./RandomImage";
import { AppContext } from "../../contextProvider";

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
  const { mealSelectHandler } = useContext(AppContext);
  return (
    <div>
      <div style={{ width: "72px" }}>
        <RandomImage />
      </div>
      <div>
        <h3>{name}</h3>
        <div>
          <h5>AED {price}</h5>
          {large && (
            <div>
              <h6>{rating}</h6>
              Icon
            </div>
          )}
        </div>
      </div>
      {large && <p>{description}</p>}
      <div>
        <div>{large ? "Icon1" : "Icon2"}</div>
        {large && (
          <input
            type="checkbox"
            name="meal"
            checked={isSelected}
            onChange={() => mealSelectHandler(mealId, id)}
          />
        )}
      </div>
    </div>
  );
};

export default MealItem;
