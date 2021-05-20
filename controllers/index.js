const prime = require('../services');

let primeResult = (number) => {
    let init = 1;
    let arrayNumber = [1];

    if (/^[a-z]+$/i.test(number)) {
        return {error: 500, description: 'Error con el valor ingresado, el valor tiene que ser numerico'};
    }
    
    try {
        for (; init < number; init++) {
            if (prime.numberPrime(init)) {
                arrayNumber.push(init);
            }
        }
        arrayNumber.reverse();
        return arrayNumber;
    } catch (error) {
        return error;
    }
}

exports.primeResult = primeResult;
