"use strict";
exports.__esModule = true;
exports.generateMap = exports.convertLineToNumberArray = exports.getCorrectSliceOfLine = exports.separateGroupsIntoDigits = exports.separateLinesIntoGroupsOf4 = exports.readFileAndReturnListOfLines = void 0;
var fs = require("fs");
var constants_1 = require("./constants");
function readFileAndReturnListOfLines(filePath) {
    var page = fs.readFileSync(filePath).toString().split('\n');
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
function separateGroupsIntoDigits(groupOf4Lines) {
    var digits = [[], [], [], [], [], [], [], [], []];
    groupOf4Lines.forEach(function (line) {
        for (var i = 0; i < 9; i++) {
            digits[i].push(getCorrectSliceOfLine(line, i));
        }
    });
    return digits;
}
exports.separateGroupsIntoDigits = separateGroupsIntoDigits;
function getCorrectSliceOfLine(line, index) {
    return line.slice(3 * index, 3 * (index + 1));
}
exports.getCorrectSliceOfLine = getCorrectSliceOfLine;
function convertLineToNumberArray(line) {
    var LOOKUP = generateMap();
    return line.map(function (item) { return LOOKUP.get(item); });
}
exports.convertLineToNumberArray = convertLineToNumberArray;
function generateMap() {
    var map = new Map();
    constants_1.NUMBERS.forEach(function (number, idx) { return map.set(number, idx); });
    return map;
}
exports.generateMap = generateMap;
