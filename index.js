const readline = require('readline');
const findPartsOfTheSum = require("./process");

const ReadTerminalLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

ReadTerminalLine.question('Enter a list of numbers separated by commas: ', (inputStr) => {
  ReadTerminalLine.question('Enter the target value: ', (targetSum) => {
      const sourceNumbers = inputStr.split(",").map(Number);
      const result = findPartsOfTheSum(sourceNumbers, parseInt(targetSum));

      console.log("Pairs that add up to the target value:");
      for (const par of result) {
          console.log(`+ ${par[0]},${par[1]}`);
      }
      ReadTerminalLine.close();
  });
});