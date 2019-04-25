import styled from "styled-components";

export const TextInputWrapper = styled.div`
    width: ${props => props.dimensions.width};
    height: ${props => props.dimensions.height};
    top: ${props => props.position.y};
    left: ${props => props.position.x};
    overflow: hidden;
    margin: 0 auto;
`;
