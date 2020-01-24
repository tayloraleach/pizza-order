import React from 'react';
import { PizzaOption, PizzaOptionsContainer } from './components/SharedComponents';
import PIZZA_CHOICES from './PizzaData';

export default function ToppingsSelect(props) {
    const { choices, setChoices } = props;
    const { toppings } = choices;

    const handleSelect = (choice) => {
        if (toppings.has(choice)) {
            toppings.delete(choice);
            setChoices({
                ...choices,
                toppings: new Set([...toppings])
            });
        } else {
            setChoices({
                ...choices,
                toppings: new Set([...toppings, choice])
            });
        }
    };
    return (
        <PizzaOptionsContainer>
            {Object.entries(PIZZA_CHOICES.toppings).map((key) => {
                const choice = key[1].label;
                return (
                    <PizzaOption key={choice} selected={toppings.has(choice)} onClick={() => handleSelect(choice)}>
                        {choice}
                    </PizzaOption>
                );
            })}
        </PizzaOptionsContainer>
    );
}
