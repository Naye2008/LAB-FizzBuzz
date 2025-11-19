//Inicio del codigo
//Para iniciar debemos definir nuestra primer variable que seria nuestro contados
let contador = 1;
//Inicializamos el bucle que llegue hasta el numero 20
while (contador <=1000) {
//Iniciamos con la primera condicion que es la mas estricta que sea divisible entre 3 y 5
  if (contador % 3 == 0 && contador % 5 == 0) {
    console.log("FizzBuzz");//imprime Fizzbuzz
  } else if (contador % 3 == 0) {//Si solo es divisible entre 3
    console.log("Fizz");//imprime Fizz
  } else if (contador % 5 == 0) {//Si solo es divisible entre 5
    console.log("Buzz");//imprime Buzz
  } else {
    console.log(contador);//Si NO ES DIVISIBLE ENTRE 3 y/o 5 imprime el numero
  }
  contador ++;// Incrementa el contador
}
