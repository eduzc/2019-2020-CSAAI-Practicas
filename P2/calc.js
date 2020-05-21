var numero1;
var numero2;
var operacion;

function init(){
  window.onload= function(){
    var resultado = document.getElementByid('resultado');
    var reset = document.getElementByid('reset');
    var sumar = document.getElementByid('sumar');
    var restar = document.getElementByid('restar');
    var multiplicar = document.getElementByid('multiplicar');
    var dividir = document.getElementByid('dividir');
    var igual = document.getElementByid('igual');
    var uno = document.getElementByid('uno');
    var dos = document.getElementByid('dos');
    var tres = document.getElementByid('tres');
    var cuatro = document.getElementByid('cuatro');
    var cinco = document.getElementByid('cinco');
    var seis = document.getElementByid('seis');
    var siete = document.getElementByid('siete');
    var ocho = document.getElementByid('ocho');
    var nueve = document.getElementByid('nueve');
    var cero = document.getElementByid('cero');
    var doble_cero = document.getElementByid('doble_cero');
  }
}

  //funcionalidad de botones
  uno.onclick = function(e){
    resultado.textContent = resultado.textContent + "1";
}
  dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";
}
  tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
}
  cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
}
  cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";
}
  seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";
}
  siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
}
  ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";
}
  nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
}
  cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0";
}
  doble_cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "00";
}
  reset.onclick = function(e){
    clean();
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
    clear();
    resultado.textContent = aux;


}
