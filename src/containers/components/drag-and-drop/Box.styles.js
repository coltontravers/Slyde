import styled from "styled-components";

export const BoxWrapper = styled.div`
    top: ${props => `${props.boxContent.top}px`};
    left: ${props => `${props.boxContent.left}px`};
    position: absolute;
`;

export const BoxItem = styled.div`
    z-index: 1;
    margin: 2px;
`;

export const BoxHandle = styled.div`
    margin-top: ${props => `${props.boxContent.top}px`};
    left: ${props => `${props.boxContent.left}px`};
    position: absolute;
    background: grey;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    cursor: grab;
    border: dotted;
`;
