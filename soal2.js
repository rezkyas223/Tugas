const fs = require('fs');

// Read the contents of homework.log
const logFilePath = 'homework.log';
const logContent = fs.readFileSync(logFilePath, 'utf8');

// Write the contents to log.txt
const outputFilePath = 'log.txt';
fs.writeFileSync(outputFilePath, logContent, 'utf8');

console.log('Log data has been written to log.txt');
