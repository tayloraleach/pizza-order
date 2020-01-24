import React from "react";
import PIZZA_CHOICES from "./PizzaData";
import { PizzaOption } from "./SharedComponents";

export default function CrustSelect(props) {
  const { choices, setChoices } = props;
  const { crust } = choices;
  return (
    <div>
      {Object.entries(PIZZA_CHOICES.crust).map(key => {
        const choice = key[1].label;
        return (
          <PizzaOption
            key={choice}
            selected={crust === choice}
            onClick={() => setChoices({ ...choices, crust: choice })}
          >
            {choice}
          </PizzaOption>
        );
      })}
    </div>
  );
}
