# Práctica 5
Para realizar este filtro de imagenes primero he creado rangos de entrada correspondientes a cada color Primario --> Rojo, verde y Azul, los cuales oscilan entre 0 y 255.
Tambíen he creado tres rectángulos cuya funcionalidad es solo indicar el color de cada slider. Sus id son first, second, third y fourth;
Correspondiéndose con rojo, verde, azul y transparencia.
El botón de reset que servirá para resetear los valores a su estado inicial(255).
Por otro lado el boton Blanco y negro servirá para quitar el color a las imagenes.
En el js creo otras variables para recoger las variables creadas en el html.
Posteriormente defino al canvas con las mismas dimensiones de la imagen.
La funcion filtrar sirve como su nombre indica para filtrar o separar los colores de la imagen
La funcion reset devuelve los valores del slider a su estado inicial, es decir, a 255.
Una vez movemos el slider de la transparencia tenemos que mover también cualquiera de los otros tres sliders para que se vea afectada la imagen.
Las modificaciones se encuentran en el canvas, mientras que la imagen original la obtenemos de imagesrc.
