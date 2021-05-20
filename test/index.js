const service = require('../services');

describe("numberPrime", function() {
  it("Numeros primos entre 10 a 1", function() {
    let init = 1;
    let arrayNumber = [1];
    let number = 10;

    for (; init < number; init++) {
        if (service.numberPrime(init)) {
            arrayNumber.push(init);
        }
    }
    arrayNumber.reverse();
    console.log({ result: arrayNumber });
  });
});