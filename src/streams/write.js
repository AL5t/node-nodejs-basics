import { createWriteStream } from 'node:fs';

const write = async () => {
  const stream = createWriteStream('./files/fileToWrite.txt');

  process.stdin.on('data', (chunk) => {
    stream.write(chunk);
  });
};

await write();
