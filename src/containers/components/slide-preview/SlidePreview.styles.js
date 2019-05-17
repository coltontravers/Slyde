import styled from "styled-components";

export const Slides = styled.div`
    display: flex;
    width: 15vw;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// export const SlideWrapper = styled.div`
//     margin: 4% 0;
//     box-shadow: 0px 0px 0px 1px silver, 0px 0px 3px 2px #dcdcdc;
//     padding: 3%;
//     min-height: 100px;
//     min-width: 100%;
//     cursor: pointer;
// `;

export const SlideWrapper = styled.div`
    margin: 4% 0;
    padding: 3%;
    min-height: 100px;
    min-width: 100%;
    cursor: pointer;
    box-shadow: ${props => (props.active ? `0px 0px 1px 1px grey` : "")};
`;
