import fsPromises from 'node:fs/promises';

const copy = async () => {
  try {
    await fsPromises.access('./files', fsPromises.constants.F_OK);

    const areCopiesExist =  await fsPromises.access('./files_copy', fsPromises.constants.F_OK).then(() => true).catch(() => false);
    if(areCopiesExist) {
      throw new Error('FS operation failed');
    }

    fsPromises.cp('./files', './files_copy', {recursive: true});
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();
