import styled from "styled-components";

export const Button = styled.button`
    padding: 1em 1em;
    display: inline-block;
    flex: 1 1 0;
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

    background: ${props => (props.active ? `silver` : "none")};
    box-shadow: ${props =>
        props.active
            ? `0 9px 0px 0px #ffffff00, 0 -9px 0px 0px #ffffff00, 1px 0 0px 0px #808080, -1px 0 0px 0px #808080;`
            : "none"};
`;
