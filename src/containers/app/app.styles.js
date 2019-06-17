import styled, { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyles = createGlobalStyle`
    html {
        overflow: hidden;
    },
    
    html, body, #root {
        height: 100%;
    }
`;

export const Wrapper = styled.div`
    height: 100%;
`;
