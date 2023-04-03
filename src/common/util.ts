import fs from 'fs';

export const viewText = () => {
  fs.readFile('binlist-data.csv.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};
