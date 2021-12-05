import { convertLineToNumberArray, readFileAndReturnListOfLines, separateGroupsIntoDigits, separateLinesIntoGroupsOf4 } from "./helpers";


 export function scanFile(filePath: string) {
    const lines = readFileAndReturnListOfLines(filePath);
    const groupedLines = separateLinesIntoGroupsOf4(lines);
    const groupedDigits = groupedLines.map(group => separateGroupsIntoDigits(group))
    const groupedNumbers = groupedDigits.map(line => {convertLineToNumberArray(line)})
    return groupedNumbers;
}



