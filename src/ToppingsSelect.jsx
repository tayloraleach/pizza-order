import React from "react";
import { PizzaOption } from "./SharedComponents";
import PIZZA_CHOICES from "./PizzaData";

export default function ToppingsSelect(props) {
  const { choices, setChoices } = props;
  const { toppings } = choices;
  return (
    <div>
      {Object.entries(PIZZA_CHOICES.toppings).map(key => {
        const choice = key[1].label;
        return (
          <PizzaOption
            key={choice}
            selected={toppings === choice}
            onClick={() =>
              setChoices({
                ...choices,
                toppings: new Set([...toppings, choice])
              })
            }
          >
            {choice}
          </PizzaOption>
        );
      })}
    </div>
  );
}
