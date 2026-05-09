import fs from 'fs';

export function loadTestData(filePath) {
    return JSON.parse(fs.readFileSync(filePath))
}