//defer es para que se ejecute al final del todo
console.log("Ejecutando JS");

const.test = document.getElementById('test')

test.onclick = () => {
  console.log("tachan!");

  if(test.style.backgroundColor == "") {

    test.style.backgroundColor = "yellow";
  }
  else{

    test.style.backgroundColor = "";
  }
}
