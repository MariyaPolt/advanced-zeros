module.exports = function getZerosCount(number, base) {
  let arr = decomposeIntoPrimeFactors(base); //array of arrays, each consists of the prime factor and its degree
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    arr[i].push( countMeetings(number, arr[i][0]) );
  }

  let min = Math.floor( arr[0][2] / arr[0][1] );
  for (let i = 1; i < len; i++) {
    if ( Math.floor( arr[i][2] / arr[i][1] ) < min ) {
      min = Math.floor( arr[i][2] / arr[i][1] );
    }
  }

  return min;
}

function decomposeIntoPrimeFactors(number) {
  let n = number;
  let arr = [];
  for (let i = 2, maxPower = 0; i <= n; i++, maxPower = 0) {
    while (n % i === 0) {
      n /= i;
      maxPower++;
    }
    arr.push([i, maxPower]);
  }
  return arr;
}

function countMeetings(number, multiplier) {
  let meetingsCount = 0;
  for (let n = multiplier; n <= number; n *= multiplier) {
    for (let i = n; i <= number; i += n) {
      meetingsCount++;
    }
  }
  return meetingsCount;
}
