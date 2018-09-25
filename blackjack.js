var banchiereCarta1 = Math.floor((Math.random() * 10) + 1);
var banchiereCarta2 = Math.floor((Math.random() * 10) + 1); 
var playerCarta1 = Math.floor((Math.random() * 10) + 1);
var playerCarta2 = Math.floor((Math.random() * 10) + 1);
var sommaCarteBanchiere = banchiereCarta1 + banchiereCarta2;
var sommaCartePlayer = playerCarta1 + playerCarta2;

function blackjack(a) {
    if (a > 15) {
        return 0;
    } else {
        return a;
    }
};
sommaCarteBanchiere = blackjack(sommaCarteBanchiere);
sommaCartePlayer = blackjack(sommaCartePlayer);

function checkWinner(a,b) {
    if (a >= b)  {
        console.log('Il vincitore è il banchiere');
    } else {
        console.log('Il vincitore è il player');
    } 
}; 
checkWinner(sommaCarteBanchiere,sommaCartePlayer);