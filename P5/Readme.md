# Práctica 5
Para realizar este filtro de imagenes primero he creado rangos de entrada correspondientes a cada color Primario --> Rojo, verde y Azul, los cuales oscilan entre 0 y 255.
Tambíen he creado tres rectángulos cuya funcionalidad es solo indicar el color de cada slider. Sus id son first, second, third y fourth;
Correspondiéndose con rojo, verde, azul y transparencia.
Recordemos que puesto que cada pixel tiene 4 bytes, en las posiciones múltiplo de 4 se encuentran los canales rojos (data[i4)), en las siguientes (data[i4 + 1]) los verdes, luego los azules (data[i4 + 2) y finalmete la transparencia (data[i*4 +3).

Dentro del for tenemos el filtro. for (var i = 0; i < data.length; i+=4) {
  if (data[i] > Umbral_R){
    data[i] = Umbral_R;

Dependiendo del valor de i filtraremos un color u otro.

El botón de reset que servirá para resetear los valores a su estado inicial(255).
Por otro lado el boton Blanco y negro servirá para quitar el color a las imagenes.
En el js creo otras variables para recoger las variables creadas en el html.
Posteriormente defino al canvas con las mismas dimensiones de la imagen.
La funcion filtrar sirve como su nombre indica para filtrar o separar los colores de la imagen
La funcion reset devuelve los valores del slider a su estado inicial, es decir, a 255.
La funcion gris sirve para poner en blanco y negro la imagen modificada, utilizamos la fórmula dada.
Una vez movemos el slider de la transparencia tenemos que mover también cualquiera de los otros tres sliders para que se vea afectada la imagen.
Las modificaciones se encuentran en el canvas, mientras que la imagen original la obtenemos de imagesrc.
