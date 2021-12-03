const fs = require('fs');

function scanDocument() {
    const page = fs.readFileSync('./src/testData.txt').toString().split('\n');
    return page;
}

export default scanDocument