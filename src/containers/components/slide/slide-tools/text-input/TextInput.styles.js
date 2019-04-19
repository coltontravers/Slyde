import styled from "styled-components";

export const TextInputWrapper = styled.div.attrs({
    style: props => {
        const { position, dimensions } = props;

        return {
            width: dimensions.width,
            height: dimensions.height,
            top: position.y,
            left: position.x
        };
    }
})``;
