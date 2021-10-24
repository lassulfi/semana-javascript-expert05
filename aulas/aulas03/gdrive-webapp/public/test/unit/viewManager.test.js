import { describe, test, expect, jest, beforeEach } from "@jest/globals";

describe("#ViewManager", () => {
    const elementObj = {innerHtml: '', value: '', onclick: jest.fn};
    beforeEach(() => {
        jest.spyOn(document, document.getElementById.name).mockReturnValue(elementObj);
    });

    describe("#configureModal", () => {
        test.todo("Should configure modal with initial properties");
    });

    describe("#openModal", () => {
        test.todo("Should open the modal in view");
    });

    describe("closeModal", () => {
        test.todo("Should close the modal in view");
    });

    describe("#updateStatus", () => {
        test.todo("Should update the upload status in the progress bar");
    });

    describe("#configureOnFileChange", () => {
        test.todo("Should configure a onFileChange function to a file element");
    });

    describe("#configureFileBtnClick", () => {
        test.todo("Should configure the button click on a file element");
    });

    describe("#getIcon", () => {
        test.todo("Should return movie icon");
        test.todo("Should return image icon");
        test.todo("Should return content_copy icon");
    });

    describe("#makeIcon", () => {
        test.todo("Should return an icon");
    });

    describe("#updateCurrentFiles", () => {
        test.todo("Should update the list of current files");
    })
});