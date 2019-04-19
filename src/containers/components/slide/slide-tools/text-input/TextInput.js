import React, { Component } from "react";
import PropTypes from "prop-types";
import { Editor } from "slate-react";
import { decorate, observable, configure, action } from "mobx";
import { inject, observer } from "mobx-react";
import { isKeyHotkey } from "is-hotkey";
import TextToolbar from "../text-toolbar/TextToolbar";
import { TextInputWrapper } from "./TextInput.styles";

const isBoldHotkey = isKeyHotkey("mod+b");
const isItalicHotkey = isKeyHotkey("mod+i");
const isUnderlinedHotkey = isKeyHotkey("mod+u");
const isCodeHotkey = isKeyHotkey("mod+`");

class TextInput extends Component {
    state = {
        value: this.props.store.initialEditorData
    };

    componentDidMount() {
        // Set the position and size of the element here.
        // Also init the editor on it.
        // Not sure if I should just init one editor for all elements, or if I should init for all.
    }

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
        console.log("SETTING THE REF TO:", editor, this.props);
        this.props.store.updateActiveEditor(editor);
    };

    render() {
        const { content } = this.props;
        return (
            <TextInputWrapper {...this.props}>
                {/* <TextToolbar value={initialValue} editor={this.editor} /> */}
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

TextInput.propTypes = {
    content: PropTypes.object.isRequired
};

export default inject("store")(observer(TextInput));
