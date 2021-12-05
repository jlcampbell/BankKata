import * as fs from "fs";
import { NUMBERS } from "./constants";

export function readFileAndReturnListOfLines(filePath: string):string[] {
    const page = fs.readFileSync(filePath).toString().split('\n');
    return page;
}

export function separateLinesIntoGroupsOf4(lines:string[]):string[][] {
    if (lines.length%4!=0){
        return []
    }
    const numberOfGroups = lines.length/4;
    let groups:string[][] = [];
    for(let i=0; i <numberOfGroups; i++){
        groups.push(lines.splice(0,4))
    }
    return groups;
}

export function separateGroupsIntoDigits(groupOf4Lines:string[]){
    let digits:string[][]=[[],[],[],[],[],[],[],[],[]]
    groupOf4Lines.forEach(line => {
        for(let i=0; i<9; i++){
            digits[i].push(getCorrectSliceOfLine(line,i))
        }
    });
    return digits;
}

export function getCorrectSliceOfLine(line: string, index: number){
    return line.slice(3*index,3*(index+1))
}

export function convertLineToNumberArray(line: string[][]){
    const LOOKUP = generateMap();
    return line.map(item => LOOKUP.get(item))
}

export function generateMap(){
    let map = new Map()
    NUMBERS.forEach((number,idx) => map.set(number, idx))
    return map;
}