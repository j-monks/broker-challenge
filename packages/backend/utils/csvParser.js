import fs from 'fs';
import csv from 'csv-parser';
import _ from 'lodash';

export async function parseCSV(file) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(file.path)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        const camelCaseResults = results.map(obj =>
          _.mapKeys(obj, (value, key) => _.camelCase(key))
        );
        resolve(camelCaseResults);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}
