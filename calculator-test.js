
describe ("monthly payment calc test", function(){
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({amount: 600000, years: 30, rate: 0.4,})).toEqual("1768.94");

}) 

  it('should throw error when empty value', function(){
    expect(function(){calculateMonthlyPayment({amount: 600000, years: '', rate: 0.5,})}).toThrowError()
  }
)});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 100000, years: 20, rate: 0.4,}).charAt((calculateMonthlyPayment({amount: 100000, years: 20, rate: 0.4,}).length)- 3)).toEqual(".")
  // ..
});

/// etc
