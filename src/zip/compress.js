import { createReadStream, createWriteStream } from 'node:fs';
import zlib from 'node:zlib';

const compress = async () => {
  const inputStream = createReadStream('./files/fileToCompress.txt');
  const outputStream = createWriteStream('./files/archive.gz');
  const gzip = zlib.createGzip();

  inputStream
    .pipe(gzip)
    .pipe(outputStream)
    .on('finish', () => {
        console.log('Done');
    });
};

await compress();
