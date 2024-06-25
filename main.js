/*Si el número del dado es par, y es menor o igual a 4, el jugador gana la partida.
Si el número del dado es non, y es mayor que el 2, el jugador pierde la partida.*/

let evaluatePartida = (number) => {
  if (number % 2 === 0 && number <= 4) {
    return "Ganaste la partida :)";
  } else if (number % 2 !== 0 && number > 2) {
    return "Perdiste la partida :(";
  }
};

console.log(evaluatePartida(2));
console.log(evaluatePartida(4));
console.log(evaluatePartida(5));
