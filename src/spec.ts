
import { expect } from 'chai';
import { EIGHT, FIVE, FOUR, NINE, ONE, SEVEN, SIX, THREE, TWO } from './constants';
import { scanFile } from './index'
import {convertLineToNumberArray, getCorrectSliceOfLine, readFileAndReturnListOfLines, separateGroupsIntoDigits, separateLinesIntoGroupsOf4} from './helpers'
const testFile = './src/testData.txt'

describe('readFileAndReturnListOfLines', () => {
  it('should open file and return an array containing a string representation of the lines', () => {
      const actual=readFileAndReturnListOfLines(testFile)
    expect(actual.length).to.eql(4);
  });
  
  it('each line should have 27 characters', () => {
    const actual=readFileAndReturnListOfLines(testFile)
    expect(actual[0].length).to.eql(27);
    expect(actual[1].length).to.eql(27);
    expect(actual[2].length).to.eql(27);
    expect(actual[3].length).to.eql(27);
});
});

describe('separateLinesIntoGroupsOf4', () => {
    it('should return grouped lines', () => {
        const testInput = ['a','b','c','d']
        const expected = [['a','b','c','d']]
        const actual = separateLinesIntoGroupsOf4(testInput)
        expect(actual).to.eql(expected)
    })
    it('should return groups when there are many', () => {
        const testInput = ['a','b','c','d','a','b','c','d']
        const expected = [['a','b','c','d'],['a','b','c','d']]
        const actual = separateLinesIntoGroupsOf4(testInput)
        expect(actual).to.eql(expected)
    })
    it('should return empty array if lines not divisible by 4', () => {
        const testInput = ['a','b','c']
        const expected = []
        const actual = separateLinesIntoGroupsOf4(testInput)
        expect(actual).to.eql(expected)
    })
})

describe('separate groups into digits', () => {
    it('should return array of array of digit pieces', () => {
        const testInput = [
            '    _  _     _  _  _  _  _ ',
            '  | _| _||_||_ |_   ||_||_|',
            '  ||_  _|  | _||_|  ||_| _|',
            '                           ']
        const expectedFirstDigit = ONE
        const expectedLastDigit = NINE
        const actual = separateGroupsIntoDigits(testInput)
        expect(actual[0]).to.eql(expectedFirstDigit)
        expect(actual[1]).to.eql(TWO)
        expect(actual[8]).to.eql(expectedLastDigit)

    })
})
describe('getCorrectSliceOfLine', () => {
    it('should return 3 character string', () => {
        const testInput = 
            
            '  ||_  _|  | _||_|  ||_| _|'
           
        const expected = '|_ '
        
        const actual = getCorrectSliceOfLine(testInput, 1)
        expect(actual).to.eql(expected)
       

    })
})


describe('convert array of 3x3-character strings to number', () => {
    it('should return numbers for array of strings', () => {
        const testInput = [
            ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE]
        const expected = [1,2,3,4,5,6,7,8,9]
        const actual = convertLineToNumberArray(testInput)
        expect(actual).to.eql(expected)
    })
   
    //failing because code does not properly compare arrays- fix next
    it('should return numbers for array of strings', () => {
        const testInput = [
            [ 
            '   ', 
            '  |', 
            '  |', 
            '   ' ],
            [ ' _ ', ' _|', '|_ ', '   ' ],
            [ ' _ ', ' _|', ' _|', '   ' ],
            [ '   ', '|_|', '  |', '   ' ],
            [ ' _ ', '|_ ', ' _|', '   ' ],
            [ ' _ ', '|_ ', '|_|', '   ' ],
            [ ' _ ', '  |', '  |', '   ' ],
            [ ' _ ', '|_|', '|_|', '   ' ],
            [ ' _ ', '|_|', ' _|', '   ' ]
          ]
        const expected = [1,2,3,4,5,6,7,8,9]
        const actual = convertLineToNumberArray(testInput)
        expect(actual).to.eql(expected)
    })

})

//scan file is the main method
describe('scan document', () => {
    it('should read, separate each line into an array of string digits', () => {

        const actual = scanFile(testFile);
        
        const expected = [[1,2,3,4,5,6,7,8,9]]
        expect(actual).to.eql(expected)
        })
    //next steps:
        //need to change how I compare arrays- lookup number not comparing array representation of number properly
        //possible approach is converting array to string, which would be easier to compare
        //another approach is iterating through arrays to compare each item one at a time 
})





