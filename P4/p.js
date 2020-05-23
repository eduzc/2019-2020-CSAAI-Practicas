function main()
{
  console.log("Reproductor de video")

  //-- Obtenemos el elemento correspondiente de cada video
  video1 = document.getElementById("video1")
  video2 = document.getElementById("video2")
  video3 = document.getElementById("video3")
  screen_ = document.getElementById("pantalla")

  //-- Funcionalidad con botones
  watch1 = document.getElementById('play1')
  watch2 = document.getElementById('play2')
  watch3 = document.getElementById('play3')

  //-- Una vez hacemos click en ver video
  //-- Indicamos la fuente de este

  watch1.onclick = () => {
    console.log("Reproduciendo...")
    screen_.src = "Video_1.mp4";
    screen_.currentTime = video1.currentTime;
  }
  watch2.onclick = () => {
    console.log("Reproduciendo...")
    screen_.src = "Video_2.mp4";
    screen_.currentTime = video2.currentTime;
  }
  watch3.onclick = () => {
    console.log("Reproduciendo...")
    screen_.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
    screen_.currentTime = video3.currentTime;
  }

  //-- Muestra si hemos hecho click en el video

  video1.onmouseover = () => {
    console.log("Mouse over video1!!")
    console.log("Musica video1!!")
    video1.muted = false;
  }
  video1.onmouseout = () => {
    console.log("Mouse out!!")
    video1.muted = true;
  }
  video2.onmouseover = () => {
    console.log("Mouse over video2!!")
    console.log("Musica video2!!")
    video2.muted = false;
  }
  video2.onmouseout = () => {
    console.log("Mouse out!!")
    video2.muted = true;
  }
  video3.onmouseover = () => {
    console.log("Mouse over video3!!")
    console.log("Musica video3!!")
    video3.muted = false;
  }
  video3.onmouseout = () => {
    console.log("Mouse out!!")
    video3.muted = true;
  }
}
