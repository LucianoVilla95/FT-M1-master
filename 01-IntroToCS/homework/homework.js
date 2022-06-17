'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
let resultado = 0;
for(let i = 0; i < num.length; i++) {
  resultado = resultado + num[i] * Math.pow(2, num.length-1-i);
}
return resultado;
}

function DecimalABinario(num) {
  // tu codigo aca
let resultado = "";
while(num > 0) {
  let resto = num % 2;
  resultado = resto + resultado;
  num = Math.floor(num / 2);
}
return resultado;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}