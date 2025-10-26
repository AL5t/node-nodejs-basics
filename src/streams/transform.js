import { Transform } from 'node:stream';

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk) {
      const reversed = chunk.toString().split('').reverse().join('');
      this.push(reversed);
    }
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
