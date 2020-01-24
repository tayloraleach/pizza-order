import React from "react";
import { PizzaOption } from "./SharedComponents";
import PIZZA_CHOICES from "./PizzaData";

export default function PizzaChoicesList(props) {
  const { choices, setChoices, type } = props;
  const options = PIZZA_CHOICES[type];
  const { crust } = choices;
  return (
    <div>
      {Object.entries(options).map(key => {
        const choice = key[1].label;
        return (
          <PizzaOption
            key={key[1].label}
            selected={crust === choice}
            onClick={() => setChoices({ ...choices, crust: choice })}
          >
            {key[1].label}
          </PizzaOption>
        );
      })}
    </div>
  );
}
