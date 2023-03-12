HTML

Para empezar vamos a crear la entrada para el número del usuario en el html (con un input dentro de un label). Hacemos obligatorio que haya que ingresar un valor y que esté dentro del rango permitido.

JS

Creamos una función "generar", que genere el número aleatorio del 1 al 10, vamos a utilizar Math.random (genera un número aleatorio entre 0 y menor que 1), multiplicado por 10 y vamos a aplicar Math.ceil (redondeamos hacia arriba para que los números estén entre 1 y 10). Asignamos la variable "nro" al resultado de esta función.

Vamos a crear una función "comparar", que compare el número ingresado por el usuario con el número generado aleatoriamente. Con un condicional vamos a hacer que si es mayor, menor o igual nos indique con un mensaje de acuerdo a cada situación.

Creamos la variable "intentos" y le asignamos un valor inicial de 0, y una función "contador", que suma 1 a esta variable.

Finalmente, creamos la función "jugar", y la vinculamos usando onclick al botón "Comenzar" en el html. Esta función que se ejecuta cada vez que se intenta adivinar, suma 1 a la variable "intentos", y luego mediante un condicional, si el número de intentos es menor a 3, ejecuta la función comparar, de lo contrario avisa que se han utilizado todos los intentos.





