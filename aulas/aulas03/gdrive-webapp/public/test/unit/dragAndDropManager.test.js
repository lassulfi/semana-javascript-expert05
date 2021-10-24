import { describe, test, expect, jest, beforeEach } from "@jest/globals";

describe("#DragAndDropManager", () => {
    const elementObj = {innerHtml: '', value: '', onclick: jest.fn};
    beforeEach(() => {
        jest.spyOn(document, document.getElementById.name).mockReturnValue(elementObj);
    });

    describe("#initialize", () => {
        test.todo("Should initialize the drag and drop element");
    });

    describe("#disableDragAndDropEvents", () => {
        test.todo("Should disable drag and drop events from element");
    });

    describe("#enableHighlightOnDrag", () => {
        test.todo("Should enable highlight on drag");
    });

    describe("#enableDrop", () => {
        test.todo("Should enable drop event to drop area");
    })
})