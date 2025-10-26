import fsPromises from 'node:fs/promises';

const rename = async () => {
  try {
    await fsPromises.access('./files/wrongFilename.txt', fsPromises.constants.F_OK);

    const isNewFolderExist = await fsPromises.access('./files/properFilename.md', fsPromises.constants.F_OK).then(() => true).catch(() => false);
    if(isNewFolderExist) {
      throw new Error('FS operation failed');
    }

    fsPromises.rename('./files/wrongFilename.txt', './files/properFilename.md');
    
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await rename();
