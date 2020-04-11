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

var vuelto_num = 0;

while(pedido_invalido){
	articulo_1 = parseInt(window.prompt("Por favor indique la cantidad de articulos 1 que desea:"));
	articulo_2 = parseInt(window.prompt(`Por favor indique la cantidad de articulos 2 que desea: Te quedan ${monedas_totales - (articulo_1 * valor_1)} monedas`));
	articulo_3 = parseInt(window.prompt(`Por favor indique la cantidad de articulos 3 que desea: Te quedan ${monedas_totales - (articulo_1 * valor_1) - (articulo_2 * valor_2)} monedas`));
	articulo_4 = parseInt(window.prompt(`Por favor indique la cantidad de articulos 4 que desea: Te quedan ${monedas_totales - (articulo_1 * valor_1) - (articulo_2 * valor_2) - (articulo_3 * valor_3)} monedas`));
	articulo_5 = parseInt(window.prompt(`Por favor indique la cantidad de articulos 5 que desea: Te quedan ${monedas_totales - (articulo_1 * valor_1) - (articulo_2 * valor_2) - (articulo_3 * valor_3) - (articulo_4 * valor_4)} monedas`));
	total = articulo_1*valor_1 + articulo_2*valor_2 + articulo_3*valor_3 +articulo_4*valor_4 + articulo_5*valor_5; 
	if(total <= monedas_totales){
		pedido_invalido = false;
		vuelto_num = monedas_totales - total; 
	}
	else{
		alert("No te alcanzan las monedas, intenta de nuevo");

	}
}


alert("Su pedido sera confirmado por telefono, gracias por confiar en nosotr@s :)")


vuelto.innerHTML += "Tu vuelto es: " + (vuelto_num).toString() + " monedas";


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