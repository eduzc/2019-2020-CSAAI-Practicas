function main() {
  console.log("Starting")
  //-- Creamos nuestras variables con los id de html

  //-- Imagen original
  var img = document.getElementById('imagesrc')
  //-- Canvas
  var canvas = document.getElementById('display');

  //-- Creamos el Deslizador RGB
  Redslider = document.getElementById('R')
  Greenslider = document.getElementById('G')
  Blueslider = document.getElementById('B')
  trans = document.getElementById('trans')
  //-- Reseteamos los valores a la imagen original
  restart = document.getElementById('resetear')
  //-- Filtro Blanco y Negro
  Gris = document.getElementById('B_N')
  //-- Valores RGB del Deslizador
  R_value = document.getElementById('R_range');
  G_value = document.getElementById('G_range');
  B_value = document.getElementById('B_range');
  range_trans = document.getElementById('range_trans');
  // Tamaño canvas se corresponde con el de la imagen
  canvas.width = img.width;
  canvas.height = img.height;
  // Contexto canvas
  var ctx = canvas.getContext("2d");
  //Colocar imagen Img original en canvas
  ctx.drawImage(img, 0,0);
  // Obtener la imagen del canvas en pixeles
  var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  function aux() {
  ctx.drawImage(img, 0,0);
  }
  // Umbrales RGB
  function filtrar(data){
    Umbral_R = Redslider.value
    Umbral_G = Greenslider.value
    Umbral_B = Blueslider.value
    umbral_trans = trans.value

    for (var i = 0; i < data.length; i+=4) {
      if (data[i] > Umbral_R){
        data[i] = Umbral_R;
      }
      if (data[i+1] > Umbral_G){
        data[i+1] = Umbral_G;
      }
      if (data[i+1] > Umbral_B){
        data[i+2] = Umbral_B;
      }
      if (data[i+3] > umbral_trans){
        data[i+3] = umbral_trans;
      }
    }
  }

  // Reseteamos y volvemos a la imagen original
  function Reset () {
     //-- Situar la imagen original en el canvas
     //-- No se han hecho manipulaciones todavia
     aux();
     //-- Obtener la imagen del canvas en pixeles
     imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
     data = imgData.data
     deslizador_R.value = 255;
     deslizador_G.value = 255;
     deslizador_B.value = 255;
   }
  Redslider.oninput = () => {
    //-- Mostrar valor de Rojo
    R_value.innerHTML = Redslider.value
    aux();
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data
    filtrar(data);
    //-- Coloca la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }
  Greenslider.oninput = () => {
    G_value.innerHTML = Greenslider.value
    aux();
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data
    filtrar(data)
    ctx.putImageData(imgData, 0, 0);
  }
  Blueslider.oninput = () => {
    B_value.innerHTML = Blueslider.value
    aux();
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data
    filtrar(data)
    ctx.putImageData(imgData, 0, 0);
  }
  restart.onclick = () => {
    Reset();
    //-- Poner la imagen modificada en el canvas:
    ctx.putImageData(imgData, 0, 0);

  }
  trans.onclick = () => {
       range_trans.innerHTML = trans.value
       aux();
       var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
       var data = imgData.data
       print_img(data)
       ctx.putImageData(imgData, 0, 0);
     }
  Gris.onclick=()=>{
      var imgDataGris = ctx.getImageData(0, 0, canvas.width, canvas.height);
      //-- Obtener el array con todos los píxeles
      var data = imgDataGris.data;
      //-- Filtrar la imagen según el nuevo umbral
      for (var i = 0; i < data.length; i+=4) {
        var R_G = data[i];
        var V_G = data[i+1];
        var A_G = data[i+2];
        var Brillo = (3*R_G + 4*V_G + A_G)/8;
        data[i] = Brillo;
        data[i+1] = Brillo;
        data[i+2] = Brillo;
        }
        ctx.putImageData(imgDataGris, 0, 0);
      }
    
}
