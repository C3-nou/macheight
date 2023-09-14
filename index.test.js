const findPartsOfTheSum = require("./process")

test('You should find the pairs that add up to 12', () => {
    const sourceNumbers = [1, 9, 5, 0, 20, -4, 12, 16, 7];
    const targetValue = 12;
    const result = findPartsOfTheSum(sourceNumbers, targetValue);
    const expectedComplements = [[12, 0], [16, -4], [7, 5]];
    expect(result.length).toEqual(3);
    expect(result).toEqual(expect.arrayContaining(expectedComplements));
});

test('Should find no pair if there are no matches', () => {
    const sourceNumbers = [1, 2, 3, 4, 5];
    const targetValue = 20;
    const result = findPartsOfTheSum(sourceNumbers, targetValue);
    expect(result).toEqual([]);
});
