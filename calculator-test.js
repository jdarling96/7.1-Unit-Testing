
it('should calculate the monthly rate correctly', function () {
  values = {amount: 10000, years: 5, rate: 5};
  expect(calculateMonthlyPayment(values)).toEqual('188.71')
  // ...
});


it("should return a result with 2 decimal places", function() {
  values = {amount:10000, years:5, rate:5.5};
  expect(calculateMonthlyPayment(values)).toEqual('191.01')
  // ..
});

it("should return the value as a string", function() {
  values = {amount:10000, years:5, rate:5.5};
  expect(typeof(calculateMonthlyPayment(values))).toBe('string')



});
/// etc
