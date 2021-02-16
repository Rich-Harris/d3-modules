// @ts-check
import * as fs from 'fs';
import d3Dsv from 'd3-dsv';

const csv = fs.readFileSync('my-data.csv', 'utf-8');
const data = d3Dsv.csvParse(csv);

console.log(data);