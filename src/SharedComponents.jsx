import styled from "styled-components";

export const PizzaOption = styled.div`
  font-weight: ${({ selected }) => (selected ? 900 : 400)};
`;
