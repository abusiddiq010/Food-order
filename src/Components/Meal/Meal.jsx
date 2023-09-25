import React from "react";
import MealSummary from "./MealSummary";
import AvailableMeal from "./AvailableMeal";

const Meal = () => {
  return (
    <div>
      <div>
        <MealSummary />
      </div>
      <div>
        <AvailableMeal />
      </div>
    </div>
  );
};

export default Meal;
