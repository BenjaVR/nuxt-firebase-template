import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFile, writeFile } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = path.join(
  __dirname,
  '.output',
  'server',
  'chunks',
  'nitro',
  'firebase.mjs'
);

readFile(file, 'utf8', function (err, data) {
  if (err) {
    return console.error(err);
  }
  const result = data.replace(
    /functions.https.onRequest/g,
    'functions.region("europe-west1").https.onRequest'
  );

  writeFile(file, result, 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
  });
});
