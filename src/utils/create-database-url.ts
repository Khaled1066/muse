import {join} from 'path';

export const createDatabasePath = (directory: string) => join(directory, 'db.sqlite');

const createDatabaseUrl = (directory: string) => {
  const url = `file:${createDatabasePath(directory)}`;

  if (process.platform === 'win32') {
    return url.replaceAll(/\\/g, '\\\\');
  }

  return url;
};

export default createDatabaseUrl;
