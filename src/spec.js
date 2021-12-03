import { expect } from 'chai';
import scanDocument from './index'

//each digit is 3 lines by 3 characters

// const zero =
//               _  _     _  _  _  _  _
//             | _| _||_||_ |_   ||_||_|
//             ||_  _|  | _||_|  ||_| _|

describe('scanDocument', () => {
  it('should open file and return an array containing a string representation of the lines', () => {
      const actual=scanDocument()
    expect(actual.length).to.eql(4);
  });
  it('each line should have 27 characters', () => {
    const actual=scanDocument()
    expect(actual[0].length).to.eql(27);
    expect(actual[1].length).to.eql(27);
    expect(actual[2].length).to.eql(27);
    expect(actual[3].length).to.eql(27);
});

  
});