import { createReadStream } from 'node:fs';
const { createHash } = await import('node:crypto');

const calculateHash = async () => {
  const hash = createHash('sha256');
  const input = createReadStream('./files/fileToCalculateHashFor.txt');

  input.on('readable', () => {
    const data = input.read();
    if (data)
      hash.update(data);
    else {
      console.log(`Hash: ${hash.digest('hex')}`);
    }
  });

  input.on('error', (err) => {
    console.error('Error reading the file:', err);
  });
};

await calculateHash();
