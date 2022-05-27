const {
  isEmpty,
  getElementAt,
  insertZeroInArray,
  isEqual,
  calculateArraySum,
  findEvenNumbers,
  findOddNumbers,
  squareNumbers,
  fizzBuzz
} = require("./index.js");

describe("isEmpty function", () => {
  test("it should return true if the array is empty ", () => {
    const input = []
    const output = true 

    expect(isEmpty(input)).toEqual(output)
  })
}) 

describe("getElementAt function", () => {
  const testCases = [
    {
      array:[1,2,3,4],
      index: 0,
      expected:1
    },
    {
      array:[1,2,3,4],
      index: 5,
      expected: null
    },
    {
      array:[1,2,3,4],
      index: -1,
      expected: null
    },
    {
      array:[1,2,3,4],
      index: 4,
      expected: null
    }
  ];

  testCases.forEach(test => {
    it("should return the value at arr[index] and null if index is greater or equal or less than 0", () => {
      const input = test.array
      expect(getElementAt(input, test.index)).toEqual(test.expected)
    })
  })
})


describe("insertZeroInArray function", () => {
  test("it  puts a 0 in element 1 of an array",()=>{
    const input = [1,2,3,4]
    const output = [1,0,2,3,4]

    expect(insertZeroInArray(input)).toEqual(output)
  })
})

describe("isEqual function", () => {
  test("it should return true when the arrays equal each other", () => {
    const arr1 = [1, '2', 3, 4]
    const arr2 = [1, '2', 3, 4]

    expect(isEqual(arr1, arr2)).toEqual(true)
  })
  test("it should return false when the arrays do not equal each other", () => {
    const arr1 = [1, 2, 3, 4]
    const arr2 = [1, '2', 3, 4]

    expect(isEqual(arr1, arr2)).toEqual(false)
  })
})

describe("calculateArraySum function", () => {
  test("It should return the sum of the array elements", () => {
    const input = [1, 2, 3, 4, 5];
    const output = 15;

    expect(calculateArraySum(input)).toEqual(output);
  });
});

describe("findEvenNumbers function", () => {
  test("It should return even numbers from array", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const output = [2, 4, 6, 8];

    expect(findEvenNumbers(input)).toEqual(output);
  });
});

describe("findOddNumbers function", () => {
  test("It should return odd numbers from array", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const output = [1, 3, 5, 7, 9];

    expect(findOddNumbers(input)).toEqual(output);
  });
});

describe("squareNumbers function", () => {
  test("It should square the elements of the array and return a new array with the squared elements", () => {
    const input = [1, 2, 3, 4, 5];
    const output = [1, 4, 9, 16, 25];

    expect(squareNumbers(input)).toEqual(output);
  });
});

describe("Testing return value of fizzBuzz function", () => {
  test("fizzBuzz function", () => {
    const expected = [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz', 'Buzz'];
    expect(fizzBuzz(0,10)).toEqual(expected); 
  })
})
