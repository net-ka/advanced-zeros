module.exports = function getZerosCount(number, base) {

    let zeros = 0;
    let basek = base;
    for (i = 2; i < base; i++) {
      if (basek % i == 0) {
        let k = 1;
        while (base % Math.pow(i*k) == 0) {
          k++;
          basek = base / Math.pow(i*k);
        }  
      }
    }

    for(n = 1; Math.floor(number/Math.pow(i,n)) > 0; n++) {
      zeros += Math.floor(number/Math.pow(i,n));
    }
    return zeros;
  }

  