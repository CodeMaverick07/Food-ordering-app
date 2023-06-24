import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Puri-Bhaji",
    description: "Finest Puri-Bhaji in Mumbai",
    price: 160,
  },
  {
    id: "m2",
    name: "Pav-Bhaji",
    description: "Best Pav-Bhaji you will ever have",
    price: 150,
  },
  {
    id: "m3",
    name: "Vada-Pav",
    description: "Rohit Shrams favourite Vada-Pav",
    price: 140,
  },
  {
    id: "m4",
    name: "Biryani",
    description: "Delicious",
    price: 110,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
