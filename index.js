"use strict"
function calculate() {
  let amount = parseFloat(document.getElementById("amount").value);
  let select1 = document.getElementById("select1");
  let select2 = document.getElementById("select2");
  let result = document.getElementById("result");
  let rates = {
    USD : {
        USD: 1,
        EUR: 0.88,
        UA: 24.85,
    },
    EUR : {
        EUR : 1,
        USD : 1.13,
        UA : 27.52,
    },
    UA : {
      EUR : 0.036,
      UA :  1,
      USD : 0.04,
    }
}

if(rates[select1.value] && rates[select1.value][select2.value]){
    result.value = amount * rates[select1.value][select2.value];
}

}