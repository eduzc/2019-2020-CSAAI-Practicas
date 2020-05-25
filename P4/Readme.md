# Práctica 4
Selector de videos:
He probado utilizar videos guardados en local para la práctica y al situar el raton sobre las miniaturas se reproducian audio e imagen del video correspondiente.
Al realizar la prueba con los videos de clase el programa no hace esto último.
En el html definimos los botones y los videos que vamos a utilizar en el js dándoles un id a cada uno de ellos.
En el js creamos nuevas variables para recoger los id del html
Los botones video1, video2 y video3 sirven para reproducir los videos en pantalla
He puesto algunos mensajes consol.log para verificar si el programa reconocia el click sobre los botones.

He usado también:
  video2.onmouseover = () => {
  console.log("Mouse over video2!!")
  console.log("Musica video2!!")
  video2.muted = false;
Para reproducir el sonido del video correspondiente una vez coloco el cursor sobre el video, de forma análoga:

watch3.onclick = () => {
  console.log("Reproduciendo...")
  screen_.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
  screen_.currentTime = video3.currentTime;
}

Sirve para reproducir el video que hemos seleccionado pulsando el boton correspondiente en la pantalla, haciendo coincidir el currentTime de cada uno.
