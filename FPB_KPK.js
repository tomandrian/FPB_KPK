function fpb(angka1, angka2) {
  
  var hasil = 0;
  for(var i = 1; i < angka1; i ++){
    if(angka1 % i === 0 && angka2 % i === 0) { 
      hasil = i;
    }
  }
  return hasil;
}

function kpk(num1, num2) {
  var arr1 = []
  var arr2 = []
  var checker = []
  for (var i = 1; i< num1*num2; i++) {
    if ((num1 * i) % num1 === 0 ) {
      arr1.push(num1*i)
    }
    if ((num2 * i) % num2 === 0) {
      arr2.push(num2*i)
    }
  }

  for (var j = 0; j<arr1.length; j++) {
    var isThere = arr2.indexOf(arr1[j]) 
    if (isThere !== -1) {
      checker.push(arr2[isThere])
    }
  }
  
  return checker[0]
}


console.log(fpb(20,10))
console.log(kpk(20,10))