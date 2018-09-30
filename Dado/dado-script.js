document.addEventListener("DOMContentLoaded", function() {

var tiroA = 0,
    tiroB = 0,
    vittoriaConsA = 0,
    vittoriaConsB = 0,
    giocatore1 = 0,
    giocatore2 = 0;

    function getValue(b) {
        if ( b === "100") {
            return (Math.round((Math.random() * 10)+ 1))*10;
        } else {
            return Math.round((Math.random() * b)+ 1);
        }
    }

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
                    var c = document.getElementById('input-dado').value;
                    giocatore1Tiro(b,c);
                break;

                case "player2" :
                     var b = document.querySelector("input[name=dado2]:checked").value;
                    giocatore2Tiro(b);
                break;

                default:;
            }
        });
    }


    function giocatore1Tiro(b,c) {
        if (tiroA <= tiroB) {
            console.log('Lancio del Giocatore 1');
            giocatore1 = (getValue(b)+parseInt(c));
            document.getElementById('roll').innerHTML="Tiro giocatore 1 " + "<br>" + giocatore1;
            console.log(giocatore1);
            tiroA++;
            checkWinner();
        }
    };
    function giocatore2Tiro(b) {
        if (tiroB <= tiroA) {
            console.log('Lancio del Giocatore 2');
            giocatore2 = getValue(b);
            document.getElementById('roll').innerHTML="Tiro giocatore 2 " + "<br>"  + giocatore2;
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
                setTimeout(function() {
                    document.getElementById('result').innerHTML="Il giocatore 1 ha vinto.";
                },5000);
                console.log("Il giocatore 1 ha vinto.");
            }else if (((giocatore2 > giocatore1) && vittoriaConsB !=2) || (vittoriaConsA == 2)) {
                vittoriaConsB++;
                vittoriaConsA = 0;
                setTimeout(function() {
                    document.getElementById('result').innerHTML="Il giocatore 2 ha vinto.";
                }, 5000);
                console.log("Il giocatore 2 ha vinto.");
            } else {
                setTimeout(function() {
                    document.getElementById('result').innerHTML="Pareggio.";
                }, 5000);
                console.log('Pareggio');
                vittoriaConsA = 0;
                vittoriaConsB = 0;
            }
        }
    };
});