"use strict";
exports.__esModule = true;
exports.separateLinesIntoGroupsOf4 = exports.readFileAndReturnListOfLines = void 0;
var fs = require("fs");
console.log('hello');
function readFileAndReturnListOfLines() {
    var page = fs.readFileSync('./src/testData.txt').toString().split('\n');
    return page;
}
exports.readFileAndReturnListOfLines = readFileAndReturnListOfLines;
function separateLinesIntoGroupsOf4(lines) {
    if (lines.length % 4 != 0) {
        return [];
    }
    var numberOfGroups = lines.length / 4;
    var groups = [];
    for (var i = 0; i < numberOfGroups; i++) {
        groups.push(lines.splice(0, 4));
    }
    return groups;
}
exports.separateLinesIntoGroupsOf4 = separateLinesIntoGroupsOf4;
function scanFile() {
    var lines = readFileAndReturnListOfLines();
}
