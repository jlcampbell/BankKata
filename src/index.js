"use strict";
exports.__esModule = true;
exports.scanFile = void 0;
var helpers_1 = require("./helpers");
function scanFile(filePath) {
    var lines = (0, helpers_1.readFileAndReturnListOfLines)(filePath);
    var groupedLines = (0, helpers_1.separateLinesIntoGroupsOf4)(lines);
    var groupedDigits = groupedLines.map(function (group) { return (0, helpers_1.separateGroupsIntoDigits)(group); });
    var groupedNumbers = groupedDigits.map(function (line) { (0, helpers_1.convertLineToNumberArray)(line); });
    return groupedNumbers;
}
exports.scanFile = scanFile;
