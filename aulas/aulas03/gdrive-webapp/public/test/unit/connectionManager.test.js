import { describe, test, expect, jest } from "@jest/globals";

describe("#ConnectionManager", () => {
    const apiUrl = "https://localhost:3000";

    const ioClientObj = {
        on: (event, cb) => {},
        id: "socket-id",
    }

    describe("#configureEvents", () => {
        test.todo("Should configure socket events");
    });

    describe("#onConnect", () => {
        test.todo("Should set socket id");
    });

    describe("#uploadFile", () => {
        test.todo("Upload file returns with success");
        test.todo("Upload file returns with error");
    });

    describe("#currentFiles", () => {
        test.todo("Should return a list of all uploaded files");
    })
})