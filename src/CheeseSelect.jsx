import React from 'react';
import PIZZA_CHOICES from './PizzaData';
import { PizzaOption, PizzaOptionsContainer, selectAnimation } from './components/SharedComponents';
import { useSpring } from 'react-spring';

export default function CheeseSelect(props) {
    const { choices, setChoices } = props;
    const { cheese } = choices;
    const animation = useSpring(selectAnimation);
    return (
        <PizzaOptionsContainer style={animation}>
            {Object.entries(PIZZA_CHOICES.cheese).map((key) => {
                const choice = key[1].label;
                return (
                    <PizzaOption
                        key={choice}
                        selected={cheese === choice}
                        onClick={() => setChoices({ ...choices, cheese: choice })}>
                        {choice}
                    </PizzaOption>
                );
            })}
        </PizzaOptionsContainer>
    );
}
