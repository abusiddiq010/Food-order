import React, { useContext } from "react";
import Card from "../UI/Card";
import MealItem from "./component/MealItem";
import classes from "./AvailableMeal.module.css";

const AvailableMeal = () => {
  const Meal = [
    {
      id: 1,
      available: "Chappathi",
      price: 20,
    },
    {
      id: 2,
      available: "Idly",
      price: 10,
    },
    {
      id: 3,
      available: "Dosa",
      price: 15,
    },
  ];
  return (
    <section className={`${classes.meals} shadow-2xl`}>
      <Card>
        {Meal.map(({ available, price, id }, index) => (
          <ul key={index}>
            <MealItem id={id} available={available} price={price} />
          </ul>
        ))}
      </Card>
    </section>
  );
};

export default AvailableMeal;
