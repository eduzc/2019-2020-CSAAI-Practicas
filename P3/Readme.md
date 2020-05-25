# Práctica 3
Asignamos el valor de canvas para que coincida con el valor total de la ventana, tanto en vertical como en horizontal
definimos algunas variables que corresponderan con el sonido que se producira al ejecutar el programa y al ganar la IA o el Player1.

En este caso Chrome no deja ejecutar directamente los audios una vez cargamos la pagina, ya que primero debemos interactuar con esta, por ejemplo tocando una tecla o haciendo click.

Por otra parte appendChild sirve para heredar el canvas en la variable ctx.
Otras variables que he definido son la velocidad de la IA, puntuación de ambos jugadores y dimensiones y comportamiento de ambos jugadores en si.
Para la bola lo que hecho es centrarla y definir los limites de la pista para que esta rebotara, multiplicando su velocidad por -1.
Para el Player1 el movimiento estará definido por document.body.addEventListener("mousemove", mouseMoveHandler);
y no por teclas.
Para la IA he definido limites inferiores y superiores para que así no se desplaze indefinidamente.

La funcion buttonColor sirve para definir el estilo de fuente del ctx, la funcion, update sirve para actualizar la posicion
