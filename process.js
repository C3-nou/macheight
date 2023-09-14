function findPartsOfTheSum(listOfNumbers, totalToFind) {
  const numSet = new Set();
  const pairs = [];

  for (const iterableNumber of listOfNumbers) {
      const complement = totalToFind - iterableNumber;
      if (numSet.has(complement)) {
          pairs.push([iterableNumber, complement]);
      }
      numSet.add(iterableNumber);
  }

  return pairs;
}

module.exports = findPartsOfTheSum;