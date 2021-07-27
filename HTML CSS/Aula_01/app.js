var button = document.querySelector('button');
button.onclick = function() {
  var valorEmRealTexto = prompt('Digite Valor em Reais');
  var valorEmRealNumero = parseFloat (valorEmRealTexto);
  var valorEmPeso = valorEmRealNumero * 130.08;
  var valorEmPesoDecimal = valorEmPeso.toLocaleString('pt-br', {minimumFractionDigits: 2});
  alert(" Valor em Peso Chileno  : $ " + valorEmPesoDecimal)
}