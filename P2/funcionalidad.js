console.log("Calculadoraa");
var botones = document.getElementsByTagName("button");
var calcu = document.getElementById("calculadora");
for (var thisBtn of botones) {
  thisBtn.addEventListener('click', function() {
  if (this.innerHTML == "=")
    calcu.value = eval(calcu.value);
  else if (this.innerHTML == "C")
    calcu.value = "";
  else
    calcu.value += this.innerHTML;
    })
}
