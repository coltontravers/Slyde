import React, { Component } from "react";
import Tools from "./tools/tools";
import { Wrapper } from "./Toolbar.styles";

class Toolbar extends Component {
    render() {
        return (
            <Wrapper>
                {Object.keys(Tools).map(index => {
                    const Tool = Tools[index];
                    return <Tool key={index} />;
                })}
            </Wrapper>
        );
    }
}

export default Toolbar;
