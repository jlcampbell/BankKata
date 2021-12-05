A small WIP program for reading txt files containing string entries of numbers, and exporting their numerical representation.

Each entry is 4 lines long, and each line has 27 characters. The first 3 lines of each entry contain an account number written using pipes and underscores, and the fourth line is blank. Each account number should have 9 digits, all of which should be in the range 0-9. A normal file contains around 500 entries.

To run tests:

npm test

To run tests while making changes, be sure to 'npm start' so that the typescript can be compiled to js for the tests to run properly