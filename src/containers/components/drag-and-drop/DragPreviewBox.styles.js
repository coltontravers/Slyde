import styled from "styled-components";

export const BoxWrapper = styled.div`
    height: ${props => `${props.boxContent.height}`};
    width: ${props => `${props.boxContent.width}`};
    opacity: 0.7;
    background: yellow;
    position: relative;
    overflow: hidden;
`;

export const BoxItem = styled.div`
    z-index: 1;
    margin: 2px;
`;
