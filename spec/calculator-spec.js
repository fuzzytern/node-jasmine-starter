const calculator = require('../calculator');

describe('multiplication', function() {
  it('should multiply 2 and 4', function() {
    const product = calculator.multiply(2,3); 
    expect(product).toBe(6);
  });
});

describe('division', function() {
  it('should divide 4 by 2', function() {
    const quotien = calculator.divide(4,2); 
    expect(quotien).toBe(2);
  });

  it('should prevent to divide by zero', function() {
    expect(calculator.divide(5,0)).toThrow(); 
  });
});
