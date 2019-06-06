import styled from "styled-components";

export const BoxWrapper = styled.div`
    transform: ${props =>
        `translate3d(${props.boxContent.left}px, ${
            props.boxContent.top
        }px, 0)`};
        height: ${props => `${props.boxContent.height}`}
            width: ${props => `${props.boxContent.width}`}
    position: absolute;
    opacity: ${props => (props.isDragging ? 0 : 1)};
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
    cursor: move;
    border: dotted;
`;
