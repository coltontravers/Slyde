import styled from "styled-components";

export const GeneralButton = styled.button`
    padding: 1em 1em;
    display: inline-block;
    border: none;
    margin: 0;
    background: none;
    text-decoration: none;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:hover {
        background: silver;
    }

    &:active {
        background: silver;
        outline: none;
    }

    &:focus {
        background: silver;
        outline: none;
    }
`;
