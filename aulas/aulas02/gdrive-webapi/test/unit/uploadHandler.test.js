import { describe, test, expect, jest } from "@jest/globals";
import fs from 'fs';
import FileHelper from "../../src/fileHelper.js";
import UploadHandler from "../../src/uploadHandler.js";
import TestUtil from "../_util/testUtil.js";

describe("#UploadHandler Test Suite", () => {
    const ioObj = {
        to: (id) => ioObj,
        emit: (event, message) => {},
      };

    describe('#registerEvents', () => {
        test('should call onFile and onFinish functions on Busboy instance', () => {
            const uploadHandler = new UploadHandler({
                io: ioObj,
                socketId: '01'
            });

            jest.spyOn(uploadHandler, uploadHandler.onFile.name)
                .mockResolvedValue();

            const headers = {
                'content-type': 'multipart/form-data; boundary='
            };

            const onFinish = jest.fn();

            const busboyInstance = uploadHandler.registerEvents(headers, fn);

            const fileStream = TestUtil.generateReadableStream(['chunk', 'of', 'data']);
            busboyInstance.emit('file', 'fieldName', fileStream, 'filename.txt');

            expect(uploadHandler.onFile).toHaveBeenCalled();
            expect(onFinish).toHaveBeenCalled();
        });
    });
});