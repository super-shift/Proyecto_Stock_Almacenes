// definir las variables de precios de articulos
//var valor_1 = 2;
//var valor_2 = 1;
//var valor_3 = 3;
//var valor_4 = 5;
//var valor_5 = 7;

//// por completar
//var frase_1 = (valor_1).toString() + " monedas"
//var frase_2 += ((valor_2).toString() + " moneda");
//var frase_3 += ((valor_3).toString() + " monedas");
//var frase_4 += ((valor_4).toString() + " monedas");
//var frase_5 += ((valor_5).toString() + " monedas");
////

// poner precios 
//Producto_1.innerHTML += ((valor_1).toString() + " monedas");
//Producto_2.innerHTML += ((valor_2).toString() + " moneda");
//Producto_3.innerHTML += ((valor_3).toString() + " monedas");
//Producto_4.innerHTML += ((valor_4).toString() + " monedas");
//Producto_5.innerHTML += ((valor_5).toString() + " monedas");

// program data:
var monedas_variables = Math.floor(Math.random() * 100);
var monedas_fijas = 50
var monedas_totales = monedas_variables + monedas_fijas;

// asignacion de monedas
alert("Se te han asignado " + (monedas_totales).toString() + " monedas,\n usalas con sabiduria...");

// booleano para el while
var pedido_invalido = true;
var total = 0;

// definir las variables de cantidad de articulos
var articulo_1 = 0;
var articulo_2 = 0;
var articulo_3 = 0;
var articulo_4 = 0;
var articulo_5 = 0;

while(pedido_invalido){
	articulo_1 = parseInt(window.prompt("Por favor indique la cantidad de articulos 1 que desea:"));
	articulo_2 = parseInt(window.prompt(`Por favor indique la cantidad de articulos 2 que desea: Te quedan ${monedas_totales - (articulo_1 * valor_1)} monedas`));
	articulo_3 = parseInt(window.prompt(`Por favor indique la cantidad de articulos 3 que desea: Te quedan ${monedas_totales - (articulo_1 * valor_1) - (articulo_2 * valor_2)} monedas`));
	articulo_4 = parseInt(window.prompt(`Por favor indique la cantidad de articulos 4 que desea: Te quedan ${monedas_totales - (articulo_1 * valor_1) - (articulo_2 * valor_2) - (articulo_3 * valor_3)} monedas`));
	articulo_5 = parseInt(window.prompt(`Por favor indique la cantidad de articulos 5 que desea: Te quedan ${monedas_totales - (articulo_1 * valor_1) - (articulo_2 * valor_2) - (articulo_3 * valor_3) - (articulo_4 * valor_4)} monedas`));
	total = articulo_1*valor_1 + articulo_2*valor_2 + articulo_3*valor_3 +articulo_4*valor_4 + articulo_5*valor_5; 
	if(total <= monedas_totales){
		pedido_invalido = false;
		alert("Tu vuelto es: " + (monedas_totales - total).toString() + " monedas")
	}
	else{
		alert("No te alcanzan las monedas, intenta de nuevo");

	}
}


alert("Su pedido sera confirmado por telefono, gracias por confiar en nosotr@s :)")

// game control loop - iterates for each try
// for (var i = 0; i < limit; i++){
//     // prompt user for their guess
//     do{
//         guess = parseInt(prompt("Guess a number"));
//     } while(isNaN(guess) || isPreviousGuess(guess));
    
//     // if correct: let the user know they won
//     if(guess == number){
//         document.write("Correct! You won.");
//         won = true;
//         break;
//     }
//     // if incorrect: add number to guesses array
//     else{
//         guesses[i] = guess;
//         alert("incorrect. \nYou have guessed: " + guesses.toString() + "\nTries remaining: " + (limit - i));
//     }
// }

// // if the user ran out of tries, let them know the game is over
// if(!won){
//     document.write("Sorry, you ran out of tries. Game over. The correct number was: " + number);
// }

// function isPreviousGuess(){
//     for(var i = 0; i < guesses.length; i++){
//         if(guesses[i] == guess){
//             return true;
//         }
//     }
//     return false;
// }