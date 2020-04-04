// program data:
// Math.random() * 100 >> numero entre 1 y 100
// Math.floor() >> cajon inferior


// peticion de nombre
var userName = prompt("Como te llamas?");

// Primera alerta de bienvenido
alert("Bienvenid@ " + userName + " al almacen virtual,\nPor favor haga click en aceptar para poder continuar");

// Primera alerta de bienvenido
alert("Para el continuo mejoramiento de su experiencia,\nsus datos podrian ser guardados");

Titulo.innerHTML += "Hola " + userName + ", abajo se encuentran los precios para cada producto";



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