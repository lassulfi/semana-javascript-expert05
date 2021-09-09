import { describe, test, expect, jest } from "@jest/globals";
import fs from 'fs';
import FileHelper from "../../src/fileHelper.js";

describe("#FileHelper Test Suite", () => {
  describe("#getFileStatus", () => {
    test("it should return files statuses in correct format", async () => {
      const statMock = {
        dev: 2064,
        mode: 33188,
        nlink: 1,
        uid: 1000,
        gid: 1000,
        rdev: 0,
        blksize: 4096,
        ino: 772217,
        size: 1228674,
        blocks: 2400,
        atimeMs: 1631036700059.2815,
        mtimeMs: 1631036699519.2815,
        ctimeMs: 1631036699519.2815,
        birthtimeMs: 1631036699379.2815,
        atime: "2021-09-07T17:45:00.059Z",
        mtime: "2021-09-07T17:44:59.519Z",
        ctime: "2021-09-07T17:44:59.519Z",
        birthtime: "2021-09-07T17:44:59.379Z",
      };

      const mockUser = 'lassulfi';
      process.env.USER = mockUser;

      const filename = 'file.png';

      jest.spyOn(fs.promises, fs.promises.readdir.name)
        .mockResolvedValue([filename]);

      jest.spyOn(fs.promises, fs.promises.stat.name)
        .mockResolvedValue(statMock);

      const result = await FileHelper.getFilesStatus('/tmp');
      const expectedResult = [
        {
          size: "1.23 MB",
          lastModified: statMock.birthtime,
          owner: mockUser,
          file: filename,
        },
      ];

      expect(fs.promises.stat).toHaveBeenCalledWith(`/tmp/${filename}`);
      expect(result).toMatchObject(expectedResult);
    });
  });
});
