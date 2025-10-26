import fs from 'fs';

const create = async () => {
  fs.readFile('./files/fresh.txt', 'utf8', (err) => {
    if (err) {
      fs.writeFile('./files/fresh.txt', 'I am fresh and young', 'utf8', (err) => {
        if (err) throw err;
      });
    } else {
      throw new Error('FS operation failed');
    }
  });
};

await create();
