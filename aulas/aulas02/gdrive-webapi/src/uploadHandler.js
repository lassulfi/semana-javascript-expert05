import Busboy from 'busboy';
import { pipeline } from 'stream/promises';
import fs from 'fs';
import { logger } from './logger';

export default class UploadHandler {
    constructor({ io, socketId, downloadsFolder }) {
        this.io = io;
        this.socketId = socketId;
        this.downloadsFolder = downloadsFolder;
    }

    handleFileBytes() { }

    async onFile(fieldName, file, filename) {
        const saveTo = `${this.downloadsFolder}/${filename}`;
        await pipeline(
            // 1. get a readable stream
            file,
            // 2. filter, convert and transform data
            this.handleFileBytes.apply(this, [filename]),
            // 3. Return a writeable stream at the end of the process
            fs.createWriteStream(saveTo),
        );
        logger.info(`File [${filename}] finished`);
    }

    registerEvents(headers, onFinish) {
        const busboy = new Busboy({ headers });

        busboy.on('file', this.onFile.bind(this));
        busboy.on('finish', onFinish);

        return busboy;
    }
}