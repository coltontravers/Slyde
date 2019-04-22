import styled from "styled-components";

export const TextInputWrapper = styled.div`
    width: ${props => props.dimensions.width};
    height: ${props => props.dimensions.height};
    top: ${props => props.position.y};
    left: ${props => props.position.x};
`;

// export const TextInputWrapper = styled.div.attrs({
//     style: props => {
//         const { position, dimensions } = props;

//         return {
//             width: dimensions.width,
//             height: dimensions.height,
//             top: position.y,
//             left: position.x
//         };
//     }
// })``;
