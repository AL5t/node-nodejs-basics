import { createReadStream, createWriteStream } from 'node:fs';
import zlib from 'node:zlib';

const decompress = async () => {
  const inputStream = createReadStream('./files/archive.gz');
  const outputStream = createWriteStream('./files/fileToCompress2.txt');
  const gunzip = zlib.createGunzip();

  inputStream
    .pipe(gunzip)
    .pipe(outputStream)
    .on('finish', () => {
        console.log('Done');
    });
};

await decompress();
