# Práctica 3
Asignamos el valor de canvas para que coincida con el valor total de la ventana, tanto en vertical como en horizontal
definimos algunas variables que corresponderan con el sonido que se producira al ejecutar el programa y al ganar la IA o el Player1.

En este caso Chrome no deja ejecutar directamente los audios una vez cargamos la pagina, ya que primero debemos interactuar con esta, por ejemplo tocando una tecla o haciendo click. En otros navegadores es posible que se ejecute correctamente el script.

AppendChild sirve para heredar el canvas en la variable ctx.
Por otra parte this.x, hace referencia a la propiedad de este objeto. Se usa cuando estamos definiendo los objetos y sus propiedades.

Otras variables que he definido son la velocidad de la IA, puntuación de ambos jugadores y dimensiones y comportamiento de ambos jugadores en si.
Para la bola lo que hecho es centrarla y definir los limites de la pista para que esta rebotara, multiplicando su velocidad por -1.
Para el Player1 el movimiento estará definido por: document.body.addEventListener("mousemove", mouseMoveHandler);
y no por teclas.
Para ambos jugadores he definido limites inferiores y superiores. En el caso de la IA esto servirá para que así no se desplaze indefinidamente por el eje y. Lo que hago es multiplicar su velocidad por -1 cuando llegue al maxímo del tamaño de ventana

La funcion buttonColor sirve para definir el estilo de fuente del ctx, la funcion, update sirve para actualizar la posicion

Los objetos Set son colecciones de valores. Se puede iterar sus elementos en el orden de su inserción.
Utilizamos ++ para incrementar por 1 el valor de los puntos de cada jugador. Por ejemplo:
Si la puntuacion es 3, entonces  x++ devuelve 3 y, solo después de devolver el valor, establece Puntuacion a 4.

En este caso hemos establecido el limite de la puntuacion a 10 puntos, una vez llegamos a 10 borramos el canvas y lo sustituimos por un panel con el nombre del jugador que ha ganado.

----------------------------------------------------------------------------------
Nota:
Esta práctica en especial apenas tiene commits, ya que tuve problemas con el atom debido a que se me actualizó a la versión 1.47.0 la cual tiene problemas de compatibilidad con el paquete de vista previa del html, con lo que programe todo en un editor web y una vez conseguí que me funcionase lo copie al atom.
https://github.com/harmsk/atom-html-preview/issues/214
