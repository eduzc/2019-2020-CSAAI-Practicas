# Práctica 2
He hecho una calculadora sencilla incluyendo algunas teclas especiales como Pi, e, % y C para resetear la calculadora.
También he creado una variable llamada botones y luego la he asignado al id button.
Despues creo calcu y la asigno al id correspondiente.

Añado el valor del boton a la caja de texto "button", después cuando '=' es presionado se calcula su valor de esta forma: calc.value = eval(calc.value).

Funcionamiento de eval(ejemplo):
eval(new String("2 + 2")); // devuelve un objeto String que contiene "2 + 2", que es basicamente lo que hacemos al pulsar botones en la calculadora.

Cuando pulsamos c el texto se resetea, esto se debe a esta parte del código:
else if (this.innerHTML == "C")
calc.value = "";
La calculadora permite introducir numeros por teclado y pulsando botones.
