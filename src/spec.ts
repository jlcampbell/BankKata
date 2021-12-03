
import { expect } from 'chai';
import {readFileAndReturnListOfLines, separateLinesIntoGroupsOf4} from './index'

//each digit is 3 lines by 3 characters

// const zero =
//               _  _     _  _  _  _  _
//             | _| _||_||_ |_   ||_||_|
//             ||_  _|  | _||_|  ||_| _|

describe('readFileAndReturnListOfLines', () => {
  it('should open file and return an array containing a string representation of the lines', () => {
      const actual=readFileAndReturnListOfLines()
    expect(actual.length).to.eql(4);
  });
  
  it('each line should have 27 characters', () => {
    const actual=readFileAndReturnListOfLines()
    expect(actual[0].length).to.eql(27);
    expect(actual[1].length).to.eql(27);
    expect(actual[2].length).to.eql(27);
    expect(actual[3].length).to.eql(27);
});
});

describe('separate lines into groups of 4', () => {
    it('should return groups', () => {
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

    //input: page object containing array of strings
    //number of groups should equal array/4
    //each group should have 4 strings
    //output should be array of array, each child array should have 4 strings elements
    // it('should return an array of arrays of 4 strings', () => {
    //     const actual=rea
    // }
    // )
})

describe('separate groups into digits', () => {
    //input: array of 4 line-strings, each string 27 characters long
    //separate each line-string into 9 digits [Array9]
    //combine same-index of all line-strings [[string(3), string(3), string(3)]...x9]
    //output array of digit arrays
})

describe('convert array of 3x3-character strings to number', () => {
    //lookup and compare
})

//assuming each number has 4 lines
describe('scan document', () => {
    //group into sets of lines
    
    //scandocument
    //txt => array of string lines
    //array of string lines => group into sets of lines 
    //set of lines => break into digits
    //3 characters , 3 lines => convert to number
    //output full number for each line ('group')
    //return array of all numbers in the file
})




