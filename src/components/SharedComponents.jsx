import styled from 'styled-components';

export const PizzaOption = styled.div`
    font-weight: ${({ selected }) => (selected ? 900 : 400)};
`;

export const PizzaOptionsContainer = styled.div`
    margin: 10px;
    border: 1px solid #ccc;
`;

export const OrderControls = styled.div`
    margin: 10px;
    display: flex;
    border: 1px solid #ccc;
`;
