// This whole file will need to be refactored.

import { inject, observer } from "mobx-react";
import { Selection, Mark } from "slate";
import PropTypes from "prop-types";
import React, { Component } from "react";
import {
    faBold,
    faItalic,
    faUnderline,
    faCode,
    faQuoteRight,
    faList,
    faListOl,
    faUndo,
    faRedo
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextToolbarButton from "./text-toolbar-button/TextToolbarButton";
import TextToolbarFontSize from "./text-toolbar-font-size/TextToolbarFontSize";
import TextToolbarFontFamily from "./text-toolbar-font-family/TextToolbarFontFamily";
import { Wrapper, PrimaryFormatButtons } from "./TextToolbar.styles";

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
    hasBlock = type => {
        const { editorValue } = this.props;

        return editorValue.blocks.some(node => node.type === type);
    };

    hasMark = type => {
        const { editorValue } = this.props;
        return editorValue.activeMarks.some(mark => mark.type === type);
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

    onSelectFontFamily = selectedOption => {
        const {
            store: { activeEditor }
        } = this.props;

        // Get the current font size mark from the selection.
        const filtered = activeEditor.value.document
            .getActiveMarksAtRange(activeEditor.value.selection)
            .toJSON()
            .find(element => {
                return element.type === "font-family";
            });

        activeEditor.replaceMark(filtered, {
            type: "font-family",
            data: { fontFamily: selectedOption.value }
        });
    };

    onSelectFontSize = selectedOption => {
        const {
            store: { activeEditor }
        } = this.props;

        // Get the current font size mark from the selection.
        const filtered = activeEditor.value.document
            .getActiveMarksAtRange(activeEditor.value.selection)
            .toJSON()
            .find(element => {
                return element.type === "font-size";
            });

        activeEditor.replaceMark(filtered, {
            type: "font-size",
            data: { fontSize: selectedOption.value }
        });
    };

    onClickMark = (event, type) => {
        event.preventDefault();
        this.props.store.activeEditor.toggleMark(type);
    };

    onClickRedo = event => {
        event.preventDefault();
        this.props.store.activeEditor.redo();
    };

    onClickUndo = event => {
        event.preventDefault();
        this.props.store.activeEditor.undo();
    };

    renderBlockButton = (type, icon) => {
        let isActive = this.hasBlock(type);

        if (["numbered-list", "bulleted-list"].includes(type)) {
            const {
                editorValue: { document, blocks }
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

    getActiveFontSizeMark = activeEditor => {
        let mark;
        if (activeEditor) {
            mark = activeEditor.value.document
                .getActiveMarksAtRange(activeEditor.value.selection)
                .toJSON()
                .find(element => {
                    return element.type === "font-size";
                });

            if (mark) {
                mark = mark.toJSON();
            }
        }

        return mark;
    };

    getActiveFontFamilyMark = activeEditor => {
        let mark;
        if (activeEditor) {
            mark = activeEditor.value.document
                .getActiveMarksAtRange(activeEditor.value.selection)
                .toJSON()
                .find(element => {
                    return element.type === "font-family";
                });

            if (mark) {
                mark = mark.toJSON();
            }
        }

        return mark;
    };

    render() {
        return (
            <Wrapper>
                <PrimaryFormatButtons>
                    {textToolbarButtons.map(button => {
                        if (button.button === "mark") {
                            return this.renderMarkButton(
                                button.type,
                                button.icon
                            );
                        }

                        return this.renderBlockButton(button.type, button.icon);
                    })}

                    <TextToolbarButton
                        onMouseDown={event => this.onClickUndo(event)}
                    >
                        <FontAwesomeIcon icon={faUndo} />
                    </TextToolbarButton>

                    <TextToolbarButton
                        onMouseDown={event => this.onClickRedo(event)}
                    >
                        <FontAwesomeIcon icon={faRedo} />
                    </TextToolbarButton>

                    <TextToolbarFontSize
                        onSelection={event => this.onSelectFontSize(event)}
                        mark={this.getActiveFontSizeMark(
                            this.props.store.activeEditor
                        )}
                    />

                    {/* <TextToolbarFontFamily
                        onSelection={event => this.onSelectFontFamily(event)}
                        mark={this.getActiveFontFamilyMark(
                            this.props.store.activeEditor
                        )}
                    /> */}
                </PrimaryFormatButtons>
            </Wrapper>
        );
    }
}

TextToolbar.defaultProps = {
    editorValue: null
};

TextToolbar.propTypes = {
    store: PropTypes.object.isRequired,
    editorValue: PropTypes.object
};

export default inject("store")(observer(TextToolbar));
