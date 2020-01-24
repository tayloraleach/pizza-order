import React from 'react';
import PIZZA_CHOICES from './PizzaData';
import { PizzaOption, PizzaOptionsContainer } from './components/SharedComponents';

export default function CrustSelect(props) {
    const { choices, setChoices } = props;
    const { crust } = choices;
    return (
        <PizzaOptionsContainer>
            {Object.entries(PIZZA_CHOICES.crust).map((key) => {
                const choice = key[1].label;
                return (
                    <PizzaOption
                        key={choice}
                        selected={crust === choice}
                        onClick={() => setChoices({ ...choices, crust: choice })}>
                        {choice}
                    </PizzaOption>
                );
            })}
        </PizzaOptionsContainer>
    );
}
