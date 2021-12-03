import * as fs from "fs";

console.log('hello');

export function readFileAndReturnListOfLines():string[] {
    const page = fs.readFileSync('./src/testData.txt').toString().split('\n');
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

 function scanFile() {
    const lines = readFileAndReturnListOfLines();
    

}



