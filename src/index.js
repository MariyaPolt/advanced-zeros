module.exports = function getZerosCount(number, base) {
  const factors = factorize(base);
  let zerosCount = 0;

  factors.forEach( factor => {
      let factorResult = 0;
      let primeBase = factor.factor;
      let devisor = primeBase;

      while ( Math.floor(number / devisor) >= 1 ) {
        factorResult += Math.floor(number / devisor);
        devisor *= primeBase;
      }

      factorResult /= factor.power;

      if (!zerosCount || factorResult < zerosCount) {
        zerosCount = factorResult;
      }
    }
  );

  return Math.floor(zerosCount);
}

function factorize(number) {
  let arr = [];
  for (let factor = 2, power = 0; factor <= number; factor++, power = 0) {
    while (number % factor === 0) {
      number /= factor;
      power++;
    }
    if (power) {
      arr.push( { factor, power } );
    }
  }
  return arr;
}
