document.addEventListener("DOMContentLoaded", function() {

var tiroA = 0,
    tiroB = 0,
    vittoriaConsA = 0,
    vittoriaConsB = 0,
    giocatore1 = 0,
    giocatore2 = 0;

    function getValue(b) {
        return Math.round((Math.random() * b));
    }
var i = document.getElementById
    var x = document.querySelectorAll(".button-type button");
    for (let i = 0; i < x.length; i++) {
        x[i].addEventListener("click", function() {
            var dado = document.getElementById('animation');
            dado.classList.remove("dado-animation");    
            setTimeout(function() {
                dado.classList.add("dado-animation");
            }, 500);

            // switch => $variabile === valore
            switch(this.getAttribute('data-player')) {
                case "player1" :
                    var b = document.querySelector("input[name=dado]:checked").value;
                    giocatore1Tiro(b);
                break;

                case "player2" :
                     var b = document.querySelector("input[name=dado]:checked").value;
                    giocatore2Tiro(b);
                break;

                default:;
            }
        });
    }


    function giocatore1Tiro(b) {
        if (tiroA <= tiroB) {
            console.log('Lancio del Giocatore 1');
            giocatore1 = getValue(b);
            console.log(giocatore1);
            tiroA++;
            checkWinner();
        }
    };
    function giocatore2Tiro(b) {
        if (tiroB <= tiroA) {
            console.log('Lancio del Giocatore 2');
            giocatore2 = getValue(b);
            console.log(giocatore2);
            tiroB++;
            checkWinner();  
        }
    };
    function checkWinner() {
        if (tiroA == tiroB) {
            if (((giocatore1 > giocatore2) && vittoriaConsA != 2) || (vittoriaConsB == 2)) {
                vittoriaConsA++;
                vittoriaConsB = 0;
                console.log("Il giocatore 1 ha vinto.");
            }else if (((giocatore2 > giocatore1) && vittoriaConsB !=2) || (vittoriaConsA == 2)) {
                vittoriaConsB++;
                vittoriaConsA = 0;
                console.log("Il giocatore 2 ha vinto.");
            } else {
                console.log('Pareggio');
                vittoriaConsA = 0;
                vittoriaConsB = 0;
            }
        }
    };
});