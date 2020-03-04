function init(){

  var resultado = document.getElementById('resultado');
  var reset = document.getElementById('reset');
  var sumar = document.getElementById('sumar');
  var restar = document.getElementById('restar');
  var multiplicar = document.getElementById('multiplicar');
  var dividir = document.getElementById('dividir');
  var igual = document.getElementById('igual');
  var uno = document.getElementById('uno');
  var dos = document.getElementById('dos');
  var tres = document.getElementById('tres');
  var cuatro = document.getElementById('cuatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var siete = document.getElementById('siete');
  var ocho = document.getElementById('ocho');
  var nueve = document.getElementById('nueve');
  var cero = document.getElementById('cero');
  var doble_cero = document.getElementById('doble_cero');

}

  //funcionalidad de botones
  uno.onclick = function(e){
    resultado.TextContent = resultado.TextContent + "1"
  }
