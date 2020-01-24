import React from "react";
import { PizzaOption } from "./SharedComponents";
import PIZZA_CHOICES from "./PizzaData";

export default function SauceSelect(props) {
  const { choices, setChoices } = props;
  const { sauce } = choices;
  return (
    <div>
      {Object.entries(PIZZA_CHOICES.sauce).map(key => {
        const choice = key[1].label;
        return (
          <PizzaOption
            key={choice}
            selected={sauce === choice}
            onClick={() => setChoices({ ...choices, sauce: choice })}
          >
            {choice}
          </PizzaOption>
        );
      })}
    </div>
  );
}
