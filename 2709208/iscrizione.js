////// DATA
/* var iscrizoni = [
    {
    nome : 'Ivan',
    età  : 19,
    occhiali : true
    },
     {
    nome : 'Nicola',
    età :22,
    occhiali : true
    },
    {
    nome : 'Bruschetta',
    stivali : false
    }
]; */

var studente = {
    nome : 'Ivan',
    età  : 19,
    hasOcchiali : true
    };
var studente2 = {
    nome : 'Nicola',
    età :22,
    occhiali : true
    };

var iscrizioni = [studente,studente2];

///// PURE FUNCTIONS

[
    nome(studente) === 'Ivan',
]
.every(isTrue) || console.log('Test of nome failed!');


function nome (x) {
return x.nome;
}

/* function isTrue(x) {
    return x === true;
} */

///// SIDE EFFECTS (IMPURE FUNCTIONS)

/* for (i = 0;i < iscrizoni.length; i++) {
    console.log(nome(iscrizoni[i]));
} */



/* function stampaNome(studenteGenerico,i,array) {
    if (i != array.length -1) {
        console.log(studenteGenerico.nome,i);
    } else {
        console.log(studenteGenerico.nome,'ultimo');
    }
} */
// stampaNome(studente);

// var result = [];

iscrizioni.forEach(function (studenteGenerico) {
    console.log(studenteGenerico.nome); 
    });


/* for (i = 0;i < iscrizoni.length; i++) {
        result.push(nome(iscrizoni[i]));
}; 
console.log(result);   */


//

[1,2,3,4,5].map(function (n) {
    return n *2;
});
[1,2,3,4,5].filter(function(n) {
    return n >2;
});

// Test and examples 

[
    abs(10) === 10,
    abs(9) === 9,
    abs(-10) === 10,
    abs(0) === 0,
 ].every(n=>n) || console.log('Test of abs failed');  
 
 function abs(n) {
    return n < 0 ? -n : n;      
 }
 // 
 var result2 = 
        iscrizioni
            .filter(hasOcchiali)
            .map(getNome);

function hasOcchiali(generico) {
    return generico.hasOcchiali;
}

function getNome(studenteGenerico) {
    return studenteGenerico.nome;
}