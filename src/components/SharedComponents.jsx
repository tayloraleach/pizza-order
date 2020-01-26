import styled from "styled-components";
import { animated } from "react-spring";

export const PizzaOption = styled.div`
  font-weight: ${({ selected }) => (selected ? 900 : 400)};
`;
export const PizzaOptionsContainer = styled(animated.div)`
  margin: 10px;
  border: 1px solid #ccc;
`;

export const OrderControls = styled.div`
  margin: 10px;
  display: flex;
  border: 1px solid #ccc;
`;

export const selectAnimation = {
  opacity: 1,
  from: { opacity: 0 },
};

export const pizzaRotateAnimation = {
  from: { transform: "rotate(0deg)" },
  to: async next => {
    let x = 0;
    while (true) {
      x += 3;
      await next({ transform: `rotate(${x}deg)` });
    }
  },
  config: {
    duration: 100,
  },
};
