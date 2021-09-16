exports.add = (a, b) => { return a + b; }
exports.sub = (a, b) => { return a - b; }
exports.mul = (a, b) => { return a * b; }
exports.div = (a, b) => { return a / b; }
exports.mod = (a, b) => { return a % b; }
exports.factorial = (a) => factorial(a)
exports.isPrime = (a) => estPremier(a)
exports.findPrime = (a) => trouverPremier(a)

function factorial(a) {
  if (a == 0 || a == 1) {
    return a;
  } else {
    for (var i = a - 1; i >= 1; i--) {
      a = a * i;
    }
    return a;
  }
}
function estPremier(a) {
  for (var i = 2; i < a; i++) {
    if (a % i === 0) return false;
    return a > 1;
  }
}
function trouverPremier(index) {
  let primeNumer  = 0;
  for (let i = 0; i < index; i++) {
    primeNumer++;
    while (!estPremier(primeNumer )) {
      primeNumer ++;
    }
  }
  return primeNumer ;
}

