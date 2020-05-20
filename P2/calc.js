var numero1;
var numero2;
var operacion;

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
    resultado.textContent = resultado.textContent + "1"
}
  dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2"
}
  tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3"
}
  cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4"
}
  cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5"
}
  seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6"
}
  siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7"
}
  ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8"
}
  nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9"
}
  cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0"
}
  doble_cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "00"
}
  reset.onclick = function(e){
    resetear();
}
  sumar.onclick = function(e){
    numero1 = resultado.textContent;
    operacion = "+";
    clean();
}
  sumar.onclick = function(e){
  numero1 = resultado.textContent;
  operacion = "+";
  clean();
}
  restar.onclick = function(e){
    numero1 = resultado.textContent;
    operacion = "-";
    clean();
}
  multiplicar.onclick = function(e){
    numero1 = resultado.textContent;
    operacion = "*";
    clean();
}
  dividir.onclick = function(e){
    numero1 = resultado.textContent;
    operacion = "/";
    clean();
}
  igual.onclick = function(e){
    numero2 = resultado.textContent;
    operacion = "=";
    resolver();
  }
function limpiar(){
  resultado.textContent = "";
  numero1 = 0;
  numero2 = 0;
  operacion = "" ;

}
function resolver(){
  var aux = 0;
    switch (operacion) {
      case "+":
        aux = parseFloat(numero1) + parseFloat(numero2)
        break;
      case "-":
        aux = parseFloat(numero1) - parseFloat(numero2)
        break
      case "*"
        aux = parseFloat(numero1) * parseFloat(numero2)
        break
      case "/":
        aux = parseFloat(numero1) / parseFloat(numero2)
        break;
    }
    resetear();
    resultado.textContent = aux;

}
