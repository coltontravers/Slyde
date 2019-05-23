import styled from "styled-components";

export const MainSlide = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 2% 2% 2%;
    overflow: hidden;
    height: 0;
    position: relative;
    padding-top: 56.25%;
    box-shadow: 0px 0px 5px 0px #dedede;
`;

export const MainSlideWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding-top: 0.5%;
`;

export const Slides = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    padding: 2% 1%;
`;

export const SlidePreviewWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 15vh;
    box-shadow: 0px 0px 0px 1px silver;
`;

export const SlideViewWrapper = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
`;
