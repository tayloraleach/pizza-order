import styled from 'styled-components';
import { animated } from 'react-spring';

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
    marginLeft: 10,
    from: { marginLeft: 1000 }
};
