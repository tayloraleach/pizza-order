import React, { useState } from "react";
import styled from "styled-components";
import { useMachine } from "@xstate/react";
import CrustSelect from "./CrustSelect";
import Summary from "./Summary";
import SauceSelect from "./SauceSelect";
import ToppingsSelect from "./ToppingsSelect";
import pizzaMachine from "./PizzaMachine";
import { OrderControls, pizzaRotateAnimation } from "./components/SharedComponents";
import CheeseSelect from "./CheeseSelect";
import dough from "./images/dough.jpeg";
import { useSpring, animated } from "react-spring";

const BLANK_PIZZA = {
  crust: null,
  sauce: null,
  toppings: new Set([]),
};

// State Machine handles progress flow only. All other state is kept in this component.
const PizzaCustomizer = () => {
  const [machine, send] = useMachine(pizzaMachine);
  const [choices, setChoices] = useState(BLANK_PIZZA);
  // console.log(choices);

  const handleReset = () => {
    setChoices(BLANK_PIZZA);
    send({ type: "RESET" });
  };

  const rotateProps = useSpring(pizzaRotateAnimation);
  return (
    <Container>
      <Title>{machine.value}</Title>
      {machine.matches("crust") && <CrustSelect setChoices={setChoices} choices={choices} />}
      {machine.matches("sauce") && <SauceSelect choices={choices} setChoices={setChoices} />}
      {machine.matches("cheese") && <CheeseSelect choices={choices} setChoices={setChoices} />}
      {machine.matches("toppings") && <ToppingsSelect setChoices={setChoices} choices={choices} />}
      {machine.matches("summary") && <Summary choices={choices} />}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <animated.img style={rotateProps} src={dough} alt='' />
      </div>
      <OrderControls>
        {!machine.matches("crust") && (
          <ControlButton onClick={() => send({ type: "BACK", data: { ...choices } })}>Back</ControlButton>
        )}
        <ControlButton onClick={() => send({ type: "SUBMIT", data: { ...choices } })}>Next</ControlButton>
        <ControlButton style={{ marginLeft: "auto" }} onClick={handleReset}>
          Reset All
        </ControlButton>
      </OrderControls>
    </Container>
  );
};

export default PizzaCustomizer;

const ControlButton = styled.button`
  color: grey;
`;

const Container = styled.div`
  border: 1px solid grey;
  height: 90vh;
  margin: 20px auto;
  width: 500px;
  overflow: hidden;
`;

const Title = styled.h1`
  margin: auto;
  text-align: center;
`;
