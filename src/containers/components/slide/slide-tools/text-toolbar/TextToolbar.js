import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBold,
    faItalic,
    faUnderline,
    faCode,
    faQuoteRight,
    faList,
    faListOl
} from "@fortawesome/free-solid-svg-icons";
import TextToolbarButton from "./text-toolbar-button/TextToolbarButton";
import { Wrapper } from "./TextToolbar.styles";

const DEFAULT_NODE = "paragraph";

const textToolbarButtons = [
    {
        type: "bold",
        icon: faBold,
        button: "mark"
    },
    {
        type: "italic",
        icon: faItalic,
        button: "mark"
    },
    {
        type: "underlined",
        icon: faUnderline,
        button: "mark"
    },
    {
        type: "code",
        icon: faCode,
        button: "mark"
    },
    {
        type: "block-quote",
        icon: faQuoteRight,
        button: "block"
    },
    {
        type: "numbered-list",
        icon: faListOl,
        button: "block"
    },
    {
        type: "bulleted-list",
        icon: faList,
        button: "block"
    }
];

class TextToolbar extends Component {
    hasMark = type => {
        const { value } = this.props;
        return value.activeMarks.some(mark => mark.type === type);
    };

    hasBlock = type => {
        const { value } = this.props;
        return value.blocks.some(node => node.type === type);
    };

    renderMarkButton = (type, icon) => {
        const isActive = this.hasMark(type);

        return (
            <TextToolbarButton
                onMouseDown={event => this.onClickMark(event, type)}
                active={isActive}
                key={type}
            >
                <FontAwesomeIcon icon={icon} />
            </TextToolbarButton>
        );
    };

    renderBlockButton = (type, icon) => {
        let isActive = this.hasBlock(type);

        if (["numbered-list", "bulleted-list"].includes(type)) {
            const {
                value: { document, blocks }
            } = this.props;

            if (blocks.size > 0) {
                const parent = document.getParent(blocks.first().key);
                isActive =
                    this.hasBlock("list-item") &&
                    parent &&
                    parent.type === type;
            }
        }

        return (
            <TextToolbarButton
                onMouseDown={event => this.onClickBlock(event, type)}
                active={isActive}
                key={type}
            >
                <FontAwesomeIcon icon={icon} />
            </TextToolbarButton>
        );
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

    onClickMark = (event, type) => {
        event.preventDefault();
        this.props.store.activeEditor.toggleMark(type);
    };

    onClickBlock = (event, type) => {
        event.preventDefault();

        const { activeEditor } = this.props.store;
        const { value } = activeEditor;
        const { document } = value;

        // Handle everything but list buttons.
        if (type !== "bulleted-list" && type !== "numbered-list") {
            const isActive = this.hasBlock(type);
            const isList = this.hasBlock("list-item");

            if (isList) {
                activeEditor
                    .setBlocks(isActive ? DEFAULT_NODE : type)
                    .unwrapBlock("bulleted-list")
                    .unwrapBlock("numbered-list");
            } else {
                activeEditor.setBlocks(isActive ? DEFAULT_NODE : type);
            }
        } else {
            // Handle the extra wrapping required for list buttons.
            const isList = this.hasBlock("list-item");
            const isType = value.blocks.some(block => {
                return !!document.getClosest(
                    block.key,
                    parent => parent.type === type
                );
            });

            if (isList && isType) {
                activeEditor
                    .setBlocks(DEFAULT_NODE)
                    .unwrapBlock("bulleted-list")
                    .unwrapBlock("numbered-list");
            } else if (isList) {
                activeEditor
                    .unwrapBlock(
                        type === "bulleted-list"
                            ? "numbered-list"
                            : "bulleted-list"
                    )
                    .wrapBlock(type);
            } else {
                activeEditor.setBlocks("list-item").wrapBlock(type);
            }
        }
    };

    render() {
        return (
            <Wrapper>
                {textToolbarButtons.map(button => {
                    if (button.button === "mark") {
                        return this.renderMarkButton(button.type, button.icon);
                    }

                    return this.renderBlockButton(button.type, button.icon);
                })}
            </Wrapper>
        );
    }
}

TextToolbar.propTypes = {
    store: PropTypes.object.isRequired,
    value: PropTypes.object.isRequired,
    activeEditor: PropTypes.object.isRequired
};

export default inject("store")(observer(TextToolbar));