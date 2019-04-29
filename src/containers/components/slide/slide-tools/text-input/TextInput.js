import React, { Component } from "react";
import PropTypes from "prop-types";
import { Editor } from "slate-react";
import { inject, observer } from "mobx-react";
import { isKeyHotkey } from "is-hotkey";
import { TextInputWrapper } from "./TextInput.styles";

const isBoldHotkey = isKeyHotkey("mod+b");
const isItalicHotkey = isKeyHotkey("mod+i");
const isUnderlinedHotkey = isKeyHotkey("mod+u");
const isCodeHotkey = isKeyHotkey("mod+`");

class TextInput extends Component {
    state = {
        value: this.props.store.initialEditorData
    };

    onChange = ({ value }) => {
        this.setState({ value });
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

    renderNode = (props, editor, next) => {
        const { attributes, children, node } = props;

        switch (node.type) {
            case "block-quote":
                return <blockquote {...attributes}>{children}</blockquote>;
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

    renderMark = (props, editor, next) => {
        const { children, mark, attributes } = props;

        switch (mark.type) {
            case "bold":
                return <strong {...attributes}>{children}</strong>;
            case "code":
                return <code {...attributes}>{children}</code>;
            case "italic":
                return <em {...attributes}>{children}</em>;
            case "underlined":
                return <u {...attributes}>{children}</u>;
            default:
                return next();
        }
    };

    ref = editor => {
        this.editor = editor;
        this.props.store.updateActiveEditor(editor);
    };

    render() {
        return (
            <TextInputWrapper {...this.props}>
                <Editor
                    spellCheck
                    autoFocus
                    placeholder="Enter some rich text..."
                    ref={this.ref}
                    value={this.state.value}
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
        x: "",
        y: "0"
    }
};

TextInput.propTypes = {
    store: PropTypes.object.isRequired,
    dimensions: PropTypes.object,
    position: PropTypes.object
};

export default inject("store")(observer(TextInput));
