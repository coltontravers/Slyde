import { isKeyHotkey } from "is-hotkey";
import { inject, observer } from "mobx-react";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Editor } from "slate-react";
import RichText from "../rich-text/RichText";
import { TextInputWrapper } from "./TextInput.styles";

const isBoldHotkey = isKeyHotkey("mod+b");
const isCodeHotkey = isKeyHotkey("mod+`");
const isItalicHotkey = isKeyHotkey("mod+i");
const isUnderlinedHotkey = isKeyHotkey("mod+u");

const { FontFamily, FontSize, BlockQuote, CodeBlock } = RichText;

class TextInput extends Component {
    onChange = ({ value }) => {
        const { updateSlideText, activePage } = this.props.store;
        updateSlideText(activePage, value);
    };

    // eslint-disable-next-line
    onKeyDown = (event, editor, next) => {
        let mark;

        if (isBoldHotkey(event)) {
            mark = "bold";
        } else if (isItalicHotkey(event)) {
            mark = "italic";
        } else if (isUnderlinedHotkey(event)) {
            mark = "underlined";
        } else if (isCodeHotkey(event)) {
            mark = "code";
        } else {
            return next();
        }

        event.preventDefault();
        editor.toggleMark(mark);
    };

    ref = editor => {
        this.editor = editor;
        const { fullSlide } = this.props;

        if (fullSlide) {
            this.props.store.updateActiveEditor(editor);
        }
    };

    renderMark = (props, editor, next) => {
        const { children, mark, attributes } = props;

        switch (mark.type) {
            case "font-family":
                return <FontFamily {...props}>{children}</FontFamily>;
            case "font-size":
                return <FontSize {...props}>{children}</FontSize>;
            case "bold":
                return <strong {...attributes}>{children}</strong>;
            case "code":
                return <CodeBlock {...attributes}>{children}</CodeBlock>;
            case "italic":
                return <em {...attributes}>{children}</em>;
            case "underlined":
                return <u {...attributes}>{children}</u>;
            default:
                return next();
        }
    };

    renderNode = (props, editor, next) => {
        const { attributes, children, node } = props;

        switch (node.type) {
            case "paragraph":
                return (
                    <div {...props} style={{ fontSize: "25px" }}>
                        {children}
                    </div>
                );
            case "block-quote":
                return <BlockQuote {...attributes}>{children}</BlockQuote>;
            case "bulleted-list":
                return <ul {...attributes}>{children}</ul>;
            case "heading-one":
                return <h1 {...attributes}>{children}</h1>;
            case "heading-two":
                return <h2 {...attributes}>{children}</h2>;
            case "list-item":
                return <li {...attributes}>{children}</li>;
            case "numbered-list":
                return <ol {...attributes}>{children}</ol>;
            default:
                return next();
        }
    };

    render() {
        return (
            <TextInputWrapper {...this.props}>
                <Editor
                    spellCheck
                    autoFocus
                    placeholder="Enter some rich text..."
                    ref={this.ref}
                    value={this.props.editorValue}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                    renderNode={this.renderNode}
                    renderMark={this.renderMark}
                />
            </TextInputWrapper>
        );
    }
}

TextInput.defaultProps = {
    dimensions: {
        width: "100%",
        height: "100%"
    },
    position: {
        x: "0px",
        y: "0px"
    },
    fullSlide: false,
    editorValue: null
};

TextInput.propTypes = {
    store: PropTypes.object.isRequired,
    editorValue: PropTypes.object,
    dimensions: PropTypes.object,
    position: PropTypes.object,
    fullSlide: PropTypes.bool
};

export default inject("store")(observer(TextInput));
