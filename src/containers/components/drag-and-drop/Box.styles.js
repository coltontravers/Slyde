import styled from "styled-components";

export const BoxWrapper = styled.div`
    position: absolute;
    opacity: ${props => (props.isDragging ? 0 : 1)};
`;

export const BoxItem = styled.div`
    z-index: 1;
    margin: 2px;
    height: 100%;
    width: 100%;
    box-shadow: ${props => (props.resizing ? `0px 0px 2px black` : "")};
    &:hover & {
        box-shadow: 0px 0px 2px black;
    }
`;

// export const BoxHandle = styled.div`
//     margin-top: ${props => `${props.boxContent.top}px`};
//     left: ${props => `${props.boxContent.left}px`};
//     position: absolute;
//     background: grey;
//     top: 0;
//     left: 0;
//     height: 100%;
//     width: 100%;
//     z-index: -1;
//     cursor: move;
//     border: dotted;
// `;
