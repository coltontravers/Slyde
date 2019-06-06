import styled from "styled-components";

export const BoxWrapper = styled.div`
    top: ${props => `${props.boxContent.top}px`};
    left: ${props => `${props.boxContent.left}px`};
    position: absolute;
`;
