import styled from "styled-components";

export const Slides = styled.div`
    display: flex;
    width: 15vw;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SlideWrapper = styled.div`
    margin: 4% 0;
    position: relative;
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-top: 56.25%;
    cursor: pointer;
    box-shadow: ${props =>
        props.active
            ? `0px 0px 1px 1px grey`
            : "0px 0px 0px 1px silver, 0px 0px 3px 2px #dcdcdc"};
`;
