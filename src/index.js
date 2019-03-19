module.exports = function getZerosCount(number, base) {
  let zeros = 0;
  let basek = base;
  let basearr=[];
  let simple = new Array(2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241);
  
  for (i = 2; i <= base; i++) {
    if (base % i == 0) {
      for (p = 0; p <= simple.length; p++) {
        if (i == simple[p]) {
          basearr.push(i);
        }
      }
    } 
  }

  let zeropos = 1000000000000;
  for (j = basearr.length - 1; j >= 0; j--) {
    let a = basearr[j];
    for (n = 1; Math.floor(number/Math.pow(a,n)) > 0; n++) {
      zeros += Math.floor(number/Math.pow(a,n));
    }

    let counter = 0;
    do {
      counter++;
      basek = basek / a;
    } while (basek % a == 0);
    
    zeros = Math.floor(zeros / counter);

    if (zeros < zeropos) {
      zeropos = zeros;
    }
  }

  return zeropos;
}