const functions= require('./functions.js');
//const { returnTwo, add, greeting }= require('./functions.js');

test('returnTwo() should be 2', ()=> {
  expect(functions.returnTwo()).toBe(2);
});

test('returnTwo() should equal 2', ()=> {
  expect(functions.returnTwo()).toEqual(2);
});

test('greeting() should return personal greeting', ()=> {
  expect(functions.greeting(name)).toBe(`Hello, ${ name }.`);
});

describe('Math Functions: ', ()=> {
  test('add() should return a dynamic sum based on the two numbers inputted', ()=> {
    expect(functions.add(1, 2)).toEqual(3);
    expect(functions.add(5,9)).toEqual(14);
  });

  test('subtract() should return a dynamic value based on the two numbers inputted', ()=> {
    expect(functions.subtract(2, 1)).toEqual(1);
    expect(functions.subtract(9,5)).toEqual(4);
  });

  test('multiply() should return a dynamic product based on the two numbers inputted', ()=> {
    expect(functions.multiply(1, 2)).toEqual(2);
    expect(functions.multiply(5,9)).toEqual(45);
  });

  test('divide() should return a dynamic value based on the two numbers inputted', ()=> {
    expect(functions.divide(4, 2)).toEqual(2);
    expect(functions.divide(81,9)).toEqual(9);
  });
});
