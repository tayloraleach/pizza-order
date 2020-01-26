import React from 'react';
import { PizzaOption, PizzaOptionsContainer, selectAnimation } from './components/SharedComponents';
import PIZZA_CHOICES from './PizzaData';
import { useSpring } from 'react-spring';

export default function SauceSelect(props) {
    const { choices, setChoices } = props;
    const { sauce } = choices;
    const animation = useSpring(selectAnimation);

    return (
        <PizzaOptionsContainer style={animation}>
            {Object.entries(PIZZA_CHOICES.sauce).map((key) => {
                const choice = key[1].label;
                return (
                    <PizzaOption
                        key={choice}
                        selected={sauce === choice}
                        onClick={() => setChoices({ ...choices, sauce: choice })}>
                        {choice}
                    </PizzaOption>
                );
            })}
        </PizzaOptionsContainer>
    );
}
